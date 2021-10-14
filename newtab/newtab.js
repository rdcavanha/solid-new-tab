function init() {
  const newTabColorStorageKey = getColorStorageKey();
  chrome.storage.sync.get(newTabColorStorageKey, (data) => {
    applyBackgroundColor(data[newTabColorStorageKey]);
  });
}

document.addEventListener('DOMContentLoaded', init);