$(document).ready(function() {
// bands array
    var bands =[
        "Arctic Monkeys", "strokes", "The Smiths", "muse",
    "little Joy", "black sabbath", "The Cure","Blur","The Doors",
     "Nirvana","Depeche Mode"
    ];
  
     function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();
    
        for (var i = 0; i < arrayToUse.length; i++) {
          var a = $("<button>");
          a.addClass(classToAdd);
          a.attr("data-type", arrayToUse[i]);
          a.text(arrayToUse[i]);
          $(areaToAddTo).append(a);
        }
    
      }
    
      $(document).on("click", ".band-button", function() {
        $("#bands").empty();
        $(".band-button").removeClass("active");
        $(this).addClass("active");
    
        var type = $(this).attr("data-type");
        var queryURL = "http://api.giphy.com/v1/gifs/search" + type + "mEKmPgPIiq6qd0qecBLeXg3mn228IxZI";
    
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            var results = response.data;
    
            for (var i = 0; i < results.length; i++) {
              var bandDiv = $("<div class=\"band-item\">");
    
              var rating = results[i].rating;
    
              var p = $("<p>").text("Rating: " + rating);
    
              var animated = results[i].images.fixed_height.url;
              var still = results[i].images.fixed_height_still.url;
    
              var bandImage = $("<img>");
              bandImage.attr("src", still);
              bandImage.attr("data-still", still);
              bandImage.attr("data-animate", animated);
              bandImage.attr("data-state", "still");
              bandImage.addClass("band-image");
    
              bandDiv.append(p);
              bandDiv.append(bandImage);
    
              $("#bands").append(bandDiv);
            }
          });
      });
    
      $(document).on("click", ".band-image", function() {
    
        var state = $(this).attr("data-state");
    
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        }
        else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
    
      $("#add-band").on("click", function(event) {
        event.preventDefault();
        var newBand = $("input").eq(0).val();
    
        if (newBand.length > 2) {
          bands.push(newBand);
        }
    
        populateButtons(bands, "band-button", "#band-buttons");
    
      });
    
   
    