"use client";

import { useState, useEffect, useCallback } from "react";

// Extend BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. Check if running in standalone mode (already installed app)
    const checkStandalone = () => {
      const isStandaloneMode =
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
        document.referrer.includes("android-app://");
      setIsStandalone(isStandaloneMode);
      setIsInstalled(isStandaloneMode);
    };

    checkStandalone();

    // 2. Check if iOS device
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // 3. Check dismissed banner preference in localStorage
    const dismissedTime = localStorage.getItem("pwa_banner_dismissed_time");
    if (dismissedTime) {
      const hoursPassed = (Date.now() - parseInt(dismissedTime, 10)) / (1000 * 60 * 60);
      // Re-show after 24 hours if dismissed
      if (hoursPassed < 24) {
        setIsBannerDismissed(true);
      }
    }

    // 4. Capture beforeinstallprompt event for Android / Chrome / Edge
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    // 5. Capture appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      localStorage.setItem("pwa_app_installed", "true");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const triggerInstall = useCallback(async () => {
    if (deferredPrompt) {
      // Native Chrome / Android install prompt
      try {
        await deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === "accepted") {
          setIsInstalled(true);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.error("Install prompt error:", err);
      }
    } else if (isIOS && !isStandalone) {
      // iOS Guide
      setShowIosGuide(true);
    } else {
      // General instructions / fallback
      setShowIosGuide(true);
    }
  }, [deferredPrompt, isIOS, isStandalone]);

  const dismissBanner = useCallback(() => {
    setIsBannerDismissed(true);
    localStorage.setItem("pwa_banner_dismissed_time", Date.now().toString());
  }, []);

  const canInstall = !isInstalled && !isStandalone && (!!deferredPrompt || isIOS);

  return {
    isMounted: mounted,
    canInstall,
    isInstalled,
    isStandalone,
    isIOS,
    hasNativePrompt: !!deferredPrompt,
    showIosGuide,
    setShowIosGuide,
    isBannerDismissed,
    dismissBanner,
    triggerInstall,
  };
}
