/*
    based off of SimpleSerial index.js Created 7 May 2013 Modified 9 May 2013 by Tom Igoe
*/
//model
var Data = Backbone.Model.extend();
var Sensor = Backbone.Model.extend();
var Home = Backbone.Model.extend();

var DataList = Backbone.Collection.extend({
	model: Data,
    	url: './js/data.json'
});
var SensorList = Backbone.Collection.extend({
	model: Sensor,
    	url: './js/sensor.json'
});
var HomeList = Backbone.Collection.extend({
	model: Home,
    	url: './js/menu.json'
});
var HomeView = Backbone.View.extend({
	el: '#content',
	render: function(){
		$(this.el).html(this.template(this.model.toJSON()));		
		}
});
var DataListView = Backbone.View.extend({
	el: '#content',
	initialize: function(){
		console.log(this.collection.url);
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addOne, this);
	},
    	addOne: function(d){
		console.log(d);
		var dataListItemView = new DataListItemView({model: d});
		dataListItemView.render();
	},
        render: function(){
		// clear current stage
		$(this.el).html("");
		this.collection.forEach(this.addOne, this);
	}
});
var SensorListView = Backbone.View.extend({
	el: '#content',
	initialize: function(){
		console.log(this.collection.url);
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addOne, this);
	},
    	addOne: function(c){
		console.log(c);
		var sensorListItemView = new SensorListItemView({model: c});
		sensorListItemView.render();
	},
        render: function(){
                // clear current stage
		$(this.el).html("");
		this.collection.forEach(this.addOne, this);
	}
});
var HomeListView = Backbone.View.extend({
	el: '#content',
    	template: _.template($('#menu-template').html()),
	initialize: function(){
		console.log("initialize");
		//console.log(this.collection.url);
		//console.log(this.collection);
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addOne, this);
	},
        events: {
		'click .choice' : 'showMenu'
	},
        showMenu: function(e){
		e.preventDefault();
		var id = $(e.currentTarget).data("id");
		//alert(id);
		appRouter.navigate('/' + id, {trigger: true});
    	},
    	addOne: function(c){
		console.log("addone");
		console.log(c);
		var homeListItemView = new HomeListItemView({model: c});
		homeListItemView.render();
	},
        render: function(){
		console.log("render");
		console.log(this.collection);
		this.collection.forEach(this.addOne, this);
		/*
		console.log(this.collection);
		$(this.el).html(this.template({
			menu: this.collection.toJSON()
		}));
		$(this.el).append(this.template(this.el));
		
		console.log("end render");
		return this;
		*/
	}
});
var DataListItemView = Backbone.View.extend({
	el: '#content',
    	template: _.template($('#data-template').html()),
	render: function(eventName){
		//console.log(this.model.toJSON());
		$(this.el).append(this.template(this.model.toJSON()));
		return this;
	}
});
var SensorListItemView = Backbone.View.extend({
	el: '#content',
    	template: _.template($('#sensor-template').html()),
	render: function(eventName){
		//console.log(this.model.toJSON());
		$(this.el).append(this.template(this.model.toJSON()));
		return this;
	}
});
var HomeListItemView = Backbone.View.extend({
	el: '#content',
    	template: _.template($('#menu-template').html()),
    	//template: _.template('<li><%= title %></li>'),
	render: function(eventName){
		//console.log(this.model.toJSON());
		$(this.el).append(this.template(this.model.toJSON()));
		return this;
	}
});
var appRouter = new (Backbone.Router.extend({
  routes: {
	"": "start",
	"sensor": "sensor",
	"data": "data"
  },
  initialize: function(){
	console.log("initialize");
	//this.controlList = new SensorList();
	//this.controlListView = new SensorListView({collection: this.controlList});
	//this.controlListView.render();
	//this.controlList.fetch();
  },
  start: function(){
	console.log("start");
	this.homeList = new HomeList();
	this.homeListView = new HomeListView({collection: this.homeList});
	this.homeListView.render();
	this.homeList.fetch();
  },
  data: function(){
	console.log("data");
	this.dataList = new DataList();
	this.DataListView = new DataListView({collection: this.dataList});
	this.DataListView.render();
	this.dataList.fetch();
  },
  sensor: function(){
	console.log("sensor");
	this.controlList = new SensorList();
	this.controlListView = new SensorListView({collection: this.controlList});
	this.controlListView.render();
	this.controlList.fetch();
  }
}));
//var SESSIONID = +new Date;
var app = {
    //macAddress: "AA:BB:CC:DD:EE:FF",  // get your mac address from bluetoothSerial.list
    macAddress: "98:76:B6:00:15:ED",  // get your mac address from bluetoothSerial.list
    chars: "",
    initialize: function() {
        this.bindEvents();
    },
    submitData: function() {
    	alert("submitData Initiated");
     function rsubmit(s){
	var url = 'http://data.sccwrp.org/sensor/load.php';
	message = $.ajax({
		type: 'GET',
		url: url,
		contentType: "application/json",
		dataType: 'jsonp',
		data: {ss: s},
		crossDomain: true,
		timeout: 4000,
		error: function(x,t,m){ 
			 if(t==="timeout"){ alert("Data not Submitted"); }
		}, 
		success: function(data) {
			alert("status:"+data.submit);
		},
		complete: function(data) {
			//alert("complete:"+data.key);
	        }
    	});
      }
      /* working - original 9may14
      var logStorage = window.localStorage.getItem("logKeys");
      var logSubmit = [""+SESSIONID+"",""+logStorage+""];
      alert("Submit: "+logSubmit);
      */
     var prevStorage = window.localStorage.getItem("prevKeys");
     if (prevStorage != null){
	     alert("The following session keys are saved " + prevStorage);
	     var keysArray = prevStorage.split(',');
	     //var connectionStatus = navigator.onLine ? 'online' : 'offline';
	     //if(connectionStatus != "offline") {
	     var currentKey; // currentKey = sessionid
	     var loopNum=keysArray.length;
	     alert("Should loop " + loopNum + " times");
	     for(var i=0; i<loopNum; i++){
		     //alert("Loop number " +  i + "");
		     currentKey = keysArray.pop();
		     var read =  window.localStorage.getItem(currentKey);
		     alert("Read Session: "+ read);
     		     rsubmit(read);
			     //to_submit = read.split(',');
			     //n = oldKey.split('_')[1];
	     }
	     //window.localStorage.removeItem("prevKeys");
	     //alert("Unable to submit data");
     }
     //rsubmit(logSubmit);
    },
/*
    bind any events that are required on startup to listeners:
*/
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, true);
        connectButton.addEventListener('touchend', app.manageConnection, false);
        clearButton.addEventListener('click', app.clearData, false);
        dataButton.addEventListener('touchend', app.getData, false);
        tempButton.addEventListener('touchend', app.tempData, false);
        phButton.addEventListener('touchend', app.phData, false);
        showButton.addEventListener('touchend', app.showData, false);
	submitButton.addEventListener('click', app.submitData, false);
	sdButton.addEventListener('click', app.sdSave, false);
	gpsButton.addEventListener('click', app.gpsData, false);
	camButton.addEventListener('click', app.getCamera, false);
	dirButton.addEventListener('click', app.dirList, false);
    },

