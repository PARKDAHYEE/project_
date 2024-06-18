const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});

const dayEl = document.getElementById('day')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

function countDown(){
    const newYear = new Date(2024, 5, 26)
    const current = new Date()

    const diffTime = Math.abs(newYear-current)

    const days = Math.floor( diffTime/(1000*3600*24) )
    const hours = Math.floor( diffTime/(1000*3600) %24)
    const mins = Math.floor( diffTime/(1000*60) %60)
    const seconds = Math.floor( diffTime/(1000) %60)

    dayEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : (time);
}
countDown()

setInterval(countDown, 1000)