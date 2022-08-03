let copytext=document.querySelector(".copy-text")
copytext.querySelector("button").addEventListener("click",function(){
    let input = copytext.querySelector("input.text");
    input.select();
    document.execCommand("copy");
    copytext.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        copytext.classList.remove("active");
    },2500);
});