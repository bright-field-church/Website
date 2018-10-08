document.addEventListener("DOMContentLoaded", function() 
{
    let socialMediaIconArray = document.getElementsByClassName("fa");
    let facebookButton = socialMediaIconArray[0];
    let instagramButton = socialMediaIconArray[1];
    let contactButton = socialMediaIconArray[2];

    facebookButton.onclick("location.href='https://www.facebook.com/brightfieldchurch'");
});