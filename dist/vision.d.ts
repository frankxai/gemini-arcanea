/**
 * Vision capabilities for Gemini - Lyria's domain
 */
interface VisionAnalysis {
    description: string;
    elements: string[];
    suggestions: string[];
    guardian: string;
}
type VisionMode = "design" | "security" | "accessibility" | "general";
/**
 * Analyze an image with Guardian context
 */
declare function analyzeImage(imageData: string | Buffer, mode?: VisionMode): Promise<VisionAnalysis>;
/**
 * Design critique with Lyria
 */
declare function designCritique(imageData: string | Buffer): Promise<VisionAnalysis>;
/**
 * Security scan with Lyssandria
 */
declare function securityScan(imageData: string | Buffer): Promise<VisionAnalysis>;
/**
 * Accessibility review with Maylinn
 */
declare function accessibilityReview(imageData: string | Buffer): Promise<VisionAnalysis>;

export { type VisionAnalysis, type VisionMode, accessibilityReview, analyzeImage, designCritique, securityScan };
