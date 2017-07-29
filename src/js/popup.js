chrome.tabs.executeScript({
  code: "window.getSelection().toString();"
}, function (selection) {
  var url = 'http://www.youdict.com';
  if (selection && selection[0]) {
    url += '/w/' + selection[0];
  }
  document.querySelector('iframe').src = url;
});
