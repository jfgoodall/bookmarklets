javascript:(function() {
    const txt = document.activeElement;
    if (txt.nodeName === "TEXTAREA") {
        const id = location.pathname.split('/')[2];
        txt.value = "Please [edit](https://stackoverflow.com/posts/"+id+"/edit) your question to include a [minimum reproducible example](https://stackoverflow.com/help/minimal-reproducible-example) with test data demonstrating your problem.";
        txt.setSelectionRange(txt.value.length, txt.value.length);
        txt.dispatchEvent(new KeyboardEvent("keyup"));
    }
})();
