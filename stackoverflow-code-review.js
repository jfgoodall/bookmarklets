javascript:(function() {
    const txt = document.activeElement;
    if (txt.nodeName === "TEXTAREA") {
        txt.value = "If your code runs without error and produces the correct result then you'll get better feedback on performance, style, technique if you repost your question over at the [Code Review StackExchange](https://codereview.stackexchange.com/).";
        txt.setSelectionRange(txt.value.length, txt.value.length);
        txt.dispatchEvent(new KeyboardEvent("keyup"));
    }
})();
