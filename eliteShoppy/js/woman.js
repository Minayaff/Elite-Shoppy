function Slide(selector, ms) {
  let arr = ["banner3.jpg", "banner4.jpg"];
  let image = document.getElementById(selector);

  let x = 0;
  setInterval(function () {
    image.setAttribute('src', `img/${arr[x]}`);
    x++;
    if (x == arr.length) {
      x = 0;
    }
  }, ms);
}