console.info("Random Fill extension is injected.");

let sep = "-";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "random-fill") {
    sendResponse({ action: "pong" });
    let el = document.activeElement;

    switch (request.text) {
      case "@dash-sep":
        sep = "-";
        break;
      case "@no-sep":
        sep = "";
        break;
      case "@blank-sep":
        sep = " ";
        break;
      default:
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          let text = el.value;
          if (text.length === 0) {
            el.value = request.text;
          } else if (text.endsWith(" ") || text.endsWith("-")) {
            el.value = text + request.text;
          } else {
            el.value = text + sep + request.text;
          }

          var event = new Event("input", { bubbles: true });
          el.dispatchEvent(event);
        }
        break;
    }
  }
});
