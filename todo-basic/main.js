const form = document.getElementById("form");
const input = document.querySelector("input");
const notification = document.querySelector(".notification");
const tbody = document.querySelector("tbody");


// ----- input fields ------
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const P_number = document.getElementById("P_number");
const address = document.getElementById("address");


// ---- delete & update button --------
const deleteBtn = document.getElementById("delete");
const updateBtn = document.getElementById("update");


// ----- form submit -------
form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
})

// ----- form validation -------
const formValidation = () => {
    if (input.value === "") {
        notification.style.visibility = "visible";
    } else {
        acceptedData();
        notification.style.visibility = "hidden";
    }
}

// ----- data accepted & storage -------

let serialNum = 1;
const data = {};

const acceptedData = () => {
    data["name"] = fullName.value;
    data["email"] = email.value;
    data["phone"] = P_number.value;
    data["address"] = address.value;
    createPost();

    // reset input form
    fullName.value = "";
    email.value = "";
    P_number.value = "";
    address.value = "";
}

// ----- create post & read value -------
const createPost = () => {
    tbody.innerHTML += `
                            <tr>
                                <th scope="row" id="s_No">${serialNum++}</th>
                                <td id="table_name">${data.name}</td>
                                <td>${data.email}</td>
                                <td>${data.number}</td>
                                <td>${data.address}</td>
                                <td>  
                                <a href="#" class="btn btn-sm btn-info text-white me-2" id="update" onClick="updatePost(this)">Update</a>
                                <a href="#" class="btn btn-sm btn-danger" id="delete" onClick="deletePost(this)">Delete</a>
                                </td>
                            </tr>
    `
}
// ----- delete post -------
const deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

// ----- update post -------

let updatePost = (e) => {
    let selectParentBox = e.parentElement.parentElement;
    fullName.value = selectParentBox.children[1].innerHTML;
    email.value = selectParentBox.children[2].innerHTML;
    P_number.value = selectParentBox.children[3].innerHTML;
    address.value = selectParentBox.children[4].innerHTML;

    e.parentElement.parentElement.remove()
}