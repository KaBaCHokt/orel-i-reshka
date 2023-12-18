var old = 0

function flipCoin() {
  var coin = document.getElementById('coin');
  var headsImg = "coin1.png";
  var tailsImg = "coin2.png";
  var random = Math.random() < 0.5 ? true : false;
  var rotation = old + 1800;
  old = rotation;
  console.log(rotation, random)
  coin.style.transform = "rotateX(" + rotation + "deg)";
  setTimeout(function() {
    coin.setAttribute("src", random ? tailsImg : headsImg);
  }, 500);
}