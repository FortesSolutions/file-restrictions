// Based on https://support.microsoft.com/en-us/office/blocked-attachments-in-outlook-434752e1-02d3-4e90-9124-8b81e49a8519
import BLOCKED_FILE_TYPES from "./blockedExtensions.json";

const SIZE_LIMIT = 250 * 1000 * 1000; // 250 MB

function isBlockedFileName(fileName) {
	if (typeof fileName !== 'string') {
		throw new Error('Expected a string');
	}

	// Blocked characters
	const forbidden = /[\\/:*?"<>|]/g;
	const leading = /^[ ]+/g;
	const trailing = /[. ]+$/g;

	return (forbidden.test(fileName) || leading.test(fileName) || trailing.test(fileName));
}

/**
 * Checks whether file name has a match in BLOCKED_FILE_TYPES
 * @param {string} fileName
 * @returns {boolean}
 */
function isBlockedFileType(fileName) {
	if (typeof fileName !== 'string') {
		throw new Error('Expected a string');
	}

	const matches = fileName.match(new RegExp(/\.[^.]+$/)); // Match last dot and any following characters

	if (!matches) {
		return false;
	}

	const fileType = matches[0].toLocaleLowerCase();
	return BLOCKED_FILE_TYPES.includes(fileType);
}

export {
	SIZE_LIMIT,
	BLOCKED_FILE_TYPES,
	isBlockedFileName,
	isBlockedFileType
}
