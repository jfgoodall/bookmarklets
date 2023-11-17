javascript:(function() {
    const txt = document.activeElement;
    if (txt.nodeName === "TEXTAREA") {
        txt.value = 'Please see: [Why is "Can someone help me?" not an actual question?](https://meta.stackoverflow.com/questions/284236/why-is-can-someone-help-me-not-an-actual-question)';
        txt.setSelectionRange(txt.value.length, txt.value.length);
        txt.dispatchEvent(new KeyboardEvent("keyup"));
    }
})();
