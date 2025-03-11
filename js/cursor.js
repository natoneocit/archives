let theme = localStorage.getItem("theme");
if (theme == "XP" || theme == "98" || theme == null) {
    document.body.style.cursor = "url('/img/cursors/default/Default.png'), auto";
}
if (theme == "7") {
    document.body.style.cursor = "url('/img/cursors/7/Default.png'), auto";
}