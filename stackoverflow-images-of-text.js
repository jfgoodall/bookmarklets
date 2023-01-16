javascript:(function() {
    const txt = document.activeElement;
    if (txt.nodeName === "TEXTAREA") {
        const id = location.pathname.split('/')[2];
        txt.value = "[Please don't post images of code/data/errors.](https://meta.stackoverflow.com/q/285551) You can [edit](https://stackoverflow.com/posts/i"+id+"/edit) your question and replace the images with [properly formatted](https://meta.stackexchange.com/questions/22186/how-do-i-format-my-code-blocks) text. See: [*How to ask a good question*](https://stackoverflow.com/help/how-to-ask)";
        txt.setSelectionRange(txt.value.length, txt.value.length);
        txt.dispatchEvent(new KeyboardEvent("keyup"));
    }
})();
