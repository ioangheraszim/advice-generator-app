// Variables
const adviceTitle = document.getElementById("advice-title");
const adviceText = document.getElementById("advice-text");
const myBtn = document.getElementById("render-button")


function fetchData () {
    fetch('	https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then (data => {

        // Populate text
        adviceTitle.textContent = `#${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
    }).catch (error => {
        console.log('Error:', error);
    })
}

myBtn.addEventListener("click", fetchData)