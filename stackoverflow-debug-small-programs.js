javascript:(function() {
    const txt = document.activeElement;
    if (txt.nodeName === "TEXTAREA") {
        txt.value = "[How to debug small programs](https://ericlippert.com/2014/03/05/how-to-debug-small-programs/).";
        txt.setSelectionRange(txt.value.length, txt.value.length);
        txt.dispatchEvent(new KeyboardEvent("keyup"));
    }
})();
