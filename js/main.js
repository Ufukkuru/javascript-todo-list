let userForm = document.querySelector("#userForm")
userForm.addEventListener('submit', formHandler)

function formHandler(event){
    event.preventDefault()
    const USEFORM = document.querySelector("#input")

    if(USEFORM.value === ''){
        alert("can you please write");
    }
    else{
        addItem(USEFORM.value)
        USEFORM.value = "";
    }
}


let userListDom = document.querySelector("#userList")

userListDom.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        toggleListItemColor(event.target);
    }
});

function toggleListItemColor(listItem) {
    listItem.classList.toggle("bg-warning");
}

const addItem= (useform) => {
    let liDom = document.createElement('li');
    liDom.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-');

    let spanDom = document.createElement('span');
    spanDom.textContent = useform;

    let buttonDom = document.createElement('button');
    buttonDom.classList.add('btn', 'btn-outline-dark', 'btn-sm');
    buttonDom.type = "button";
    buttonDom.textContent = "Delete";

    buttonDom.addEventListener("click", function() {
        this.closest("li").remove();
    });
    liDom.appendChild(spanDom);
    liDom.appendChild(buttonDom);
    userListDom.appendChild(liDom);

    buttonDom.addEventListener('click', function() {
        this.closest('li').remove();
    });
}

