


// Removes active class from button
function removeActive(currentBtnId) {

    // remove active class from other btn
    const btns = document.getElementsByTagName('button');
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].id !== `${currentBtnId}`) {
            btns[i].classList.remove('active');
        }
    }

}



export {removeActive};