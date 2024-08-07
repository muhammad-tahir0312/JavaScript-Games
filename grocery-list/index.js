const list = document.querySelector(".list");

function insha() {
    const items = document.querySelectorAll("button");
    console.log(items)
    items.forEach((item) => {
        if (item.classList.contains("up")) {
            item.addEventListener("click", () => {
                const li = item.closest("li");
                li.innerHTML = prompt("Enter updated value: ") + ` <button type="submit" class="butt2 del">Delete</button> <button type="submit" class="butt2 up">Update</button>`;
                insha();
            });
        }
        if (item.classList.contains("del")) {
            item.addEventListener("click", () => {
                item.closest("li").remove();
            });
        }
    });
}

insha();


const inp = document.querySelector("#butt");
const se = document.querySelector("#search");


inp.addEventListener("click", () => {
    const newLi = document.createElement("li");

    newLi.classList.add("item");
    newLi.innerHTML = document.querySelector("#search").value + ` <button type="submit" class="butt2 del">Delete</button> <button type="submit" class="butt2 up">Update</button>`;
    list.appendChild(newLi);
    insha();
})
