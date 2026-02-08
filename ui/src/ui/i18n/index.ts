/**
 * Internationalization module for OpenClaw Config UI
 */
import { en, type I18nStrings } from "./en.ts";
import { zh } from "./zh.ts";

export type Locale = "en" | "zh";

// Storage key for persisting locale preference
const LOCALE_STORAGE_KEY = "openclaw_locale";

// Current locale state
let currentLocale: Locale = "en";

// Locale strings map
const locales: Record<Locale, I18nStrings> = { en, zh };

/**
 * Set the current locale and persist to localStorage
 */
export function setLocale(locale: Locale): void {
  currentLocale = locale;
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
  } catch {
    // Ignore storage errors
  }
}

/**
 * Get the current locale
 */
export function getLocale(): Locale {
  return currentLocale;
}

/**
 * Get the current locale strings object
 */
export function getStrings(): I18nStrings {
  return locales[currentLocale] ?? en;
}

/**
 * Get a translated string by key
 */
export function t<K extends keyof I18nStrings>(key: K): I18nStrings[K] {
  const strings = locales[currentLocale] ?? en;
  return strings[key] ?? en[key];
}

/**
 * Detect locale from URL parameter, localStorage, or browser language
 */
export function detectLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  // 1. Check URL parameter (?lang=zh)
  const url = new URL(window.location.href);
  const langParam = url.searchParams.get("lang");
  if (langParam === "zh" || langParam === "zh-CN" || langParam === "zh-cn") {
    return "zh";
  }
  if (langParam === "en") {
    return "en";
  }

  // 2. Check localStorage
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === "zh" || stored === "en") {
      return stored;
    }
  } catch {
    // Ignore storage errors
  }

  // 3. Check browser language
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage;
  if (browserLang?.startsWith("zh")) {
    return "zh";
  }

  return "en";
}

/**
 * Initialize locale from URL, localStorage, or browser settings
 */
export function initLocale(): void {
  const detected = detectLocale();
  setLocale(detected);

  // Remove lang param from URL after detection (cleaner URLs)
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.delete("lang");
      window.history.replaceState({}, "", url.toString());
    }
  }
}

// Re-export types
export type { I18nStrings };
