/* interface */
  var Action = Backbone.Model.extend();
  var File = Backbone.Model.extend();
  var Home = Backbone.Model.extend();
  var Misc = Backbone.Model.extend();
  var Sensor = Backbone.Model.extend();
  var HomeList = Backbone.Collection.extend({
	model: Home,
    	url: 'menu.json'
  });
  var ActionList = Backbone.Collection.extend({
	model: Action,
    	url: 'bluetooth.json',
	//parse: function(data){
	  //console.log("parse");
	  //console.log(data);
	//}
  });
  var FileList = Backbone.Collection.extend({
	model: File,
    	url: 'file.json',
  });
  var MiscList = Backbone.Collection.extend({
	model: Misc,
    	url: 'misc.json',
  });
  var SensorList = Backbone.Collection.extend({
	model: Sensor,
    	url: 'sensor.json',
	//parse: function(data){
	 // console.log("parse");
	  //console.log(data);
	//}
  });
  var HomeListView = Backbone.View.extend({
	el: '#menu',
    	template: _.template($('#menu-template').html()),
	initialize: function(){
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addOne, this);
	},
        events: {
		'click .ui-btn' : 'showMenu'
	},
        showMenu: function(e){
		e.preventDefault();
		//e.removeClass("ui-btn-active");
		$('.ui-btn').removeClass($.mobile.activeBtnClass);
                //alert($(event.target).attr('class'));
                myparent = $(event.target).parent();
		//console.log(e.currentTarget.child);
                //alert(myparent.attr('class'));
		//myparent.removeClass('ui-state-active');
		var x  = e.currentTarget;
		var id = $(e.currentTarget).data("id");
		//alert("showMenu: "+id);
		//alert(x.id);
		$(".ui-btn").removeClass('ui-state-active ui-state-hover');
		//var item = this.collection.get(id);
		//var name = item.get("title");
		//alert(name);
		appRouter.navigate(id, true);
		//$.mobile.changePage(id, { reverse: false, changeHash: false});
		//alert(e.currentTarget);
    	},
    	addOne: function(c){
		var homeListItemView = new HomeListItemView({model: c});
		homeListItemView.render();
	},
        render: function(){
		// clear blank li in main page before laying out menu
		$(this.el).html("");	
		this.collection.forEach(this.addOne, this);
	}
  });
  var ActionListView = Backbone.View.extend({
	el: '#submenu',
	initialize: function(){
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addOne, this);
	},
    	addOne: function(c){
		//alert("addOne"+c);
		console.log("addOne"+c);
		var actionListItemView = new ActionListItemView({model: c});
		actionListItemView.render();
	},
        render: function(){
		//alert("ActionListView"+ this.collection);
		console.log("ActionListView"+ this.collection);
		$(this.el).html("");
		$('#sensormenu').html("");
		this.collection.forEach(this.addOne, this);
	}
  });
  var SensorListView = Backbone.View.extend({
	el: '#submenu',
	initialize: function(){
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addOne, this);
	},
    	addOne: function(c){
		var sensorListItemView = new SensorListItemView({model: c});
		sensorListItemView.render();
	},
        render: function(){
		$(this.el).html("");
		this.collection.forEach(this.addOne, this);
	}
  });
  var HomeListItemView = Backbone.View.extend({
	el: '#menu',
    	template: _.template($('#menu-template').html()),
	render: function(eventName){
		$(this.el).append(this.template(this.model.toJSON()));
		$(this.el).trigger("create");
		return this;
	}
  });
  var ActionListItemView = Backbone.View.extend({
	el: '#submenu',
    	template: _.template($('#action-template').html()),
	initialize: function(){
		$(this.el).unbind("click");
	},
        events: {
		'click .ui-btn' : 'showAction'
	},
        showAction: function(e){
		e.preventDefault();
		var id = $(e.currentTarget).data("id");
		//alert("showAction: "+id);
		switch(id) {
		  case "blueConnect":
       			app.blueConnect();
    		  break;
		  case "blueClear":
       			app.blueClear();
    		  break;
		  case "blueData":
       			app.blueData();
    		  break;
		  case "clearContent":
       			app.clearContent();
    		  break;
		  case "clearLocalData":
       			app.clearLocalData();
    		  break;
		  case "fileCreate":
       			app.fileCreate();
    		  break;
		  case "fileDirectoryListing":
       			app.fileDirectoryListing();
    		  break;
		  case "getCamera":
       			app.getCamera();
    		  break;
		  case "getGPS":
       			app.getGPS();
    		  break;
		  case "nativeAlert":
       			app.nativeAlert();
    		  break;
		  case "saveLocalData":
       			app.saveLocalData();
    		  break;
		  case "sendSMS":
       			app.sendSMS();
    		  break;
		  case "showLocalData":
       			app.showLocalData();
    		  break;
		  case "submitLocalData":
       			app.submitLocalData();
    		  break;
		  case "testData":
       			app.testData();
    		  break;
		  case "uploadFile":
       			app.uploadFile();
		  break;
		  case "blueClear":
       			app.blueClear();
    		  break;
		  case "blueData":
       			app.blueData();
    		  break;
		  case "clearContent":
       			app.clearContent();
    		  break;
		  case "clearLocalData":
       			app.clearLocalData();
    		  break;
		  case "fileCreate":
       			app.fileCreate();
    		  break;
		  case "fileDirectoryListing":
       			app.fileDirectoryListing();
    		  break;
		  case "getCamera":
       			app.getCamera();
    		  break;
		  case "getGPS":
       			app.getGPS();
    		  break;
		  case "nativeAlert":
       			app.nativeAlert();
    		  break;
		  case "saveLocalData":
       			app.saveLocalData();
    		  break;
		  case "sendSMS":
       			app.sendSMS();
    		  break;
		  case "showLocalData":
       			app.showLocalData();
    		  break;
		  case "submitLocalData":
       			app.submitLocalData();
    		  break;
		  case "testData":
       			app.testData();
    		  break;
		  case "uploadFile":
       			app.uploadFile();
    		  break;
		}
		//app["blueConnect"]();
	},
	render: function(eventName){
		//alert("ActionListItemView");
		$(this.el).append(this.template(this.model.toJSON()));
		$('#submenu').trigger("create");
		return this;
	}
  });
  var SensorListItemView = Backbone.View.extend({
	el: '#sensormenu',
    	template: _.template($('#sensor-template').html()),
	initialize: function(){
		$(this.el).unbind("vclick");
	},
        events: {
		'vclick .ui-btn-text' : 'showSensor'
	},
        showSensor: function(e){
		e.preventDefault();
		// old not used - $(event.target).attr('class') gets ui-flipswitch-off when clicking off
		// old not used - $(e.target).data("id") / $(event.target).parent()
		/* get id of button clicked - eg. Color */
		var id = $(e.currentTarget).data("id");
		/* get text of button clicked - eg. Color-off */
		var idGet = ($("#"+id+"").text());
		/* split button text */
		splitID = idGet.split('-');
		/* send text of button off to blueOnOff for further processing*/ 		
		app.blueOnOff(idGet);
var textr = "";
    var i;
    for (i = 0; i < 5; i++) {
	    app.showContent("Dragon");
    }
app.showContent(textr);		
		bluetoothSerial.read(function (wer) {
			app.showContent(wer);	
		}, function(){ alert("read Failed"); });
		
		
		/* set text of button to opposite */
		if(splitID[1] == "Off"){
			($("#"+id+"").text(""+ splitID[0] +"-On"));
		} else {
			($("#"+id+"").text(""+ splitID[0] +"-Off"));
		}
		//alert(splitID[0]);
		//alert(splitID[1]);
	},
	render: function(eventName){
		$(this.el).append(this.template(this.model.toJSON()));
		$('#sensormenu').trigger("create");
		return this;
	}
  });
  var appRouter = new (Backbone.Router.extend({
  navigate: function (url){
	// override pushstate and load url
	Backbone.history.loadUrl(url);
  },
  routes: {
	"action": "action",
	"file": "file",
	"misc": "misc",
	"sensor": "sensor"
  },
  action: function(){
	//alert("action");
	this.actionList = new ActionList();
	this.actionListView = new ActionListView({collection: this.actionList});
	this.actionListView.render();
	this.actionList.fetch();
  },
  file: function(){
	//alert("file");
	this.fileList = new FileList();
	this.fileListView = new ActionListView({collection: this.fileList});
	this.fileListView.render();
	this.fileList.fetch();
  },
  misc: function(){
	//alert("misc");
	this.miscList = new MiscList();
	this.miscListView = new ActionListView({collection: this.miscList});
	this.miscListView.render();
	this.miscList.fetch();
  },
  sensor: function(){
	//alert("sensor");
	this.sensorList = new SensorList();
	this.sensorListView = new SensorListView({collection: this.sensorList});
	this.sensorListView.render();
	this.sensorList.fetch();
  },
  start: function(){
	//alert("start");
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
    position: "",
    SESSIONID: +new Date,

/* device functions */
  getId: function(id) {
    return document.querySelector(id);
  },
  bindEvents: function(){
    //app.getId("#blueConnect").addEventListener("touchstart",app.blueConnect);         
    //app.getId("#blueData").addEventListener("touchstart",app.blueData);         
    //app.getId("#clearDataButton").addEventListener("click",app.clearLocalData);         
    //app.getId("#fileCreateButton").addEventListener("touchstart",app.fileCreate);            
    //app.getId("#fileDirButton").addEventListener("touchstart",app.fileDirectoryListing);            
    //app.getId("#clearContentButton").addEventListener("touchstart",app.clearContent);            
    //app.getId("#getGPSButton").addEventListener("click",app.getGPS);            
    //app.getId("#getCameraButton").addEventListener("touchstart",app.getCamera);            
    //app.getId("#nativeAlertButton").addEventListener("click",app.nativeAlert);            
    //app.getId("#saveDataButton").addEventListener("click",app.saveLocalData);            
    //app.getId("#sendSMSButton").addEventListener("click",app.sendSMS);            
    //app.getId("#showDataButton").addEventListener("click",app.showLocalData);            
    //app.getId("#submitDataButton").addEventListener("click",app.submitLocalData);            
    //app.getId("#testDataButton").addEventListener("click",app.testData);            
    //app.getId("#fileUploadButton").addEventListener("click",app.uploadFile);            
    //app.getGPS(); -- move to deviceREady
  },
  clearContent: function() {
    app.getId("#content").innerHTML = "";
  },
  showContent: function(s) {
    app.getId("#content").innerHTML += s;
  },

/* start bluetooth functions */
  blueConnect: function() {
	alert("blueConnect");
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
	var jsonString;
        bluetoothSerial.subscribe('|', function (data) {
	  //var res = data.charAt(0);
	  //if res is empty remove first and last characters
	  //if(!res || 0 === res.length){
		//jsonString = data.substring(1, data.length-1);		
	  //} 
	  //if(data !== "Initializing SD card...Initializing SD card...initialization done."){
	  //var dataType = typeof(data);
	  //alert("Data: "+data);
	    jsonString = data.replace(/\|/g, '');
	  //alert("jsonString: "+jsonString);
	    //var app.SESSIONID = +new Date;
	    // remove | pipe ending
	    //var jsonString = '{"result":true,"count":1}';
	    //var jsonString = eval("(function(){return " + dataString + ";})()");
	    //alert(jsonString.id);
	    //alert(jsonString.ec);
	    //alert("Before JSON: "+ dataString);
            //app.showContent(jsonString);
	    //alert(jsonString.id);
	    // key structure - key ring [sessionid1],[sessionid2],[sessionid3]
	    // points to stored data location [sessionid1][data to store]
	    // add another session to the key ring
	    //var randomNumber = Math.floor(Math.random()*100);
	    // parse data string into json format
	    var parsedJSON = JSON.parse(jsonString); 
	    //alert("JSON: "+parsedJSON.id);	
	    // save session key to key ring
	    var sessionKey = "sensor-keys-" + app.SESSIONID + "-" + parsedJSON.id;
	    alert(sessionKey);
	    var keyStorage = window.localStorage.getItem("sensor-keys");
	    if (keyStorage != null){
			//alert("The following sessions are saved " + keyStorage);
			keyStorage = ""+ keyStorage +","+ sessionKey +"";
	    } else {
			var keyStorage = "sensor-keys-"+ sessionKey +"";
	    }	
	    window.localStorage.setItem("sensor-keys", keyStorage);
	    // add data to session key
	    window.localStorage.setItem(""+ sessionKey +"" , jsonString);
    	    var currentStorage = window.localStorage.getItem(""+ sessionKey +"");
    	    alert("currentStorage: "+ currentStorage);
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
  blueClear: function() {
	    alert("Clear Arduino");
	    var text = "z\r";
	    bluetoothSerial.write(text, function(){ alert("Clear Arduino Succeeded"); }, function(){ alert("Clear Arduino Failed"); });
  },
  blueData: function() {
	    alert("getData Initiated");
	    var text = "g\r";
	    bluetoothSerial.write(text, function(){ alert("getData Succeeded"); }, function(){ alert("getData Failed"); });
  },
  blueOnOff: function(e){
        switch(e) {
          case "Color-Off":
	      var text = "b\r";
	  break;
	  case "Color-On":
	      var text = "c\r";
	  break;
          case "DO-Off":
	      var text = "5\r";
	  break;
	  case "DO-On":
	      var text = "6\r";
	  break;
          case "EC-Off":
	      var text = "1\r";
	  break;
	  case "EC-On":
	      var text = "2\r";
	  break;
          case "PH-Off":
	      var text = "7\r";
	  break;
	  case "PH-On":
	      var text = "8\r";
	  break;
          case "ORP-Off":
	      var text = "3\r";
	  break;
	  case "ORP-On":
	      var text = "4\r";
	  break;
          case "Temperature-Off":
	      var text = "9\r";
	  break;
	  case "Temperature-On":
	      var text = "a\r";
	  break;
          case "All-Off":
	      var text = "d\r";
	  break;
	  case "All-On":
	      var text = "e\r";
	  break;
	  case "M1-On":
		var text = "m1\r";
	  break;
	  case "M1-Off":
		var text = "Q\r";
	  break;
	  case "M2-On":
		var text = "m2\r";
	  break;
	  case "M2-Off":
		var text = "Q\r";
	  break;
	  case "M3-On":
		var text = "m3\r";
	  break;
	  case "M3-Off":
		var text = "Q\r";
	  break;
	  case "M4-On":
		var text = "Q\r";
	  break;
	  case "M4-Off":
		var text = "m4\r";
	  break;
	  case "PH7Cal-Off":
	  	var text="0\r";
	  break;
	  case "PH7Cal-On":
	  	var text="c\r";
	  break;
	  case "PH4Cal-Off":
		var text="0\r";
	  break;
	  case "PH4Cal-On":
		var text="0\r";
	  break;
	  case "PHC-On":
		var text="C,0\r";
		var handle="Exit the Dragon";
	  break;
	  case "PHC-Off":
		var text="C,1\r";	
		var handle="Enter the Dragon";
	  break;
	}
   	bluetoothSerial.write(text, function(){ 
		alert("Success Command: "+text); 
	}, function(){ alert("Failed Command: "+text); });
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
    alert(f.fullPath);
    f.createWriter(function(writerOb) {
        writerOb.onwrite=function() {
            app.showContent("Done writing to file.<p/>");
        }
        //go to the end of the file...
        writerOb.seek(writerOb.length);
        //writerOb.write("Test at "+new Date().toString() + "\n");
	var localSave = app.getLocalData("local","save");
        writerOb.write(localSave);
	alert("successfully wrote");
    })
  },
  fileCreate: function(e) {
    alert("fileCreate");
    alert(fileSystem);
    fileSystem.root.getFile("test.txt", {create:true}, app.fileAppend, app.onError);
  },
  uploadFile: function(e) {
    alert("uploadFile to SCCWRP");
    //var fileURL = "cdvfile://localhost/test.txt";
    var fileURL = "file:///storage/sdcard0/test.txt";
    function win(r){
	    //alert(r);
            alert("Code = " + r.responseCode);
            alert("Response = " + r.response);
            alert("Sent = " + r.bytesSent);
    }
    function fail(error){
    	alert("An error has occurred: Code = " + error.code);
    	alert("upload error source " + error.source);
    	alert("upload error target " + error.target);
    }

    var uri = encodeURI("http://data.sccwrp.org/sensor/upload.php");

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/')+1);
    options.mimeType = "text/plain";
    
    var headers={'headerParam':'headerValue'};
    options.headers = headers;

    var ft = new FileTransfer();
    ft.onprogress = function(progressEvent){
	if(progressEvent.lengthComputable){
	  loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
	} else {
	  loadingStatus.increment();
	}
    }
    ft.upload(fileURL, uri, win, fail, options);
  },
/* end file storage */

/* start local storage */
  dataSyncCheck: function(da,dc,dt){
	// send autoid and captureid to see if record is in remote database
	//alert("dataSyncCheck autoid: "+ da);
	//alert("dataSyncCheck captureid: "+ dc);
	//alert("dataSyncCheck timestamp: "+ dt);
	// if the record is in database remove local record
	alert("dataSyncCheck");
        var url = 'http://data.sccwrp.org/sensor/check.php';
        message = $.ajax({
                type: 'GET',
                url: url,
                contentType: "application/json",
                dataType: 'jsonp',
                data: {aa: da,cc: dc,tt: dt},
                crossDomain: true,
                timeout: 4000,
                error: function(x,t,m){
                         if(t==="timeout"){ alert("dataSyncCheck not Submitted"); }
                },
                success: function(data) {
			// first delete value
			var currentRecord = "sensor-keys-"+ dt +"-"+ dc;
			alert("Value to Delete: "+ currentRecord);
        		window.localStorage.removeItem(currentRecord);
			// second delete key from ring	
        		var prevStorage = window.localStorage.getItem("sensor-keys");
			// not a good idea - remove current key ring
       			//window.localStorage.removeItem("sensor-keys");
        		if (prevStorage != null){
	     			alert("Get Key Ring: " + prevStorage);
				// split key ring string into array
	     			var keysArray = prevStorage.split(',');
				alert("keysArray.length: "+ keysArray.length);
				// find key we want to delete
				var keyFind = keysArray.indexOf(currentRecord);
				if(keyFind != -1){
					alert("Key to Delete: "+ keyFind);
					// remove key from ring
					keysArray.splice(keyFind, 1);
					if(keysArray.length == 0){
						alert("keysArray is empty: "+ keysArray.length);
     						window.localStorage.removeItem("sensor-keys");
					} else {
						var newRing = keysArray.join();
						window.localStorage.setItem("sensor-keys", newRing);
					}
				} 
			}
                },
                complete: function(data) {
                        //alert("complete:"+data.key);
                }
        });
  },
  clearLocalData: function(){
	    alert("clearData");
	    window.localStorage.clear();
	    //window.localStorage.removeItem("sensor-keys");
	    alert("Check: " + window.localStorage.getItem("sensor-keys"));
  },
  // local function for looping through local data a=local or remote,t=save or delete
  getLocalData: function(a,t){
     //alert("a: "+a);
     //alert("t: "+t);
     var localSave;
     var prevStorage = window.localStorage.getItem("sensor-keys");
      alert("prevStorage: "+prevStorage); 
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
		     //alert("currentKey: "+currentKey);
		     currentTime = currentKey.split('-');
		     //alert("currentTimestamp: "+currentTime[2]);
		     var read =  window.localStorage.getItem(currentKey);
		     if(a=="local"){
     			//alert("a: "+a);
			localSave += read;	
		     }
		     //alert("Read Session: "+ read);
		     if(a=="remote"){
			alert("read: "+read);
		     	app.submitRemote(read,currentTime[2]);
		     }
			     //to_submit = read.split(',');
			     //n = oldKey.split('_')[1];
	     }
	     if(a=="local"){
   		alert("a Save: ");
		return localSave;
	     }
	     //window.localStorage.removeItem("sensor-keys");
	     //alert("Unable to submit data");
      }

  },
  submitRemote: function(s,t){
     //alert("s:"+s);
     //function rsubmit(s){
	var url = 'http://data.sccwrp.org/sensor/load.php';
	message = $.ajax({
		type: 'GET',
		url: url,
		contentType: "application/json",
		dataType: 'jsonp',
		data: {ss: s,tt: t},
		crossDomain: true,
		timeout: 4000,
		error: function(x,t,m){ 
			 if(t==="timeout"){ alert("Data not Submitted"); }
		}, 
		success: function(data) {
			//alert("status:"+data.submit);
			//alert("autoid:"+data.autoid);
			//alert("captureid:"+data.captureid);
			//alert("apptime:"+data.capturetime);
			app.dataSyncCheck(data.autoid,data.captureid,data.apptime);
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
    app.getLocalData("remote","save");
  },
  submitLocalData: function(){
    alert("submitLocalData");
    app.getLocalData("remote","save");
  },
/* end local storage */
  getGPS: function(){
    navigator.geolocation.getCurrentPosition(app.getGPSOnSuccess, app.getGPSOnFailure);
  },
  getGPSOnSuccess: function(position){
    //alert("getGPSOnSuccess");
    //var latlon = position.coords.latitude;
    //latlon += ",";
    //latlon += position.coords.longitude;
    //return latlon;
    // on device or document ready save device lat/lon to key/value for later user
    window.localStorage.setItem("current-latitude", position.coords.latitude);	
    window.localStorage.setItem("current-longitude", position.coords.longitude);	
    //alert(latlon);
  },
  getGPSOnFailure: function(error){
	alert("code: "+ error.code);
	alert("message: "+ error.message);
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
  nativeAlert: function(){
	alert("nativeAlert");
	function helloWorld(){
		alert("helloWorld");
	}
	navigator.notification.alert(
		'Hello World Native Dialog',  //message
		helloWorld,  //callback
		'Hello World Title', //title
		'Finished' //buttonName
	);
  },
  testData: function(){
    alert("testData");
    var prevStorage = window.localStorage.getItem("sensor-keys");
    var latitude = window.localStorage.getItem("current-latitude");
    var longitude = window.localStorage.getItem("current-longitude");
    if (prevStorage != null){
    	window.localStorage.setItem("sensor-keys", ""+ prevStorage +",sensor-keys-"+ app.SESSIONID +"-1,sensor-keys-"+ app.SESSIONID +"-2");
    } else {
    	window.localStorage.setItem("sensor-keys","sensor-keys-"+ app.SESSIONID +"-1,sensor-keys-"+ app.SESSIONID +"-2");
    } 
    window.localStorage.setItem('sensor-keys-'+ app.SESSIONID +'-1', '{"id":"1","time":"14:34:56","ph":"4.5","orp":"234","do":"4.7","ec":"211μs","temp":"89","color":"4.5","lat":"'+latitude+'","lon":"'+longitude+'"}');
    window.localStorage.setItem('sensor-keys-'+ app.SESSIONID +'-2', '{"id":"2","time":"09:03:23","ph":"3.0","orp":"450","do":"5.9","ec":"123μs","temp":"85","color":"2.1","lat":"'+latitude+'","lon":"'+longitude+'"}');
    var currentStorage = window.localStorage.getItem("sensor-keys");
    alert("Test pull on sensor-keys: "+ currentStorage);
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
    app.getGPS();
  },
  initialize: function() {
	//alert("initialize");
	// disable jquery mobile routing
       $.mobile.ajaxEnabled = false;
       $.mobile.linkBindingEnabled = false;
       $.mobile.hashListeningEnabled = false;
       $.mobile.pushStateEnabled = false;
	
	app.bindEvents();
    	document.addEventListener("deviceready", app.onDeviceReady, true);
  }
};