/*
    this runs when the device is ready for user interaction:
*/
    onDeviceReady: function() {
	alert("onDeviceReady");
	// request file system
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFSSuccess, onError);
        // check to see if Bluetooth is turned on.
        // this function is called only
        //if isEnabled(), below, returns success:
        var listPorts = function() {
            // list the available BT ports:
            bluetoothSerial.list(
                function(results) {
                    app.display(JSON.stringify(results));
                },
                function(error) {
                    app.display(JSON.stringify(error));
                }
            );
        }

        // if isEnabled returns failure, this function is called:
        var notEnabled = function() {
            app.display("Bluetooth is not enabled.")
        }

         // check if Bluetooth is on:
        bluetoothSerial.isEnabled(
            listPorts,
            notEnabled
        );

	function onFSSuccess(fs){
	    fileSystem = fs;
	    elog("Got file system: "+fileSystem.name);
	    console.log("file system");
	    doDirectoryListing();
	}
	function doDirectoryListing(e){
	    var dirReader = fileSystem.root.createReader();
	    dirReader.readEntries(gotFiles,onError);
	}
	function getById(id){
	    return document.querySelector(id);
	}
	function onError(e){
	    getById("#content").innerHTML = "<h2>Error</h2>"+e.toString();
	}
	function eLog(s){
	    getById("#content").innerHTML += s;
	}
    },
