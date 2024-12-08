const nameInput = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

nameInput.addEventListener("input",()=> {
    let filteredName = nameInput.value.replace(/[^a-zA-Z\s]/g,"");
    nameDisplay.innerText = filteredName;
});