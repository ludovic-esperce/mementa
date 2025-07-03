document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#add-file").addEventListener("click", addFileInput);


});

function addFileInput(e) {
    let lineInput = document.createElement('div');
    lineInput.setAttribute("data-input", countFilesInput());

    let fileInput = document.createElement('input');
    fileInput.type = "file";

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fe");
    deleteIcon.classList.add("fe-close");

    lineInput.appendChild(fileInput);
    lineInput.appendChild(deleteIcon);

    document.querySelector("#files").appendChild(lineInput);

    getMaxInputIndex();
}

function countFilesInput() {
    let fileLines = document.querySelectorAll("#files > div");
    console.log(fileLines.item(0));
    // fileLines.


    return fileLines.length;
}

function getMaxInputIndex() {
    let fileLines = document.querySelectorAll("#files > div");

    console.log("REDUCE");

    // Transformation de la NodeList en Array
    // utilisation de "reduce" pour trouver la valeur maximale de l'index
    // la première fois, "previous" ne vaut rien
    const max = Array.from(fileLines).reduce(function (previous, current) {
        console.log("Previous");
        console.log(previous);
        
        let previousIndex = parseInt(previous.getAttribute("data-input"));
        let currentIndex = parseInt(current.getAttribute("data-input"));
        console.log("First try");

        console.log(current);
        console.log(currentIndex);

        return (previousIndex > currentIndex) ? previousIndex : currentIndex;
    });

    console.log("MAX " + max);

    return max;
}