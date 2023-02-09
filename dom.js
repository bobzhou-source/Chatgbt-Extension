function button(_text, _function) {
    const btn = document.createElement('button');
    btn.textContent = _text;
    btn.classList.add('cscbutton');
    btn.addEventListener('click', _function);
    return btn;
}

let popupBg=null, textarea = null;
function addPopup() {
    popupBg = document.createElement('div');
    popupBg.id = "csBg";
    const popup = document.createElement('div');
    popup.id = 'cspopup';
    // 
    textarea = document.createElement('div');
    textarea.id = 'cstextarea';
    popup.appendChild(textarea);
    // buttons
    const down = document.createElement('div');
    down.appendChild(button("Close", () => {
        popupBg.style.display = 'none';
    }));
    // 
    popup.appendChild(down);
    popupBg.appendChild(popup);
    document.body.insertBefore(popupBg, document.body.firstChild);
}

function showPopup(text) {
    textarea.innerText = text.trim();
    popupBg.style.display = 'block';
    setTimeout(() => {
	popupBg.style.display = 'none';
    }, 10 * 1000);
}

addPopup();