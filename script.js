const videoElement = document.getElementById("video");
const button = document.getElementById("button");
const buttonStop = document.getElementById("buttonStop");

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

  button.hidden = true;

  buttonStop.hidden = false;
});

buttonStop.addEventListener("click", () => {
  document.exitPictureInPicture();

  buttonStop.hidden = true;

  button.hidden = false;
});

selectMediaStream();
