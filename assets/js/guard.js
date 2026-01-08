document.addEventListener("contextmenu", e => e.preventDefault());
document.onkeydown = e => !(e.keyCode==123 || (e.ctrlKey && e.shiftKey) || (e.ctrlKey && e.keyCode==85));