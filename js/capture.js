	// The width and height of the captured photo. We will set the
  	// width to the value defined here, but the height will be
  	// calculated based on the aspect ratio of the input stream.
	

	// |streaming| indicates whether or not we're currently streaming
	// video from the camera. Obviously, we start at false.

	var streaming = false;

	// The various HTML elements we need to configure or control. These
	// will be set by the startup() function.
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

