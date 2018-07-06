function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var animationSelections = [
    'animated bounceInDown',
    'animated bounceInLeft',
    'animated bounceInRight',
    'animated bounceInUp',
    'animated rotateInDownLeft',
    'animated rotateInDownRight',
    'animated rotateInUpLeft',
    'animated rotateInUpRight'
];

var attentionSelections = [
    'animated bounce',
    'animated flash',
    'animated pulse',
    'animated jello',
    'animated wobble',
    'animated tada',
    'animated swing',
    'animated shake'
];

$(document).ready(function() {
    var sodas = ['Coke', 'Sprite', 'Mountain Dew', 'Dr. Pepper'];
    
    function displaySodaGifs() {
        //clear all sodas from display
        $('.gif-section').find(".soda").remove();

        var soda = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + soda + "&api_key=AfBXBVWRioadKrXZOqJFse9JxinigJyO";
    


        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            
            //console.log(response);
    
            // Creating a div to hold the soda
            for(var i=0; i < 10; i++){
                var currentData = response.data[i];
                // Creating an element to hold the image
                var image = $("<img>");
                var sodaDiv = $("<div class='soda'>");
                //still image is defined here using the response data
                var stillImage = currentData.images.fixed_height_still.url;
                var gifImage = currentData.images.fixed_height.url;
                //console.log(stillImage);
                //since still image is defined... we can now use the still image url
                image.attr("src", stillImage);
                var rating = currentData.rating;
                
                var p = $("<div>").text("Rating: " + rating).addClass("rating");
                //console.log(rating);

                //check if we have an animation available
                //graceful failure state possible
                if(gifImage.length > 0){
                    //adding states and stateful images
                    //console.log(currentData.images);
                    //Note: remember to put "data-" in front of custom attribute names
                    image.attr("data-still-image", stillImage);
                    image.attr("data-gif-image", gifImage);
                    image.attr("data-image-state", "still");
                    //console.log(gifImage);
                }
                
                var imageWrapper = $("<div>").addClass("image-wrapper");
                imageWrapper.append(image).append(p);

                //Now append image to div
                $(sodaDiv).append(imageWrapper);

                var randomAnimationNumber = getRandomInt(animationSelections.length);
                $(sodaDiv).addClass(animationSelections[randomAnimationNumber]);
                $('.gif-section').append(sodaDiv);
                setTimeout(function(element, animationClass){
                    $(element).removeClass(animationClass);
                }, 1000, sodaDiv, animationSelections[randomAnimationNumber]);
            }
          
        
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
    //PLEASE REMEMBER THIS DAN!!!! Adding a child to your .on(click)
    $("#soda-display").on("click", ".soda-btn", displaySodaGifs);

    //Adding stateful gif click event
    $(".gif-section").on("click", ".soda", function(event){
        //making sure I get the div I want...
        //console.log(this);
        var image = $(this).find("img");
        var imageState = image.attr("data-image-state");
        console.log(imageState);
        //if we have a still state
        if(imageState === "still"){
            //change attributes to the gif or animated image
            image.attr("src", image.attr("data-gif-image"));
            image.attr("data-image-state", "gif");

            $(this).addClass("soda-gif");
            var randomAnimationNumber = getRandomInt(animationSelections.length);
            $(this).addClass(attentionSelections[randomAnimationNumber]);

            setTimeout(function(element, animationClass){
                $(element).removeClass(animationClass);
            }, 1000, this, attentionSelections[randomAnimationNumber]);
        }
        //if we don't have still state
        else{
            //change attributes to the still image
            image.attr("src", image.attr("data-still-image"));
            image.attr("data-image-state", "still");

            $(this).removeClass("soda-gif");
        }
    });

    renderButtons();

});

