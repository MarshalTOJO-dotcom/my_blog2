document.querySelector(".fancy-button").addEventListener("click", function() {
    this.style.backgroundColor = "#00ff99";
    this.innerText = "Clicked!";
    alert("You clicked the button!");
});
