$(document).ready(function()
{
    var navbar_menu_icon_accordion = document.getElementById("navbar-menu-icon-accordion");
    var accordion = document.getElementsByClassName("accordion");
    var i;

    for(i = 0; i < accordion.length; i++)
    {
        accordion[i].addEventListener("click", function()
        {
           var panel = this.nextElementSibling;
           if(panel.style.display === "block")
           {
               panel.style.display = "none";
               this.style.backgroundColor = "lightgray";
           } 
           else
           {
               panel.style.display = "block";
               this.style.backgroundColor = "gray";
               
           }
        });
    }

    navbar_menu_icon_accordion.addEventListener("click", function()
    {
        var panel = this.nextElementSibling;
        if(panel.style.display === "block")
        {
            panel.style.display = "none";

            for(i = 0; i < accordion.length; i++)
            {
                accordion[i].style.backgroundColor = "lightgray";
                var panel = accordion[i].nextElementSibling;
                panel.style.display = "none";
            }
        }
        else
        {
            panel.style.display = "block";
        }
    });

    var slideIndex = 0;
    showSlides();

    function showSlides()
    {
        var i;
        var slides = document.getElementsByClassName("slides-fade");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++)
        {
            slides[i].style.display = "none";
        }

        slideIndex++;
        
        if(slideIndex > slides.length)
        {
            slideIndex = 1;
        }

        for(i = 0; i < dots.length; i++)
        {
            dots[i].className = dots[i].className.replace("active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000);
    }
});