javascript:(function() {
    const txt = document.activeElement;
    if (txt.nodeName === "TEXTAREA") {
        const id = location.pathname.split('/')[2];
        txt.value = "Please read [*How to ask a homework question*](https://meta.stackoverflow.com/questions/334822/how-do-i-ask-and-answer-homework-questions)";
        txt.setSelectionRange(txt.value.length, txt.value.length);
        txt.dispatchEvent(new KeyboardEvent("keyup"));
    }
})();
