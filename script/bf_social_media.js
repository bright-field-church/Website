$(document).ready(function()
{    
    var icons = document.getElementsByClassName("social-media-icons");
    function myFunction(x) {
        if (x.matches) 
        { // If media query matches
            for(var i = 0; i < icons.length; i++)
            {
                icons[i].innerText = "";
            }
        } 
        else 
        {
     
        }
    }

    var x = window.matchMedia("(max-width: 1024px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction)
});