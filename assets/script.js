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
                var image = $("<img>");
                var sodaDiv = $("<div class='soda'>");
                //still image is defined here using the response data
                var stillImage = response.data[i].images.fixed_height_still.url;
                console.log(stillImage);
                //since still image is defined... we can now use the still image url
                image.attr("src", stillImage);
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
    //PLEASE REMEMBER THIS DAN!!!! Adding a child to your .on(click)
    $("#soda-display").on("click", ".soda-btn", function(){
        console.log(this);
        
    });


    $(document).on("click", ".soda-btn", displaySodaGifs);
    renderButtons();

});

