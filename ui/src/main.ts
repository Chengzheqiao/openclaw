import "./styles.css";
import { initLocale } from "./ui/i18n/index.ts";

// Initialize locale from URL param, localStorage, or browser language
initLocale();

import "./ui/app.ts";
