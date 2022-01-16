/**
* Template Name: Francesco Libraro
* Template URL: https://climalibraro.it
* Author: Francesco Libraro
*/
;(function (window) { 
  if (window.top !== window.self) {
    killFrame();
  }

  var _frame_ = "<html><head><title>Not Allowed</title>\
  </head><body><h1>We don't allow This</h1></body></html>";

  function killFrame() {
    document.open();
    document.write(_frame_);
    document.close();

    // seriously fuck up any other scripts
    window.confirm = window.alert = function(){};
    undefined = 1; window.onload = null;
    window.onbeforeunload = null;

    // lets hope these work
    window.addEventListener = function(){};
    window.attachEventHandler = function(){};
  }

}(window));
