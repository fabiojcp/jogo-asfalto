const videos = ["1.mp4", "2.mp4"];

document.getElementById("videos").innerHTML =
  "<video id='videoElement' width=100% controls controlsList='nodownload' playsinline><p>Seu navegador não suporta vídeo.</p></video><button id='last' class='videobtns'>vídeo anterior</button><button id='next' class='videobtns'>próximo vídeo</button>";

let videoPlayer = document.getElementById("videoElement");
videoPlayer.src = "./assets/videos/1.mp4";

let actualVideo = 1;

let btnLast = document.getElementById("last");
let btnNext = document.getElementById("next");

btnLast.addEventListener("click", (e) => {
  if (actualVideo == 1) return;
  else {
    actualVideo--;
    videoPlayer.src = `./assets/videos/${actualVideo}.mp4`;
  }
});

btnNext.addEventListener("click", (e) => {
  if (actualVideo == 2) return;
  else {
    actualVideo++;
    videoPlayer.src = `./assets/videos/${actualVideo}.mp4`;
  }
});

// let n = str.includes(",");
// if (n) {
//   let nArr = str.split(",");
//   document.getElementById("videos").innerHTML =
//     "<video id='videoElement' width=100% controls controlsList='nodownload' playsinline><p>Tu navegador no funciona, actualizalo</p></video>";
//   let videoPlayer = document.getElementById("videoElement");
//   videoPlayer.src = "./assets/videos/" + nArr[0];
//   i = 1;
//   videoPlayer.onended = function () {
//     if (i < nArr.length) {
//       videoPlayer.src = "./assets/videos/" + nArr[i];
//       i++;
//     }
//   };
// }
