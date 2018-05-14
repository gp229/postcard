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
    				var content = document.getElementById('content');
  				content.style.background = "rgba(0, 0, 0, 0)";
      			})
			.catch(function(err) {
		        	alert("An error occured when trying to start webcam! " + err);
			});
		
		}
		else
		{	
			canvas.width = video.clientWidth;
			canvas.height = video.clientHeight;
			context.clearRect(0,0,canvas.width,canvas.height);	
			context.drawImage(video, 0, 0, canvas.width, canvas.height);
			cClear();
			cPush();
		}
	}
