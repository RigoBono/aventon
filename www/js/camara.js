function success(imgurl) {
  console.log("Imgurl = " + imgurl);
alert("Imgurl = " + imgurl);
  //here I added my function to upload the saved pictures
  //on my internet server using file-tranfer plugin
}

function onFail(message) {
    alert('Failed because: ' + message);
}

function CaptureBCK() {
    var options = {
    name: "Image", //image suffix
    dirName: "CameraPictureBackground", //foldername
    orientation: "portrait", //or landscape
    type: "back" //or front
    };

    window.plugins.CameraPictureBackground.takePicture(success, onFail, options);
}
