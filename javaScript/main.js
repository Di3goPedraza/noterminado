// MODAL variatiaons
const btnUser = document.getElementById("btnAddUser");
const inputId = document.getElementById("idCliente");
const inputName = document.getElementById("nameClient");
const inputLastName = document.getElementById("lastNameClient");
const inputTel = document.getElementById("telClient");
const inputEmail = document.getElementById("emailClient");
const inputDate = document.getElementById("dateClient");
const inputNationality = document.getElementById("nationalityClient");
// CONTAINER USER
const continerUser = document.getElementById("containerUser");
// TEMPLATE USER
const templateuser = document.getElementById("templateUser").content;
const userId = templateuser.getElementById("templateId");
const userName = templateuser.getElementById("templateName");
const userLastName = templateuser.getElementById("templateLastName");
const userTel = templateuser.getElementById("templateTel");
const userEmail = templateuser.getElementById("templateEmail");
const userDate = templateuser.getElementById("templateDate");
const usernationality = templateuser.getElementById("templateNationality");
// ROW
const btnDeleteUser = templateuser.querySelector(".deletUser");
// arrayUSer
const contentUser = [];

// ADD TEMPLATE A INDEX
btnUser.addEventListener("click", addUser);

function addUser(e) {
  const user = {
    id: contentUser.length,
    cc: inputId.value,
    userNAme: inputName.value,
    userLastName: inputLastName.value,
    userTel: inputTel.value,
    userDate: inputDate.value,
    usernationality: inputNationality.value,
  };
  contentUser.push(user);
  viewRow();
}

function viewRow() {
  continerUser.innerHTML = "";
  contentUser.forEach((user) => {
    const fragmentuser = new DocumentFragment();
    userId.textContent = user.cc;
    userName.textContent = user.userNAme;
    userLastName.textContent = user.userLastName;
    userTel.textContent = user.userTel;
    userEmail.textContent = user.userEmail;
    userDate.textContent = user.userDate;
    usernationality.textContent = user.usernationality;
    btnDeleteUser.id = user.id;
    const clone = templateuser.cloneNode(true);
    fragmentuser.appendChild(clone);
    continerUser.appendChild(fragmentuser);
    console.log(user);
  });
  clearFrom();
}
function clearFrom() {
  inputId.value = "";
  inputName.value = "";
  inputLastName.value = "";
  inputTel.value = "";
  inputEmail.value = "";
  inputDate.value = "";
  inputNationality.value = "";
}
// Delete TEmplateUser
continerUser.addEventListener("click", deleteUser);
function deleteUser(e) {
  const btnDeleteUSer = e.target;
  if (btnDeleteUSer.classList.contains("deletUser")) {
    contentUser.splice(btnDeleteUSer.id, 1);
  }
  viewRow();
}

continerUser.addEventListener("click", editUser);
function editUser(e, contentUser) {
  const btnEditUser = e.target;
  if (btnEditUser.classList.contains("editUser")) {
    const [
      id,
      cc,
      userName,
      userLastName,
      userTel,
      userDate,
      usernationality,
    ] = contentUser;
    inputId.value = cc;
    inputName.value = userName;
    inputLastName.value = userLastName;
    inputTel.value = userTel;
    inputEmail.value = userEmail;
    inputDate.value = userDate;
    inputNationality.value = usernationality;
    user.id=id
  }
}
