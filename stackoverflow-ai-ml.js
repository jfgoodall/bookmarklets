javascript:(function() {
    const txt = document.activeElement;
    if (txt.nodeName === "TEXTAREA") {
        txt.value = "You might get better answers to your question if you repost over at the [Cross Validated](https://stats.stackexchange.com/) StackExchange.";
        txt.setSelectionRange(txt.value.length, txt.value.length);
        txt.dispatchEvent(new KeyboardEvent("keyup"));
    }
})();
