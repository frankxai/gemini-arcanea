export { VisionAnalysis, VisionMode, accessibilityReview, analyzeImage, designCritique, securityScan } from './vision.js';

/**
 * Guardian definitions for Gemini
 */
interface Guardian {
    name: string;
    gate: string;
    frequency: string;
    domain: string[];
    geminiPrompt: string;
}
declare const guardians: Guardian[];
declare function getGuardian(name: string): Guardian | undefined;
declare function getGuardianPrompt(name: string): string;

/**
 * Gemini Arcanea Integration
 *
 * Multi-modal Guardian agents with Google Gemini.
 *
 * @guardian Alera (Voice) + Lyria (Sight)
 * @package @arcanea/gemini
 */

interface GeminiConfig {
    apiKey?: string;
    model?: string;
    enableVision?: boolean;
    guardianDefault?: string;
}
declare const defaultConfig: GeminiConfig;
/**
 * Initialize Arcanea for Gemini
 */
declare function initArcanea(config?: GeminiConfig): Promise<void>;
declare const _default: {
    initArcanea: typeof initArcanea;
    defaultConfig: GeminiConfig;
};

export { type GeminiConfig, type Guardian, _default as default, defaultConfig, getGuardian, getGuardianPrompt, guardians, initArcanea };
