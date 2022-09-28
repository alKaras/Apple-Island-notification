let popup = document.querySelector(".island-popup");
popup.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.toggle('active');
})