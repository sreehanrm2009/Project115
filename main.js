function preload() {

}

function setup() {
      canvas = createCanvas(300, 300);
      canvas.center();
      video = createCapture(VIDEO);
      video.size(300, 300);
      video.hide();
      posenet = ml5.poseNet(video, modelLoaded);
      posenet.on('pose', gotPoses);
}

function modelLoaded() {
      console.log("PoseNet is Initialised!");
}

function gotPoses(results) {
      if (results.length > 0) {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("Nose X = " + noseX);
            console.log("NoseY = " + noseY);
      }
}

function snap() {
      save('myFilterImage.png');
}