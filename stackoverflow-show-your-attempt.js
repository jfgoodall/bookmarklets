javascript:(function() {
    const txt = document.activeElement;
    if (txt.nodeName === "TEXTAREA") {
        const id = location.pathname.split('/')[2];
        txt.value = "Can you please [edit](https://stackoverflow.com/posts/"+id+"/edit) your question to include what you have tried so far to solve the issue? See: [*How to ask a good question*](https://stackoverflow.com/help/how-to-ask)";
        txt.setSelectionRange(txt.value.length, txt.value.length);
        txt.dispatchEvent(new KeyboardEvent("keyup"));
    }
})();
