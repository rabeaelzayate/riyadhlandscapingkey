"use client";

import { useEffect } from "react";

export const PwaRegister: React.FC = () => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      process.env.NODE_ENV === "production"
    ) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            // Check for updates periodically
            registration.onupdatefound = () => {
              const installingWorker = registration.installing;
              if (installingWorker) {
                installingWorker.onstatechange = () => {
                  if (
                    installingWorker.state === "installed" &&
                    navigator.serviceWorker.controller
                  ) {
                    console.log("New PWA content available; please refresh.");
                  }
                };
              }
            };
          })
          .catch((error) => {
            console.warn("ServiceWorker registration failed:", error);
          });
      });
    } else if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      // In development mode, register as well for local testing
      navigator.serviceWorker
        .register("/sw.js")
        .catch((err) => console.log("Dev SW registration:", err));
    }
  }, []);

  return null;
};
