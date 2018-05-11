var undoButton = document.getElementById('undo');
var redoButton = document.getElementById('redo');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var redo_list = [];
var undo_list = [];

var cPushArray = new Array();
var cStep = -1;
	
function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(canvas.toDataURL());
}

function cUndo() {
    if (cStep > 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
	console.log(canvasPic.src);
        canvasPic.onload = function () 
	{ 	
		context.clearRect(0,0,canvas.width,canvas.height);
		context.drawImage(canvasPic, 0, 0); 
	}
    }
}
  
function cRedo() {
    if (cStep < cPushArray.length-1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () 
	{ 
		context.clearRect(0,0,canvas.width,canvas.height);
		context.drawImage(canvasPic, 0, 0); 
	}
    }
}
undoButton.addEventListener('click', function() {
    cUndo();
});
  
redoButton.addEventListener('click', function() {
    cRedo();
});

cPush();
