function loadPage (callback) {

    // Add an event listener to detect when the 
    // page loads
    document.addEventListener('DOMContentLoaded', e => {
        callback();
    })

}

export default loadPage;