// Special JS //
let dayItem = document.querySelector('#days');
let hourItem = document.querySelector('#hours');
let minuteItem = document.querySelector('#min');
let secondItem = document.querySelector('#sec');

let countDown = () => {
    let futureDate = new Date("31 October 2026");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    dayItem.innerHTML = days;
    hourItem.innerHTML = hours;
    minuteItem.innerHTML = min;
    secondItem.innerHTML = sec;
}

countDown()
setInterval(countDown, 1000)

// Scroll JS //
function scrollTopBack(){
    let scrollTopButton = document.querySelector("#scrollUp")
    window.onscroll = function (){
        var scroll  = document.documentElement.scrollTop;
        if(scroll >= 200){
            scrollTopButton.classList.add('scrollActive')
        } else{
            scrollTopButton.classList.remove('scrollActive')
        }
    }
}
scrollTopBack();

// nav hide //
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
      navCollapse.classList.remove("show");  
    })
})
document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    console.clear();

    console.log("==================================");
    console.log("📩 NEW CONTACT FORM SUBMITTED");
    console.log("==================================");
    console.log("👤 Name    :", name);
    console.log("📧 Email   :", email);
    console.log("💬 Message :", message);
    console.log("🕒 Date    :", new Date().toLocaleString());
    console.log("==================================");

    // Form Reset
    this.reset();

});
