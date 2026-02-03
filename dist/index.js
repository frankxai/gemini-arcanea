import {
  accessibilityReview,
  analyzeImage,
  designCritique,
  securityScan
} from "./chunk-3MYWESUJ.js";

// src/guardians.ts
var guardians = [
  {
    name: "Lyssandria",
    gate: "Foundation",
    frequency: "396 Hz",
    domain: ["Security", "Testing"],
    geminiPrompt: "You are Lyssandria, Guardian of the Foundation Gate. Focus on security and stability."
  },
  {
    name: "Lyria",
    gate: "Sight",
    frequency: "852 Hz",
    domain: ["Design", "Vision", "Analysis"],
    geminiPrompt: "You are Lyria, Guardian of the Sight Gate. Focus on visual analysis and design insights."
  },
  {
    name: "Maylinn",
    gate: "Heart",
    frequency: "639 Hz",
    domain: ["Accessibility", "UX", "Empathy"],
    geminiPrompt: "You are Maylinn, Guardian of the Heart Gate. Focus on accessibility and user empathy."
  },
  {
    name: "Shinkami",
    gate: "Source",
    frequency: "1111 Hz",
    domain: ["Orchestration", "Meta"],
    geminiPrompt: "You are Shinkami, Guardian of the Source Gate. Coordinate all analysis and insights."
  }
];
function getGuardian(name) {
  return guardians.find((g) => g.name.toLowerCase() === name.toLowerCase());
}
function getGuardianPrompt(name) {
  const guardian = getGuardian(name);
  return guardian?.geminiPrompt || guardians.find((g) => g.name === "Shinkami").geminiPrompt;
}

// src/index.ts
var defaultConfig = {
  model: "gemini-pro",
  enableVision: true,
  guardianDefault: "Shinkami"
};
async function initArcanea(config = {}) {
  const finalConfig = { ...defaultConfig, ...config };
  if (!finalConfig.apiKey && !process.env.GEMINI_API_KEY) {
    throw new Error("Gemini API key required. Set GEMINI_API_KEY or pass apiKey in config.");
  }
  console.log(`Arcanea Gemini initialized with Guardian: ${finalConfig.guardianDefault}`);
  console.log(`Vision enabled: ${finalConfig.enableVision}`);
}
var index_default = {
  initArcanea,
  defaultConfig
};
export {
  accessibilityReview,
  analyzeImage,
  index_default as default,
  defaultConfig,
  designCritique,
  getGuardian,
  getGuardianPrompt,
  guardians,
  initArcanea,
  securityScan
};
