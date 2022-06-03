
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt user to select a media stream, pass to video element, then play
async function selectMediaStream() {
    // Try/catch statement 
    try {
        //screen capture API
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        //this is the constant that will have the media stream data, it will 
        //await till the user has selected the display media they want to share
        videoElement.srcObject = mediaStream;
        //next is the passing of the stream into the video object
        videoElement.onloadedmetadata = () => {
        //then after the video has loaded metadata it will call the function play video
        videoElement.play();
        }
    } catch (error) {
        // Catch Errors
    }
}

button.addEventListener('click', async() => {
    // disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;
});
// on load 
selectMediaStream();