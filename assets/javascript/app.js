// bands array
    var bands =["Arctic Monkeys", "strokes", "The Smiths", "muse","little Joy", "black sabbath", "The Cure","Blur","The Doors", "Nirvana","Depeche Mode"]
  
    function displaybands(){
   
    var band = $(this).attr("data-name");
    var api_key ="PbmYXXvqoIfEpfI8htI3kZuuE92KMBzX";
    var queryURL ="https://api.giphy.com/v1/gifs/search?q="
    + bands + "api_key=PbmYXXvqoIfEpfI8htI3kZuuE92KMBzX";
            console.log(band)
            console.log(queryURL)
            console.log (bands)
    
//ajax call
    $.ajax({
    url:queryURL,
    method:"GET"
    }).then(function(response){
        $("#bands-view").text(JSON.stringify(response));
            console.log("GET")
            console.log(response)

  
// loop bands
    for (var i=0; i < bands;i++){


//button
$("#buttons-view").empty();
    var a =$("<button>");
        console.log("<button>")
    a.attr("data-name", bands[i]);
    a.addclass("band-bt");
    a.text(bands[i]);
    $("#buttons-view").append(a);
    
        
    }
    //adding bands
    $("#add-band").on("click",function(event) {
        event.preventdefault();
        var band = $("#band-input").val().trim();
    //add bands from box to array
        bands.push(band);
    

    })
});
    }
    //event listener
        $(document).on("click", ".band-bt", displaybands);
        // only 8 gif per button
        // add rating and titles
        // animate and static 