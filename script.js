const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//promt to selct media strem, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {}
}

button.addEventListener("click", async () => {
  //Disable the button
  button.disabled = true;

  //start pic in pic
  await videoElement.requestPictureInPicture();
  //Reset the buttom
  button.disabled = false;
});

selectMediaStream();
