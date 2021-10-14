function setInputColorValue(value) {
  document.querySelector("#color").value = value;
}

function getInputColorValue() {
  return document.querySelector("#color").value;
}

function disableSaveButton(disabled) {
  document.querySelector('#save-button').disabled = disabled;
}

function restoreOptions() {
  const newTabColorStorageKey = getColorStorageKey();
  chrome.storage.sync.get({ [newTabColorStorageKey]: DEFAULT_COLOR }, (data) => {
    setInputColorValue(data[newTabColorStorageKey]);
    applyBackgroundColor(data[newTabColorStorageKey]);
    disableSaveButton(true);
  });
  console.log(chrome.extension.inIncognitoContext);
}

function saveOptions() {
  disableSaveButton(true);
  const color = getInputColorValue();
  const newTabColorStorageKey = getColorStorageKey();
  chrome.storage.sync.set({ [newTabColorStorageKey]: color });
}

function setBackgroundColor() {
  disableSaveButton(false);
  const color = getInputColorValue();
  applyBackgroundColor(color);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('#color').addEventListener('input', setBackgroundColor);
document.querySelector('#save-button').addEventListener('click', saveOptions);