/**
 * Gemini Arcanea Integration
 *
 * Multi-modal Guardian agents with Google Gemini.
 *
 * @guardian Alera (Voice) + Lyria (Sight)
 * @package @arcanea/gemini
 */

export * from "./guardians";
export * from "./vision";

export interface GeminiConfig {
  apiKey?: string;
  model?: string;
  enableVision?: boolean;
  guardianDefault?: string;
}

export const defaultConfig: GeminiConfig = {
  model: "gemini-pro",
  enableVision: true,
  guardianDefault: "Shinkami",
};

/**
 * Initialize Arcanea for Gemini
 */
export async function initArcanea(config: GeminiConfig = {}): Promise<void> {
  const finalConfig = { ...defaultConfig, ...config };

  if (!finalConfig.apiKey && !process.env.GEMINI_API_KEY) {
    throw new Error(
      "Gemini API key required. Set GEMINI_API_KEY or pass apiKey in config.",
    );
  }

  console.log(
    `Arcanea Gemini initialized with Guardian: ${finalConfig.guardianDefault}`,
  );
  console.log(`Vision enabled: ${finalConfig.enableVision}`);
}

export default {
  initArcanea,
  defaultConfig,
};
