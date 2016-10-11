var app = require("app");
var os = require("os");
var browserWindow = require("browser-window");
var autoUpdater = require("auto-updater");

var platform = os.platform() + "_" + os.arch();
var version = app.getVersion();

autoUpdater.setFeedURL("http://update.landho-app.com/update/" + platform + "/" + version);

// keep a global reference of the window object, if you don"t, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on("window-all-closed", function() {

	// on OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform != "darwin") {
		app.quit();
	}
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on("ready", function() {

	// create the browser window.
	mainWindow = new browserWindow({
		"width": 1200,
		"height": 800,
		"node-integration": false
	});

	// and load the index.html of the app.
	mainWindow.loadURL("file://" + __dirname + "/landho-core/index.html");
	//mainWindow.toggleDevTools();

	// emitted when the window is closed.
	mainWindow.on("closed", function() {

		// dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
});
