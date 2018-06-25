
var sodas = ['Coke', 'Sprite', 'Mountain Dew', 'Dr. Pepper', 'Root Beer'];


function displaySodaGifs(){
    var soda = $(this).attr('data-name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=AfBXBVWRioadKrXZOqJFse9JxinigJyO&q=soda&limit=10&offset=0&rating=G&lang=en" + soda + "AfBXBVWRioadKrXZOqJFse9JxinigJyO";

    $.ajax({
        url: queryURL,
        method: "GET"
     }).then(function(response){
         var sodaDiv = $("<div class='soda'>");
         var rating = response.Rated;
         var p = $("<p>").text("Rating: " + rating);
         movieDiv.append(p);

     }

}











// function renderButtons(){

// $('#soda-display').empty();
// for(i = 0; i < soda.length; i++){
//     var button = $('<button>').html(soda[i]);
//     $('#soda-display').append(button);
//   }
// }

// $('#add-soda').on('click', function(event){
//     event.preventDefault();

//     renderButtons();

//     var sodaInput = $('#soda-input').val();
//     soda.push(sodaInput);
// });


// renderButtons();

