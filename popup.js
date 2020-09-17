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

  document.getElementById("dash-sep").onclick = () => {
    chrome.runtime.sendMessage(
      { action: "popup-fill", data: "@dash-sep" },
      (response) => {
        console.log(response);
        window.close();
      }
    );
  };

  document.getElementById("blank-sep").onclick = () => {
    chrome.runtime.sendMessage(
      { action: "popup-fill", data: "@blank-sep" },
      (response) => {
        console.log(response);
        window.close();
      }
    );
  };

  document.getElementById("no-sep").onclick = () => {
    chrome.runtime.sendMessage(
      { action: "popup-fill", data: "@no-sep" },
      (response) => {
        console.log(response);
        window.close();
      }
    );
  };
};
