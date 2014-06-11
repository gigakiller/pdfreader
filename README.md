#PDF Reader for Titanium Android Apps

## Description

This module extends https://github.com/JoanZapata/android-pdfview in titanium. 

Note : only the basic usage is extend for now.

## Usage

```javascript
var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	exitOnClose : true
});
if (Ti.Platform.name == "android") {
	var pdfreader = require('com.mykingdom.pdfreader');
	var pdfReader = pdfreader.createReader();
	win.add(pdfReader);
	//Make sure the file exists
	var file = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, "sample.pdf");
	pdfReader.loadPDFFromFile(file);
}
win.open();
```
