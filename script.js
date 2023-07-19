var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate")
    }, 500);
}



var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 460 && blockLeft > 390 && characterTop >= 145) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("Ooops, The mouse got to the Beverage!")
        let text = "Would you like to play again?";
        if (confirm(text) == true) {
        window.location.reload();
        } else {}
    }
}, 10)

    