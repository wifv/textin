let lol = "";
let mrg = 0;

document.body.addEventListener('keyup', key => {
    // console.log(key.key)
    
    if(key.key == 'Enter') {
        lol += "<br>"
        mrg += 33;
        document.getElementById('text').style.bottom = mrg + "px";
    } else {
        if( 
        key.key != "Backspace" &&
        key.key != "Alt" &&
        key.key != "Tab" &&
        key.key != "Control" &&
        key.key != "Shift" &&
        key.key != "Escape" &&
        key.key != "CapsLock" &&
        key.key != "ArrowUp" &&
        key.key != "ArrowDown" &&
        key.key != "ArrowLeft" &&
        key.key != "ArrowRight" &&
        key.key != "Unidentified" &&
        key.key != "F" + Number
        ) {
            lol += key.key;
            document.getElementById('text').innerText = lol;
        }
    }
    if(key.key == "Backspace") {
        lol = lol.substring(0, lol.length-1)
        document.getElementById('text').innerText = lol;
    }
})