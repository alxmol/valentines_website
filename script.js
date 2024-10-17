let firstName = '';
function askValentineQuestion() {
    firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    
    var errorMessage = document.getElementById('name-error');
    
    // check if either the first name or last name input is empty
    if (firstName === "" || lastName === "") {
        // display the error message
        errorMessage.style.display = "block";
        errorMessage.style.opacity = 1; // ensure full visibility
        return; // exit the function early if names are missing
    } else {
        // hide the error message when not needed
        errorMessage.style.display = "none";
    }
    
    // display the valentine question and personalize it with the user's name
    document.getElementById('valentine-message').innerHTML = `Hey ${firstName} ${lastName}, would you like to be my Valentine?`;
    document.getElementById('name-entry').style.display = "none"; // dide the name entry section
    document.getElementById('valentine-question').style.display = "block"; // show the valentine question section
}

// gif in place before yes function is called
const yesGifUrl = "images/yesGIF.gif";

function responseYes() {
    document.getElementById('valentine-question').style.display = "none"; // hide the question section
    // display positive response message
    document.getElementById('message').innerHTML = `Im very happy that you said yes, Happy Valentine's Day ${firstName}, kisses 🥰`;

    // Update the GIF to the one for the "Yes" click
    document.getElementById('funny-gif').src = yesGifUrl;
}


function createHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '🩷';

    // randomize the initial position of the heart
    heart.style.left = `${Math.random() * 100}%`;

    container.appendChild(heart);

    // remove heart after animation completes, then create a new one
    heart.addEventListener('animationiteration', () => {
        heart.remove();
        createHeart(); // create a new heart to replace the removed one
    });
}

// tnitial pop of hearts
for (let i = 0; i < 20; i++) { // adjust initial number of hearts
    setTimeout(createHeart, i * 250); // stagger the creation to avoid uniformity
}

// array of GIF URLs to switch every time no is pressed
const gifs = [
    "images/fithy.gif",
    "images/second.gif",
    "images/threeee.gif",
    "images/mimibubu.gif",
    "images/laughyy.gif"
];

// keep track of which GIF is currently being shown
let currentGifIndex = 0;

// tnitialize a counter for the "No" button clicks
let noButtonClicks = 0;

function moveNoButton() {
    if (currentGifIndex < gifs.length) {
        // update the GIF
        const gifElement = document.getElementById('funny-gif');
        gifElement.src = gifs[currentGifIndex];

        // prepare for the next GIF in the array
        currentGifIndex++;
    }

    noButtonClicks++; // increment the 'no' button counter each time the button is clicked

    var noButton = document.getElementById('btn-no');

    // update the button text based on the number of times clicked
    switch (noButtonClicks) {
        case 1:
            noButton.textContent = "Please?";
            break;
        case 2:
            noButton.textContent = "Reconsider";
            break;
        case 3:
            noButton.textContent = "Oh c'mon";
            break;
        case 4:
            noButton.textContent = "Pleaseeee click on yes";
            break;
        case 5:
            noButton.textContent = "Button broken";
            // make the button unclickable after the fifth click
            noButton.disabled = true;
            break;
        default:
            break;
    }
    
    var noButton = document.getElementById('btn-no');

    // get viewport dimensions
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    // assume an estimated size for the button bcuz size switches based on text inside button
    var buttonWidth = 100;
    var buttonHeight = 50;

    // calculate max positions
    var maxX = viewportWidth - buttonWidth;
    var maxY = viewportHeight - buttonHeight;

    // generate random positions within bounds of webpage
    var newX = Math.random() * maxX;
    var newY = Math.random() * maxY;

    // apply the new positions to button
    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
}

// play audio from html music file
function playMusic() {
    var audio = document.getElementById('background-music');
    audio.play().catch(error => console.error("Playback failed:", error));
}

//pause audio from html music file
function pauseMusic() {
    var audio = document.getElementById('background-music');
    audio.pause();
}

