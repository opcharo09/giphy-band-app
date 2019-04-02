var bands = ["Arctic monkeys", "The strokes", "muse","blink 182",]
//info for buttons
function displaybandinfo(){
 var queryURL = "https://api.giphy.com/v1/gifs/search?"
      + bands + 
      "&api_key=PbmYXXvqoIfEpfI8htI3kZuuE92KMBzX";

//ajax call
  $.ajax({
   url: queryURL,
   method: "GET"
   }).then(function(response){
         $("#bands-show").text(JSON.stringify(response));
        console.log(queryURL)
        console.log(response)
   });
}

//loop for bands 
for (var i = 0; i < bands.length; i++){
// buttons
var a = $("<button>");
a.attr("data-name", bands[i]);
a.text(bands[i]);
$("#buttons-view").append(a);
}
console.log(bands.length)