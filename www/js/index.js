/* interface */
  var Home = Backbone.Model.extend();
  var Sensor = Backbone.Model.extend();
  var HomeList = Backbone.Collection.extend({
	model: Home,
    	url: './menu.json'
  });
  var SensorList = Backbone.Collection.extend({
	model: Sensor,
    	url: './sensor.json'
  });
  var HomeListView = Backbone.View.extend({
	el: '#menu',
    	template: _.template($('#menu-template').html()),
	initialize: function(){
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addOne, this);
	},
        events: {
		'click .choice' : 'showMenu'
	},
        showMenu: function(e){
		e.preventDefault();
		var id = $(e.currentTarget).data("id");
		alert(e.currentTarget);
		appRouter.navigate('sensor/' + id, {trigger: true});
    	},
    	addOne: function(c){
		var homeListItemView = new HomeListItemView({model: c});
		homeListItemView.render();
	},
        render: function(){
		this.collection.forEach(this.addOne, this);
	}
  });
  var SensorListView = Backbone.View.extend({
	el: '#menu',
	initialize: function(){
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addOne, this);
	},
    	addOne: function(c){
		var sensorListItemView = new SensorListItemView({model: c});
		sensorListItemView.render();
	},
        render: function(){
		alert("SensorListView");
		//$(this.el).html("");
		this.collection.forEach(this.addOne, this);
	}
  });
  var HomeListItemView = Backbone.View.extend({
	el: '#menu',
    	template: _.template($('#menu-template').html()),
	render: function(eventName){
		$(this.el).append(this.template(this.model.toJSON()));
		return this;
	}
  });
  var SensorListItemView = Backbone.View.extend({
	el: '#content',
    	template: _.template($('#sensor-template').html()),
	render: function(eventName){
		$(this.el).append(this.template(this.model.toJSON()));
		return this;
	}
  });

  var appRouter = new (Backbone.Router.extend({
  routes: {
	"": "start",
	"sensor/sensor": "sensor"
  },
  sensor: function(){
	alert("sensor");
	this.sensorList = new SensorList();
	this.sensorListView = new SensorListView({collection: this.sensorList});
	this.sensorListView.render();
	this.sensorList.fetch();
  },
  start: function(){
	alert("start");
	this.homeList = new HomeList();
	this.homeListView = new HomeListView({collection: this.homeList});
	this.homeListView.render();
	this.homeList.fetch();
  }
  }));

