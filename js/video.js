var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing to vintage");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing to original");
	video.classList.remove("oldSchool")
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= .95;
	console.log("New speed is " +video.playbackRate)
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume");
	console.log(this.value);
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log("Mute Video")
		video.muted = true;
		document.querySelector('#mute').textContent = 'Unmute';
	}
	else {
		console.log("Unmute Video")
		video.muted = false;
		document.querySelector('#mute').textContent = 'Mute';
	}
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= .95;
	console.log("New speed is " +video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if  ((video.duration - video.currentTime) > 15){
		video.currentTime += 15;
		console.log("The current location of the video is " +video.currentTime)
	}
	else{
		video.currentTime = 0;
		console.log("The current location of the video is " +video.currentTime)
	}
});


