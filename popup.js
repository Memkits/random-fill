window.onload = () => {
  document.getElementById("zh").onclick = () => {
    chrome.runtime.sendMessage(
      { action: "popup-fill", data: "zh" },
      (response) => {
        console.log(response);
      }
    );
  };

  document.getElementById("en").onclick = () => {
    chrome.runtime.sendMessage(
      { action: "popup-fill", data: "en" },
      (response) => {
        console.log(response);
      }
    );
  };

  document.getElementById("code").onclick = () => {
    chrome.runtime.sendMessage(
      { action: "popup-fill", data: "code" },
      (response) => {
        console.log(response);
      }
    );
  };
};
