document.addEventListener("contextmenu", e => e.preventDefault());
document.onkeydown = function(e){
    if(e.keyCode==123 || (e.ctrlKey && e.shiftKey) || (e.ctrlKey && e.keyCode==85)) {
        return false;
    }
};