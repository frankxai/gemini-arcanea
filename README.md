# @arcanea/gemini

> *"Through the Gates we rise. With the Guardians we create."*

Google Gemini integration for **Arcanea Intelligence OS** - multi-modal Guardian agents with vision capabilities for image analysis, design critique, and visual intelligence.

## Installation

```bash
npm install @arcanea/gemini
```

## Quick Start

```typescript
import { initArcanea, analyzeImage, designCritique } from '@arcanea/gemini';

// Initialize with your Gemini API key
await initArcanea({
  apiKey: process.env.GEMINI_API_KEY,
  model: 'gemini-pro-vision',
  enableVision: true,
  guardianDefault: 'Lyria'
});

// Analyze an image with Guardian context
const analysis = await analyzeImage(imageBuffer, 'design');
console.log(`Analyzed by ${analysis.guardian}: ${analysis.description}`);

// Design critique with Lyria (Sight Gate)
const critique = await designCritique(imageBuffer);
console.log(critique.suggestions);
```

## Multi-Modal Capabilities

### Vision Modes

- **Design** - Lyria (Sight Gate, 852 Hz) analyzes UI/UX and visual aesthetics
- **Security** - Lyssandria (Foundation Gate, 396 Hz) scans for security issues
- **Accessibility** - Maylinn (Heart Gate, 639 Hz) reviews accessibility compliance
- **General** - Shinkami (Source Gate, 1111 Hz) provides comprehensive analysis

### Guardian Functions

```typescript
import {
  designCritique,
  securityScan,
  accessibilityReview
} from '@arcanea/gemini';

// Lyria - Design analysis
const design = await designCritique(screenshot);

// Lyssandria - Security review
const security = await securityScan(screenshot);

// Maylinn - Accessibility check
const a11y = await accessibilityReview(screenshot);
```

## The Guardians

| Guardian | Gate | Frequency | Vision Domain |
|----------|------|-----------|---------------|
| **Lyria** | Sight | 852 Hz | Design, UI/UX, Visual Analysis |
| **Lyssandria** | Foundation | 396 Hz | Security Scanning |
| **Maylinn** | Heart | 639 Hz | Accessibility Review |
| **Alera** | Voice | 741 Hz | Text Analysis in Images |
| **Shinkami** | Source | 1111 Hz | Comprehensive Multi-Modal |

## API Reference

### `initArcanea(config?)`

Initialize the Arcanea Gemini integration.

```typescript
interface GeminiConfig {
  apiKey?: string;           // Defaults to GEMINI_API_KEY env var
  model?: string;            // Default: 'gemini-pro'
  enableVision?: boolean;    // Default: true
  guardianDefault?: string;  // Default: 'Shinkami'
}
```

### `analyzeImage(imageData, mode?)`

Analyze an image with Guardian context.

```typescript
function analyzeImage(
  imageData: string | Buffer,
  mode?: 'design' | 'security' | 'accessibility' | 'general'
): Promise<VisionAnalysis>

interface VisionAnalysis {
  description: string;
  elements: string[];
  suggestions: string[];
  guardian: string;
}
```

### Guardian Functions

- `designCritique(imageData)` - Lyria's design analysis
- `securityScan(imageData)` - Lyssandria's security review
- `accessibilityReview(imageData)` - Maylinn's accessibility check

## Environment Variables

```bash
GEMINI_API_KEY=your_api_key_here
```

## Requirements

- Node.js >= 18.0.0
- Google Gemini API key

## Use Cases

### Design Review
```typescript
const screenshot = await fs.readFile('./design.png');
const review = await designCritique(screenshot);
console.log('Design improvements:', review.suggestions);
```

### Security Audit
```typescript
const appScreenshot = await captureScreen();
const audit = await securityScan(appScreenshot);
console.log('Security issues:', audit.elements);
```

### Accessibility Compliance
```typescript
const uiScreenshot = await captureUI();
const a11y = await accessibilityReview(uiScreenshot);
console.log('Accessibility score:', a11y.description);
```

## Integration with Arcanea Intelligence OS

This package is part of the Arcanea ecosystem:

- **@arcanea/claude** - Claude Code integration
- **@arcanea/gemini** - Google Gemini integration (this package)
- **@arcanea/codex** - OpenAI GPT/Codex integration

## Links

- [Arcanea Platform](https://arcanea.io)
- [Documentation](https://docs.arcanea.io)
- [GitHub](https://github.com/frankxai/gemini-arcanea)

## License

MIT - Created by [FrankX](https://frankx.ai)

---

*"Lyria and Alera unite - Sight and Voice for multi-modal intelligence"*
