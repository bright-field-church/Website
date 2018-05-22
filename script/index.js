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
});