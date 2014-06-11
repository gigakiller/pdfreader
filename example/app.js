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