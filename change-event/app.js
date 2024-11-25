let inp = document.querySelector("input");

inp.addEventListener("input",()=> {
    h2 = document.querySelector("h2");
    h2.innerText = inp.value;
})