let btn = document.getElementById("chodu");
btn.addEventListener("contextmenu", () => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "hello world";
    document.body.appendChild(newDiv);
});
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events