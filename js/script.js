const scroller = document.getElementById("scroll")

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scroller.style.display = "block";
    } else {
        scroller.style.display = "none";
    }
}

scroller.addEventListener("click", () => {
    window.scrollTo({
        top: 0, behavior: "smooth"
    });
});

const menuIcon = document.querySelector(".ham-menu");
const sideMenu = document.querySelector(".side-menu");

menuIcon.addEventListener("click", () => {
    sideMenu.classList.toggle("show");
    menuIcon.classList.toggle("active")
})


// Form submission

const submit = document.querySelector(".submit");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

submit.addEventListener("click", (event) => {

    if (!name.value || !email.value || !message.value) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault();
        return;
    } else {
        alert('Your message has been sent! Thank you for reaching out.');
    }
});