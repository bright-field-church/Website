$(document).ready(function()
{
    var navbar_menu_icon_accordion = document.getElementById("navbar-menu-icon-accordion");
    var accordion = document.getElementsByClassName("accordion");
    var prev = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];
    var i;

    for(i = 0; i < accordion.length; i++)
    {
        accordion[i].addEventListener("click", function()
        {
           var panel = this.nextElementSibling;
           if(panel.style.display === "block")
           {
               panel.style.display = "none";
               this.style.backgroundColor = "#f5f5f5";
           } 
           else
           {
               panel.style.display = "block";
               this.style.backgroundColor = "darkgray";
               
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
                accordion[i].style.backgroundColor = "#f5f5f5";
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