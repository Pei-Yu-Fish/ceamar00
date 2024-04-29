var captureGraphics
var capture_w=640
var capture_h=480
var span=10

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
  capture.size(capture_w,capture_h);//設定顯示畫面大小
  captureGraphics= createGraphics(capture_w,capture_h)
  captureGraphics.translate(capture_w,0)
  captureGraphics.scale(-1,1)
  capture.hide()
}

function draw() {
  background(220);
  noStroke()
  push()
    translate(width/2-capture_w/2,height/2-capture_h/2)
    captureGraphics.image(capture,0,0) //在(mouseX, mouseY)顯示圖片
    for(var x=0;x<captureGraphics.width;x=x+span){
      for(var y=0;y<captureGraphics.height;y=y+span){
        var pixel=captureGraphics.get(x,y)
        fill(pixel)
        rect(x,y,span)
      }
    }
  pop()
  
}
