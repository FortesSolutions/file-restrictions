// Based on https://support.microsoft.com/en-us/office/blocked-attachments-in-outlook-434752e1-02d3-4e90-9124-8b81e49a8519
import BLOCKED_FILE_TYPES from "./blockedExtensions.json";

const SIZE_LIMIT = 250 * 1000 * 1000; // 250 MB

export {
	SIZE_LIMIT,
	BLOCKED_FILE_TYPES
}
