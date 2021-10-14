const DEFAULT_COLOR = "#FFFFFF";

function applyBackgroundColor(color) {
  document.body.style.backgroundColor = color || DEFAULT_COLOR;
}

function getColorStorageKey() {
  return `newTabColor${chrome.extension.inIncognitoContext ? 'Incognito' : ''}`;
}