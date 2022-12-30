function handleClick(element) {
    element.innerHTML = "Clicked";
    element.style = "background-color:blue";
}

var image = document.getElementById("image");
image.addEventListener("mouseover", function () {
    this.style = "box-shadow: 2px 2px 2px grey";
    this.width = "110";
});

image.addEventListener("mouseout", function () {
    this.style = "";
    this.width = "100";
});