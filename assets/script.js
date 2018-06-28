$(document).ready(function() {
    var sodas = ['Coke', 'Sprite', 'Mountain Dew', 'Dr. Pepper'];
    
    function displaySodaGifs() {

        var soda = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?=10" + soda + "AfBXBVWRioadKrXZOqJFse9JxinigJyO";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

          // Creating a div to hold the movie
          var sodaDiv = $("<div class='soda'>");

          // Storing the rating data
          var rating = response.Rated;

          // Creating an element to have the rating displayed
          var p = $("<p>").text("Rating: " + rating);

          // Displaying the rating
          sodaDiv.append(p);

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);

          // Appending the image
          sodaDiv.append(image);

          // Putting the entire movie above the previous movies
          $("#soda-display").prepend(sodaDiv);
        });

      }

function renderButtons(){

$('#soda-display').empty();
for(i = 0; i < sodas.length; i++){
    
    var b = $("<button>");

    b.attr("class", "soda-btn");

    b.attr("data-name", sodas[i]);

    b.text(sodas[i]);

    $('#soda-display').append(b);

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

$(document).on("click", ".soda-btn", displaySodaGifs);



renderButtons();

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


});

