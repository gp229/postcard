	var streaming = false;
    	var video = document.getElementById('video');
    	var canvas = document.getElementById('canvas');
	function webcamClick()
	{
		var capture = document.getElementById('capture');
		if(!streaming)
		{
			const constraints = {
				video: true
			};
    			navigator.mediaDevices.getUserMedia(constraints)
			.then(function(stream){
				video.srcObject = stream;
				video.play();
				capture.value = "Capture Image";
				streaming = true;
				video.style.display = "block";
      			})
			.catch(function(err) {
		        	alert("An error occured when trying to start webcam! " + err);
			});
		
		}
		else
		{
			context.clearRect(0,0,canvas.width,canvas.height);
        		context.drawImage(video, 69, 50);
		}
	}
