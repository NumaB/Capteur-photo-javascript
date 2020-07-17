//Creation Camera

function Camera(name){
    this.sensors = [];
    this.name = name;
}

Camera.prototype.addSensor =  function(sen){
    this.sensors.push(sen);

}

Camera.prototype.click =function(){
    console.log(this.name+" : Prise de vue déclenchée par cette caméra");
    for (var i=0; i<this.sensors.length; i++){
	this.sensors[i].reset();
    }
}

Camera.prototype.toString = function(){
    return this.name;
}

//Creation Sensor

function Sensor(name){
    this.cameras = [];
    this.active = true;
    this.name = name;
}

Sensor.prototype.addCamera = function(cam){
    this.cameras.push(cam);

}

Sensor.prototype.detect = function(){
    if(this.active){
	this.active=false;
	console.log();
	for(var i=0; i<this.cameras.length; i++){
	    this.cameras[i].click();
    }
    }
}

Sensor.prototype.reset = function(){
    this.active = true;
}

Sensor.prototype.toString = function(){
    return this.name;
}

function connect(sen,cam){
    sen.addCamera(cam);
    cam.addSensor(sen);
}

//Initialisation

c1 = new Camera("c1");
c2 = new Camera("c2");
c3 = new Camera("c3");
s1 = new Sensor("s1");
s2 = new Sensor("s2");
s3 = new Sensor("s3");

connect(s1, c1);
connect(s2, c1);
connect(s3, c2);
connect(s3, c3);

s2.detect();
s1.detect();
s3.detect();
s1.detect();
