//Alyssa Portofee
//February 8, 2026
//Javascript interaction for home page

//Store result of DOM query
logo = document.getElementById('logo');

//Reveals text welcoming user to page when user mouses over the logo
function displayMessage(){
    var message = '<p>Welcome to the Flower Haus!</p>';
    var welcome = document.getElementById('header_elements');
    welcome.innerHTML += message;
    console.log('Mouseover');
    logo.removeEventListener('mouseover', displayMessage);
};


//display message when user mouses over the logo
logo.addEventListener('mouseover', displayMessage);