var fileSystem;
var app = {
    macAddress: "98:76:B6:00:15:ED",  // get your mac address from bluetoothSerial.list
    chars: "",

/* device functions */
  getId: function(id) {
    return document.querySelector(id);
  },
  bindEvents: function(){
    app.getId("#blueConnect").addEventListener("touchstart",app.blueConnect);         
    app.getId("#blueData").addEventListener("touchstart",app.blueData);         
    app.getId("#clearDataButton").addEventListener("touchstart",app.clearLocalData);         
    app.getId("#fileCreateButton").addEventListener("touchstart",app.fileCreate);            
    app.getId("#fileDirButton").addEventListener("touchstart",app.fileDirectoryListing);            
    app.getId("#clearContentButton").addEventListener("touchstart",app.clearContent);            
    app.getId("#getGPSButton").addEventListener("touchstart",app.getGPS);            
    app.getId("#getCameraButton").addEventListener("touchstart",app.getCamera);            
    app.getId("#saveDataButton").addEventListener("click",app.saveLocalData);            
    app.getId("#sendSMSButton").addEventListener("click",app.sendSMS);            
    app.getId("#showDataButton").addEventListener("click",app.showLocalData);            
    app.getId("#submitDataButton").addEventListener("click",app.submitLocalData);            
  },
  clearContent: function() {
    app.getId("#content").innerHTML = "";
  },
  showContent: function(s) {
    app.getId("#content").innerHTML += s;
  },

/* start bluetooth functions */
  blueConnect: function() {
        var connect = function () {
	    alert(app.macAddress);
            app.showContent("Attempting to connect. " +
             "Make sure the serial port is open on the target device.");
            //bluetoothSerial.connect(
            bluetoothSerial.connectInsecure(
                app.macAddress,  // device to connect to
                app.openPort,    // start listening if you succeed
                app.showError    // show the error if you fail
            );
        };
        var disconnect = function () {
            app.showContent("attempting to disconnect");
            bluetoothSerial.disconnect(
                app.closePort,     // stop listening to the port
                app.showError      // show the error if you fail
            );
        };
        // here's the real action of the manageConnection function:
        bluetoothSerial.isConnected(disconnect, connect);
  },
  openPort: function(){
        blueConnect.innerHTML = "Disconnect";
	var dataString;
        bluetoothSerial.subscribe(':', function (data) {
	    var SESSIONID = +new Date;
            app.showContent(data);
	    alert(data);
	    // key structure - key ring [sessionid1],[sessionid2],[sessionid3]
	    // points to stored data location [sessionid1][data to store]
	    // add another session to the key ring
	    /*
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
	    */
        }, app.showError);
  },
  closePort: function(){
        app.showContent("Disconnected from: " + app.macAddress);
        blueConnect.innerHTML = "Connect";
        bluetoothSerial.unsubscribe(
                function (data) {
                    app.showContent(data);
                },
                app.showError
        );
  },
  blueData: function() {
	    alert("getData Initiated");
	    var text = "g\r";
	    bluetoothSerial.write(text, function(){ alert("getData Succeeded"); }, function(){ alert("getData Failed"); });
  },
  showError: function(error) {
        app.showContent(error);
  },
/* end bluetooth functions */

/* start file storage functions */
  gotFiles: function(entries) { 
    alert("gotFiles");
    var s = "";
    for(var i=0,len=entries.length; i<len; i++) {
	s+= entries[i].fullPath;
	if (entries[i].isFile) {
	  s += " [F]";
	} else {
	  s += " [D]";
	}
	s += "<br/>";
    }
    s+="<p/>";
    app.showContent(s);
  },
  fileDirectoryListing: function(e) {
    alert("fileDirectoryListing");
    //get a directory reader from our FS
    var dirReader = fileSystem.root.createReader();
    dirReader.readEntries(app.gotFiles,app.onError);        
  },
  onFSSuccess: function(fs) {
    //alert("onFSSuccess");
    fileSystem = fs; 
    return fileSystem;
    //app.fileDirectoryListing();
  },
  // file writing f=file,s=string
  fileAppend: function(f) {
    alert("fileAppend");
    f.createWriter(function(writerOb) {
        writerOb.onwrite=function() {
            app.showContent("Done writing to file.<p/>");
        }
        //go to the end of the file...
        writerOb.seek(writerOb.length);
        //writerOb.write("Test at "+new Date().toString() + "\n");
	var localSave = app.getLocalData("local","save");
	alert(localSave);
        writerOb.write(localSave);
	alert("successfully wrote");
    })
  },
  fileCreate: function(e) {
    alert("fileCreate");
    alert(fileSystem);
    fileSystem.root.getFile("test.txt", {create:true}, app.fileAppend, app.onError);
  },

/* end file storage */

/* start local storage */
  dataSyncCheck: function(){
	alert("code for dataSyncCheck");
  },
  clearLocalData: function(){
	    alert("clearData");
	    window.localStorage.clear();
	    //window.localStorage.removeItem("prevKeys");
	    alert("Check: " + window.localStorage.getItem("logKeys"));
  },
  // local function for looping through local data a=local or remote,t=save or delete
  getLocalData: function(a,t){
     alert("a: "+a);
     alert("t: "+t);
     var localSave;
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
		     if(a=="local"){
     			//alert("a: "+a);
			localSave += read;	
		     }
		     //alert("Read Session: "+ read);
		     if(a=="remote"){
     		       //rsubmit(read); // working
		     	app.submitRemote(read);
		     }
			     //to_submit = read.split(',');
			     //n = oldKey.split('_')[1];
	     }
	     if(a=="local"){
   		alert("a Save: ");
		return localSave;
	     }
	     //window.localStorage.removeItem("prevKeys");
	     //alert("Unable to submit data");
      }

  },
  submitRemote: function(s){
     //function rsubmit(s){
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
			app.dataSyncCheck();
		},
		complete: function(data) {
			//alert("complete:"+data.key);
	        }
    	});
      //} 
      //rsubmit(s);
  },
  saveLocalData: function(){
    alert("saveLocalData");
    fileSystem.root.getFile("test.txt", {create:true}, app.fileAppend, app.onError);
  },
  showLocalData: function(){
    alert("showLocalData");
    alert("Test Pull: " + window.localStorage.getItem("prevKeys"));
  },
  submitLocalData: function(){
    alert("submitLocalData");
    app.getLocalData("remote","save");
  },
/* end local storage */

  getGPS: function(){
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
    alert("Camera");
    function onSuccess(imageURI){
      var image = document.getElementById('myImage');
      image.src = imageURI;
    }
    function onFail(message){
      alert("Failed because: "+ message);
    }
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
  },
  sendSMS: function(){
	alert("sendSMS");
	//smsplugin.send("5625727718","test from sccwrp",successCallback(result),failureCallback(error));
	sms = window.plugins.sms;
	sms.isSupported(successCallback(function(result) { alert("SMS works"); }), failureCallback(function(result) { alert("SMS failed"); }));
  },
  onError: function() {
    alert("onError");
  },
  onDeviceReady: function() {
    alert("onDeviceReady");
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, app.onFSSuccess, app.onError);
    var listPorts = function() {
            bluetoothSerial.list(
                function(results) {
                    app.showContent(JSON.stringify(results));
                },
                function(error) {
                    app.showContent(JSON.stringify(error));
                }
            );
    }
    var notEnabled = function() {
            app.showContent("Bluetooth is not enabled.")
    }
    bluetoothSerial.isEnabled(
            listPorts,
            notEnabled
    );
  },
  initialize: function() {
	//alert("initialize");
	app.bindEvents();
    	document.addEventListener("deviceready", app.onDeviceReady, true);
  }
};
