console.log('loaded');
document.addEventListener('mouseup', (e) => {
    const selection = window.getSelection().toString();
console.log(selection);
    if (selection != "") {
        sendDataToGPT(selection).then(res => res.json()).then(result => {
            result = result.choices[0].text;
	    if (result.includes('###')) result = result.split('###')[1];
	    console.log(result);
            showPopup(result)
        });
    }
});