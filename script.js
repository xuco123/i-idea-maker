const spanId = document.getElementById("spanId");
const quoteId = document.getElementById("quoteId");
const button = document.getElementById("button")


button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then((data) => data.slip)
        .then((data) => {
            spanId.textContent = data.id;
            quoteId.textContent = `"${data.advice}"`;
        })
        .catch((error) => {
            alert(`Error ${error}`);
        });
})