/*  control sensors */
    tempData: function(){
	    alert("tempData");
	    var text = "t\r";
	    bluetoothSerial.write(text, function(){ alert("tempConnection Succeeded"); }, function(){ alert("tempConnection Failed"); });
	    alert(tempButton.val());
	    tempButton.innerHTML = "Temperature Off";
    },
    clearData: function(){
	    alert("clearData");
	    window.localStorage.clear();
	    //window.localStorage.removeItem("prevKeys");
	    alert("Check: " + window.localStorage.getItem("logKeys"));
    },
    dirList: function(){
    	var dirReader = fileSystem.root.createReader();
    	dirReader.readEntries(gotFiles,onError);    
	function gotFiles(entries) {
    		var s = "";
    		for(var i=0,len=entries.length; i<len; i++) {
        	//entry objects include: isFile, isDirectory, name, fullPath
        	s+= entries[i].fullPath;
        	if (entries[i].isFile) {
            		s += " [F]";
        	} else {
            		s += " [D]";
        	}
        	s += "<br/>";
    		}
    		s+="<p/>";
    		console.log(s);
	}

    },
    showData: function(){
	    alert("showData");
	    alert("Test Pull: " + window.localStorage.getItem("prevKeys"));
    },
  sdSave: function(){
    console.log("SD Save");
    console.log("SD End");
  },
    gpsData: function(){
	    alert("GPS");
	    var onSuccess = function(position){
		    alert("Latitude: "+ position.coords.latitude);
		    alert("Longitude: "+ position.coords.longitude);
	    };
	    function onError(error){
		alert("code: "+ error.code);
		alert("message: "+ error.message);
	    }
	    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },
  getCamera: function(){
    console.log("Camera");
    function onSuccess(imageURI){
      var image = document.getElementById('myImage');
      image.src = imageURI;
    }
    function onFail(message){
      alert("Failed because: "+ message);
    }
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		    destinationType: Camera.DestinationType.FILE_URI });
  },
/*
    Connects if not connected, and disconnects if connected:
*/
    getData: function() {
	    alert("getData Initiated");
	    var text = "g\r";
	    bluetoothSerial.write(text, function(){ alert("getData Succeeded"); }, function(){ alert("getData Failed"); });
    },
    manageConnection: function() {
        var connect = function () {
	    //alert(app.macAddress);
            app.display("Attempting to connect. " +
             "Make sure the serial port is open on the target device.");
            //bluetoothSerial.connect(
            bluetoothSerial.connectInsecure(
                app.macAddress,  // device to connect to
                app.openPort,    // start listening if you succeed
                app.showError    // show the error if you fail
            );
        };

        // disconnect() will get called only if isConnected() (below)
        // returns success  In other words, if  connected, then disconnect:
        var disconnect = function () {
            app.display("attempting to disconnect");
            // if connected, do this:
            bluetoothSerial.disconnect(
                app.closePort,     // stop listening to the port
                app.showError      // show the error if you fail
            );
        };

        // here's the real action of the manageConnection function:
        bluetoothSerial.isConnected(disconnect, connect);
    },
/*
    subscribes to a Bluetooth serial listener for newline
    and changes the button:
*/
    openPort: function() {
        // if you get a good Bluetooth serial connection:
        app.display("Connected to: " + app.macAddress);
        // change the button's name:
        connectButton.innerHTML = "Disconnect";
        // set up a listener to listen for newlines
        // and display any new data that's come in since
        // the last newline:
	/* working code doesn't require delimiter
	bluetoothSerial.read(function (data) {
		alert(data);
		app.display(data);
	}, function(){ alert("read Failed"); });
	*/
	var dataString;
        bluetoothSerial.subscribe(':', function (data) {
	    var SESSIONID = +new Date;
            //app.clear();
            app.display(data);
	    alert(data);
	    // key structure - key ring [sessionid1],[sessionid2],[sessionid3]
	    // points to stored data location [sessionid1][data to store]
	    // add another session to the key ring
	    var keyStorage = window.localStorage.getItem("prevKeys");
	    if (keyStorage != null){
			//alert("The following sessions are saved " + keyStorage);
			keyStorage = ""+ keyStorage +","+ SESSIONID +"";
		} else {
			var keyStorage = ""+ SESSIONID +"";
		}	
		// save session key to key ring
		window.localStorage.setItem("prevKeys", keyStorage);
		alert("Test pull of prevKeys: " + keyStorage);
		// add data to session key
		window.localStorage.setItem(SESSIONID, data);
        }, app.showError);
	//bluetoothSerial.read(function (rdata){
	//	app.display(rdata);
        //});
    },

/*
    unsubscribes from any Bluetooth serial listener and changes the button:
*/
    closePort: function() {
        // if you get a good Bluetooth serial connection:
        app.display("Disconnected from: " + app.macAddress);
        // change the button's name:
        connectButton.innerHTML = "Connect";
        // unsubscribe from listening:
        bluetoothSerial.unsubscribe(
                function (data) {
                    app.display(data);
                },
                app.showError
        );
    },
/*
    appends @error to the message div:
*/
    showError: function(error) {
        app.display(error);
    },

/*
    appends @message to the message div:
*/
    display: function(message) {
        var display = document.getElementById("message"), // the message div
            lineBreak = document.createElement("br"),     // a line break
            label = document.createTextNode(message);     // create the label

        display.appendChild(lineBreak);          // add a line break
        display.appendChild(label);              // add the message node
    },
/*
    clears the message div:
*/
    clear: function() {
        var display = document.getElementById("message");
        display.innerHTML = "";
    }
};      // end of app
