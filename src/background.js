const JUMP_TAB_TO = "jump-tab-";
chrome.commands.onCommand.addListener(function(command) {
  console.log(command);
  if (command.startsWith(JUMP_TAB_TO)) {
    const num = parseInt(command.slice(JUMP_TAB_TO.length));
    if (Number.isInteger(num) && num > 0) {
      chrome.tabs.query({currentWindow: true}, function(tabs) {
        let tab = tabs[num-1];
        if (num >= 9) tab = tabs[tabs.length - 1];
        chrome.tabs.update(tab.id, { selected: true })
      });
    }
  }
});