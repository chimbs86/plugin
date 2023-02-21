window.onload = function () {
 try {
     document.getElementById("book").addEventListener("click", myFunction);
 }
 catch (e) {    }
}


function myFunction(){
    fetch(chrome.runtime.getURL('/overlay.html')).then(r => r.text()).then(html => {
        document.body.insertAdjacentHTML('beforeend', html);

        // not using innerHTML as it would break js event listeners of the page
    });
}