function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
  capture.size(320,240);//設定顯示畫面大小

}

function draw() {
  background(220);
  image(capture,mouseX, mouseY) //在(mouseX, mouseY)顯示圖片
}
