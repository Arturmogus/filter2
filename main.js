var nose_x = 0
var nose_y = 0
function preload()
{

}

function setup()
{
canvas = createCanvas(400, 300)
canvas.center()
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses);
}

function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results)
    nose_x = results[0].pose.nose.x
    nose_y = results[0].pose.nose.y 
    console.log(nose_x)
    console.log(nose_y)
}
}

function modelLoaded()
{
    console.log("posenet works")
}

function draw()
{
image(video, 0, 0, 400, 300, )
}

function take_snapshot()
{
    save('myFilterImage.png')
}