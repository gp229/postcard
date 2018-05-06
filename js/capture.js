	// The width and height of the captured photo. We will set the
  	// width to the value defined here, but the height will be
  	// calculated based on the aspect ratio of the input stream.

  	var width = 320;    // We will scale the photo width to this
  	var height = 0;     // This will be computed based on the input stream

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
		        	console.log("An error occured when trying to start webcam! " + err);
			});
		
		}
		else
		{
			context.clearRect(0,0,canvas.width,canvas.height);
        		context.drawImage(video, 69, 50);
		}
	}
/*
    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);
      
        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.
      
     /*   if (isNaN(height)) {
          height = width / (4/3);
        }
      */
/*
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    capture.addEventListener('click', function(ev){
      takepicture();
      ev.preventDefault();
    }, false);
    
    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);
	context.clearRect(0,0,canvas.width,canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }
  
  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
    
      var data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
    } else {
      clearphoto();
    }
  }*/

