// ``
const button = document.querySelector("button");
const input = document.querySelector("input");
const con = document.getElementById("container");

con.addEventListener("click", (eo) => {
    switch (eo.target.className) {
        case "icon-trash icon":
            eo.target.parentElement.parentElement.remove()
            break;
    
        case "icon-angry icon":
            eo.target.classList.add("dn");
            const heart = `<span class="icon-heart"></span>`;
            
            eo.target.parentElement.parentElement
            .getElementsByClassName("task-text")[0]
            .classList.add("finish");
        
            eo.target.parentElement.innerHTML += heart;
            break;
    
        case "icon-heart":
            eo.target.parentElement.parentElement
            .getElementsByClassName("task-text")[0]
            .classList.remove("finish");
        
            eo.target.classList.add("dn")
        
            const addAngry = `<span class="icon-angry icon"></span>`
            eo.target.parentElement.innerHTML += addAngry;
            break;
    
        case "icon-star icon":
            eo.target.classList.add("orange")
            con.prepend(eo.target.parentElement)
            break;
    
        case "icon-star icon orange":
            eo.target.classList.remove("orange")
            break;
    }
});

button.addEventListener("click", (eo) => {
eo.preventDefault();
const task = `
        <div class="task">
        <span class="icon-star icon"></span>
        <p class="task-text"> ${input.value} </p>

        <div>
            <span class="icon-trash icon"></span>
            <span class="icon-angry icon"></span>
        </div>
    </div>
    `;

con.innerHTML += task;
input.value = ""
});
