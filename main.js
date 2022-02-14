function preload() {
	

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on("pose", gotPoses);
	}

function draw() {
	game()
}

function modelLoaded(){
	console.log("PoseNet is Initialized");
}

function gotPoses(results){
	if (results.length > 0){
		console.log(results);
		 = results[0].pose.left.wrist.x;
		 left.wristY = results[0].pose.nose.y;
	}
}
}



