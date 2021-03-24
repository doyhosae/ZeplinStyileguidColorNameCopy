function copyTemp() {
    deleteTemp();
    var text1 = document.querySelector(".name.ellipsis");
    var text2 = document.querySelector(".name.secondHalf");
    if (text2) {
        var result = text1.textContent + text2.textContent;
        var temp = document.createElement('textarea')
        temp.className = "temp"
        document.body.appendChild(temp)
        temp.textContent = result
        temp.select();
        document.execCommand('copy');
    } else if (!text2) {
        var text3 = document.querySelector(".textInput.withPrefix>input");
        var temp = document.createElement('textarea')
        temp.className = "temp"
        document.body.appendChild(temp)
        temp.textContent = "#" + text3.value;
        temp.select();
        document.execCommand('copy')
    }
}
function deleteTemp() {
        var a = document.querySelectorAll(".temp");
        a.forEach(function(element){
        element.remove();
        });
}
window.addEventListener('auxclick', copyTemp);