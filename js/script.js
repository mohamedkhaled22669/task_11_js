// Add User
var a_user = document.getElementById("add-user");
var a_s = document.getElementById("add-salary");
var btn_a = document.getElementById("btn-add-user");

// list User
var ul_list = document.querySelector(".ul-list");
var li_list = document.querySelector(".li-list");
var li_lists = document.querySelectorAll(".li-list");
var id_list = document.querySelector(".id-list");
var user_list = document.querySelector(".user-list");
var salary_list = document.querySelector(".salary-list");
// var edit = document.getElementById("edit");
// var remove = document.getElementById("remove");



// Edit
var e_id = document.getElementById("edit-id");
var e_user = document.getElementById("edit-user");
var e_s = document.getElementById("edit-salary");
var btn_e = document.getElementById("btn-edit-user");

id = 0;

btn_a.addEventListener("click", function () {

    id += 1;
    
    ul_list.innerHTML += 
    `<li class="li-list d-flex w-100"><span id="id_list_t" class="id-list">${id}</span> <span class="user-list">${a_user.value}</span> <span class="salary-list">${a_s.value}</span> 
    <span class="link">
    <span class="btn" onclick='remove(this)'><i class="fas fa-user-times"></i></span>
    <span class="btn" onclick='edit(this)' id="edit"><i class="fas fa-user-edit"></i></span>
    </span>
    </li>`;

});


function remove(item) {
    item.parentElement.parentElement.remove();
}

function edit(item) {
    e_id.value = item.parentElement.parentElement.querySelector(".id-list").textContent;
    e_user.value = item.parentElement.parentElement.querySelector(".user-list").textContent;
    e_s.value = item.parentElement.parentElement.querySelector(".salary-list").textContent;
}





var i;

btn_e.onclick = function() {
    
    for (i = 1; i <= id; i++) {
        
        // console.log(ul_list.children[i]);
        var x = ul_list.children[i];
        y = x.querySelector(".id-list").textContent;
        // console.log(y);
        if (e_id.value == y) {
            console.log("done");
            x.querySelector(".user-list").textContent = e_user.value;
            x.querySelector(".salary-list").textContent = e_s.value;
        }
    }
};