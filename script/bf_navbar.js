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
           } 
           else
           {
               panel.style.display = "block";
               
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
                var panel = accordion[i].nextElementSibling;
                panel.style.display = "none";
            }
        }
        else
        {
            panel.style.display = "block";
        }
    });

    // window.onscroll = function() {myFunction()};

    // var menu = document.getElementsByClassName("menu")[0];
    // var sticky = menu.offsetTop;
    // var content = document.getElementsByClassName("content")[0];

    // function myFunction() 
    // {
    //     if (window.pageYOffset >= sticky - 86) 
    //     {
    //         menu.classList.add("sticky");
    //         content.style.paddingTop = inherit + 184;
    //     } 
    //     else 
    //     {
    //         menu.classList.remove("sticky");
    //         content.style.paddingTop = initial;
    //     }
    // }
});