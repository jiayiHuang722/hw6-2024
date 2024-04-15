var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log ('auto play is set to' + video.autoplay);
	console.log ('loop is set to' + video.loop);

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("New speed is " + video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9;
		console.log("New speed is " + video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime +10 < video.duration) {
			video.currentTime += 10;
		} else {
			video.currentTime = 0;
		}
		console.log("Current location " + video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted){
			video.muted = false;
			this.textContent = "Mute";
		} else {
			video.muted = true;
			this.textContent = "Unmute";
		}
	});
//volume slider
	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		document.querySelector("#volume").textContent = video.volume * 100 + "%";
		console.log("The current value is", video.volume);
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});


});


