// jshint esversion: 6

let controller = function() {
  /*  let prefixURL =
    "https://api.flickr.com/services/feeds/photos_public.gne?tags=";
  let suffixURL = "&format=json&jsoncallback=?";
  //get value entered by user from textbox
  let flickrTag = $("input").val();
  //let flickrTag = $("input").???(); */
  let requestURL = "https://thejsway-server.herokuapp.com/api/articles";

  //clear old photos
  $(".photos").html("");
  //$(".photos").????("");

  $.getJSON(requestURL, function(response) {
    console.log(response);

    console.log(`Article ${response[0].id}
Title: ${response[0].title}
Content: ${response[0].content}`);

    response.forEach(function(article, index) {
      let newDiv = document.createElement("div");
      document.querySelector(".articles").appendChild(newDiv);

      let header = document.createElement("h3");
      header.textContent = `Article ${article.id}`;
      newDiv.appendChild(header);

      let titlePar = document.createElement("p");
      titlePar.textContent = article.title;
      newDiv.appendChild(titlePar);

      let contentPar = document.createElement("p");
      contentPar.textContent = article.content;
      newDiv.appendChild(contentPar);

      /*
      if (index < 6) {
        let $img = $("<img>").hide();
        $img.attr("src", item.media.m);
        $img.attr("width", "100");
        $(".photos").append($img);
        $img.fadeIn();
      }
      */
    });
  });
};

//without using jQuery
window.addEventListener("load", function() {
  //select the button and register the handler
  document.querySelector("button").addEventListener("click", controller);
});

$(document).ready(controller);
