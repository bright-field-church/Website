$(document).ready(function()
{
    var navbar_menu_icon_accordion = document.getElementById("navbar-menu-icon-accordion");
    var accordion = document.getElementsByClassName("accordion");
    var i;

    // This statement adds a click event listener that drops down a menu when the menu icon is clicked.
    navbar_menu_icon_accordion.addEventListener("click", function()
    {   
        var navbar_menu_content_panel = this.nextElementSibling;

        if(navbar_menu_content_panel.style.maxHeight)
        {
            navbar_menu_content_panel.style.maxHeight = null;
        }
        else
        {
            navbar_menu_content_panel.style.maxHeight = navbar_menu_content_panel.scrollHeight + "px";
        }
    });

    //alert(accordion.length);
    for(i = 0; i < accordion.length; i++)
    { 
        accordion[i].addEventListener("click", function()
        {
            var panel = this.nextElementSibling;

            if(panel.style.maxHeight)
            {
                panel.style.maxHeight = null;
            }
            else
            {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

});