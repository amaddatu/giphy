$(document).ready(function() {
    function customH1(component, containerClass, tag){
        var number = component.length;
        var hHtml = component.html();
        var hClasses = component.attr("class");
        //start fresh
        component.remove();
        
        //re-add element twice
        var topWrapper = $("<div>");
        topWrapper.addClass("top");
        //use animate class
        topWrapper.addClass("animated bounceInRight");
        var hTagTop = $("<" + tag + ">");
        hTagTop.html(hHtml);
        hTagTop.addClass(hClasses);
        topWrapper.append(hTagTop);

        
        var bottomWrapper = $("<div>");
        bottomWrapper.addClass("bottom");
        bottomWrapper.addClass("animated rollIn");
        var hTagBottom = $("<" + tag + ">");
        hTagBottom.html(hHtml);
        hTagBottom.addClass(hClasses);
        bottomWrapper.append(hTagBottom);

        var wrapper = $("<div>");
        wrapper.addClass(containerClass);
        wrapper.append(topWrapper);
        wrapper.append(bottomWrapper);

        $("body").prepend(wrapper);

        var showTitle = function(){
            //console.log(this.get());
            this.find(".bottom").animate({
                height: '0px',
                top: '-40px'
            }, 1000);
            this.find(".top").animate({
                height: '40px',
                marginBottom: '0px'
            }, 1000);
        };
        var removeExtras = function(){
            //console.log(this);
            this.find(".bottom").hide();
            this.find(".top").css("border-bottom", "none");
        }
        setTimeout(showTitle.bind(wrapper), 1000);
        setTimeout(removeExtras.bind(wrapper), 2000);
    }
    
    $("h1").each(function(){
        customH1($(this), "split-word-wrapper-h1", "h1");
    });
    
});