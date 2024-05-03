let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.classList.add("li");
    item.innerText = inp.value;
    ul.appendChild(item);

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("delete");
    item.appendChild(del);
    inp.value = "";
});

ul.addEventListener("click", function (event) {     //event bubbling
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

// let del = document.querySelectorAll(".delete");
// for (let delBtn of del) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }


