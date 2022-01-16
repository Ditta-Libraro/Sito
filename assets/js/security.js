/**
* Template Name: Francesco Libraro
* Template URL: https://climalibraro.it
* Author: Francesco Libraro
*/
if (top.location != self.location) {
    top.location = self.location.href;
}
if (top != window) {
  top.location = window.location;
}
if (window.top.location.host != "climalibraro.it") {
    document.body.innerHTML = "Access Denied";
}
