import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    const { documentElement, body } = document;
    const previousBehavior = documentElement.style.scrollBehavior;

    documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    body.scrollTop = 0;
    documentElement.scrollTop = 0;
    documentElement.style.scrollBehavior = previousBehavior;
  }, [location.pathname, location.search, location.hash]);
};
