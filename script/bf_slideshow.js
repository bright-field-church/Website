$(document).ready(function()
{
    var slideIndex = 0;
    var timeoutHandler;
    var prev = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];
    showSlides();

    prev.onclick = function()
    {
        clearTimeout(timeoutHandler);
        slideIndex += -2;
        // alert(slideIndex);
        showSlides();
    };

    next.onclick = function()
    {
        clearTimeout(timeoutHandler);
        // alert(slideIndex);
        showSlides();
    };

    function showSlides()
    {
        var i;
        var slides = document.getElementsByClassName("slides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++)
        {
            slides[i].style.display = "none";
        }

        slideIndex++;
        //alert("showslides() - slideIndex: " + slideIndex);
        
        if(slideIndex > slides.length)
        {
            slideIndex = 1;
        }
        
        if(slideIndex <= 0)
        {
            slideIndex = slides.length;
        }

        for(i = 0; i < dots.length; i++)
        {
            dots[i].className = dots[i].className.replace("active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        timeoutHandler = setTimeout(showSlides, 8000);
    }
});