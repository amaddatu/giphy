$(document).ready(function() {
    var sodas = ['Coke', 'Sprite', 'Mountain Dew', 'Dr. Pepper'];
    
    function displaySodaGifs() {

        var soda = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + soda + "&api_key=AfBXBVWRioadKrXZOqJFse9JxinigJyO";
    
        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            console.log(response);
    
          // Creating a div to hold the soda
          for(var i=0; i < 10; i++){
    
            // Creating an element to hold the image
              var image = $("<img>").attr("src", stillImage);
              var sodaDiv = $("<div class='soda'>");
              var stillImage = response.data[i].images.fixed_height_still.url;
              console.log(stillImage);
              var rating = response.data[i].rating;
              console.log(rating);
              var p = $("<div>").text("Rating: " + rating);
            

              //Now append image to div
             $(sodaDiv).append(p);
             $(sodaDiv).append(image);
             $('.gif-section').append(sodaDiv);
             
          }
          
        
        });

    
      }
function renderButtons(){

$('.gif-section').empty();
for(i = 0; i < sodas.length; i++){
    
    var b = $("<button>");

    b.attr("class", "soda-btn");

    b.attr("data-name", sodas[i]);

    b.text(sodas[i]);

    $('.gif-section').append(b);

    }
  }

$('#add-soda').on('click', function(event){
    event.preventDefault();
    submit();
});

function submit(event){
    // event.preventDefault();
    var inputVal = $("#soda-input").val();
    sodas.push(inputVal);
}

//Adds soda 
$('#add-soda').on('click', function(event){  
    event.preventDefault();

    
    renderButtons();
   
});
//PLEASRE REMEMBER THIS DAN!!!! Adding a child to your .on(click)
$("#soda-display").on("click", ".soda-btn", function(){
    console.log(this);
    
});


// function displaySodaGifs() {

//     var soda = $(this).attr("data-name");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + soda + "&api_key=AfBXBVWRioadKrXZOqJFse9JxinigJyO";

//     // Creating an AJAX call for the specific movie button being clicked
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {

//       // Creating a div to hold the soda
//       var sodaDiv = $("<div class='soda'>");

//       // Storing the rating data
//       var rating = response.Rated;

//       // Creating an element to have the rating displayed
//       var p = $("<p>").text("Rating: " + rating);

//       // Displaying the rating
//       sodaDiv.append(p);

//       var imgURL = reponse.Gif;

//       // Creating an element to hold the image
//       var image = $("<img>").attr("src", imgURL);

//       // Appending the image
//       sodaDiv.append(image);

//       // Putting the entire movie above the previous movies
//       $("#soda-display").prepend(sodaDiv);
//     });

//   }


$(document).on("click", ".soda-btn", displaySodaGifs);



renderButtons();

});


// $(document).on("click", ".soda-btn", displaySodaGifs){

// }


//It's a little different, the click event because we have to change what it is already there







// function displaySodaGifs() {
//     var soda = $(this).attr('data-name');
//     var queryURL: "https://api.giphy.com/v1/gifs/search?=api_key=AfBXBVWRioadKrXZOqJFse9JxinigJyO&q=sodas&limit=10&offset=0&rating=G&lang=en"
//     + soda + "AfBXBVWRioadKrXZOqJFse9JxinigJyO"

//     $.ajax({
//         url:queryURL,
//         method:"GET"
//     }).then(function(response){

//         var sodaDiv = $("<div class='soda'>");
//         var rating = response.Rated;
//         var p = $("<p>").text("Rating: " + rating);

//         sodaDiv.append(p);

//         var imgUrl = response.Gif;

//         var image = $("<img>").attr("src", imgUrl);

//         movieDiv.append(image);

//         $("#soda-display").append(sodaDiv);
        
//     });

    
// }

// function renderButtons(){

// $('#soda-display').empty();
// for(i = 0; i < sodas.length; i++){

//     var b = $("<button>");

//     b.addClass("soda-btn");

//     b.attr("data-name", sodas[i]);

//     b.text(sodas[i]);

//     $('#buttons-display').append(b);

//     var button = $('<button>').html(sodas[i]);
//     $('#soda-display').append(button); 
//   }
// }

// $('#add-soda').on('click', function(event){
//     event.preventDefault();

//     var soda = $("#soda-input").val().trim();

//     sodas.push(soda);

//     renderButtons();

//     var sodaInput = $('#soda-input').val();
//     sodas.push(sodaInput);
// });

// $(document).on("click", "soda-btn", displaySodaGifs);



// renderButtons();




