"use strict";

let bookElements = [];

let div = document.createElement("div");
div.id = "book";
document.getElementById("main").append(div);

let pre = document.createElement('pre');
pre.innerHTML = JSON.stringify(bookElements[0], null, 2);
document.getElementById("book").append(pre);

// needed to make script work on page onload
window.onload = function() {
  // solution found at http://youmightnotneedjquery.com/#json
  var request = new XMLHttpRequest();
  request.open('GET', 'book.json', true);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.response);
      for (let i = 0; i < data.length; i++) {
        bookElements[i] = data[i];
      }
    } else {
      // We reached our target server, but it returned an error
    }
  };
  request.onerror = function() {
    // There was a connection error of some sort
  };
  request.send();
}
