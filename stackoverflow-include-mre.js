javascript:(function() {
    let id = location.pathname.split('/')[2];
    document.activeElement.setRangeText("Please [edit](https://stackoverflow.com/posts/"+id+"/edit) your question to include a [minimum reproducible example](https://stackoverflow.com/help/minimal-reproducible-example) with test data demonstrating your problem.");
})();
