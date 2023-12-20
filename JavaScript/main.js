console.log('Welcome to my portfolio');

// Auto date in copyright footer
document.getElementById('year').innerHTML = new Date().getFullYear();
 
// alert button - Back to Top
var btnAlert = document.getElementById('btn-alert');
    btnAlert.addEventListener('click', function() {
    alert('Please contact me first before go back :)');
})

// hover button
document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = "Contact Me Now";
};
        
document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = "Back to Top";
};

// incrementing button - Click for Like
var btnCounter = document.getElementById("btn-counter");
var txtCounter = document.getElementById("txt-counter");

var counter = 1;

btnCounter.addEventListener("click", function() {

counter++;

txtCounter.textContent = "Number: " + counter;

if (counter % 2 === 0) {
    txtCounter.style.color = "blue";
} else {
    txtCounter.style.color = "red";
}
});

// for loops var numbersList = document.getElementById("numbers");

for (let i = 1; i <= 100; i = i + 1) {

var listItem = document.createElement("li");

listItem.textContent = i % 2 === 0 ? 'even' : 'odd';

listItem.classList.add(i % 2 === 0 ? 'even' : 'odd');

numbersList.appendChild(listItem);
}