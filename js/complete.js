
const completeButtons = document.querySelectorAll(".complete-button");

const increaseElement = document.getElementById("increase");
let increaseValue = parseInt(increaseElement.innerText);

const counterElement = document.getElementById("counter");

let counterValue = parseInt(counterElement.innerText);

for (const button of completeButtons) {
    button.addEventListener("click", function() {
        alert("Board Updated Successfully");
        
        if(increaseValue > 0){
            increaseValue++;
            increaseElement.innerText = increaseValue;
            button.disabled = true;

            const container = document.getElementById("history");
            const div = document.createElement("div");
            div.classList.add("bg-gray-400");
            div.innerHTML = `
                <p>You have completed the fix mobile button issue</p>
            `

            container.appendChild(div);

        }
    });
}

for (const button of completeButtons) {
    button.addEventListener("click", function() {
        
        if (counterValue > 0) { 
            counterValue--;
            counterElement.innerText = counterValue;
            button.disabled = true;
        }
    });
}
