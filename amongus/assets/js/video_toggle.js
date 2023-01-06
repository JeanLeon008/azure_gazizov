// Show the video player (one time action)

function video_toggle() {
	var x = document.getElementById("video-player");
	var y = document.getElementById("play");
	x.style.visibility = "visible";
	y.autoplay = true;
	y.load();
}


// Toggle ON and OFF the video player

/*
function video_toggle() {
  var x = document.getElementById("video-player");
  var y = document.getElementById("play");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
	y.autoplay = true;
    y.load();
  } else {
    x.style.visibility = "hidden";
	y.autoplay = false;
  }
}
*/