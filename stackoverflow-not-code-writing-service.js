javascript:(function() {
    const txt = document.activeElement;
    if (txt.nodeName === "TEXTAREA") {
        const id = location.pathname.split('/')[2];
        txt.value = "Welcome to SO! Stack Overflow is not a code-writing or tutorial service. Please [edit](https://stackoverflow.com/posts/"+id+"/edit) your question and post [what you have tried so far](https://meta.stackoverflow.com/q/261592), including example input, expected output, the actual output (if any), and the [full text of any errors or tracebacks](https://meta.stackoverflow.com/q/359146), all as formatted text in the question itself. Do not post images of text. The code should be a [minimal reproducible example](https://stackoverflow.com/help/minimal-reproducible-example).";
        txt.setSelectionRange(txt.value.length, txt.value.length);
        txt.dispatchEvent(new KeyboardEvent("keyup"));
    }
})();
