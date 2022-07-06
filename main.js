var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 function newImage()
{
	
	fabric.Image.fromURL('WhatsApp Image 2022-07-06 at 13.12.45.jpeg', function(Img) {
    blockImageObject = Img;    

    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({
    top:0,
    left:0			
    });
    canvas.add(blockImageObject);
    });

}    

function playSound(){
	x.play();
}