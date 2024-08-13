chrome.runtime.onInstalled.addListener(() => {
  console.log("hello")


  chrome.contextMenus.create({
    id: "ForScale",
    title: "For Scale: \"%s\"", 
    contexts: ["selection"], 
  })
})



chrome.contextMenus.onClicked.addListener((info, tab) => {
  
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ["popup.js"]
  })
  .then((async() => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    await chrome.tabs.sendMessage(tab.id, {message: info.selectionText});
  })());


})