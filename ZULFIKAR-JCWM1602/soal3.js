var arrUser = [{ userName: 'alee', email: 'alee@gmail.com', role: 'admin' }];

var arrRole = ['admin', 'user'];

var indexEdit = -1;

const Printdata = (arr) => {
    let result = arr.map((val, index) => {
        if (indexEdit == index) {
            return ` <tr>
                <td>${index + 1}</td>
                <td><input type="text" placeholder="Username" value=${val.userName} id="inputEditUser${index}"> </td>
                <td><input type="email" placeholder="email" value=${val.email} id="inputEditEmail${index}"></td>
                <td><select id="role"></select></td>
                <td>
                    <input type="button" value="Save" onclick="onEditSaveClick(${val.id})">
                    <input type="button" value="Cancel" onclick="onCancelEditClick()">
                </td>
            </tr>`;
        }
        return ` <tr>
            <td>${index + 1}</td>
            <td>${val.userName}</td>
            <td>${val.email}</td>
            <td>${val.role}</td>
            <td>
                <input type="button" value="Edit" onclick="onEditClick(${index})">
                <input type="button" value="Delete" onclick="onDeleteClick(${val.id})">
            </td>
        </tr>`;
    });
    document.getElementById('renderData').innerHTML = result.join('');
};

Printdata(arrUser);

//Kategori
const printRole = () => {
    let result = arrRole.map((val, index) => {
        return `<option value=${index}>${val}</option>`;
    });
    document.getElementById('role').innerHTML = result.join('');
};

Printdata(arrUser);
printRole();

//Edit
const onEditClick = (index) => {
    indexEdit = index;
    Printdata(arrUser);
};

const onDeleteClick = (id) => {
    const indexdel = arrUser.findIndex((val) => val.no == no); // untuk mencari index berdasarkan id
    arrUser.splice(indexdel, 1);
    Printdata(arrUser);
};

const onEditSaveClick = (userName) => {
    var editUser = document.getElementById('inputEditUser' + indexEdit).value;
    var editEmail = document.getElementById('inputEditEmail' + indexEdit).value;
    const indexEd = arrUser.findIndex((val) => val.userName == userName); // untuk mencari index berdasarkan id
    arrUser[indexEd].userName = editUser;
    arrUser[indexEd].email = editEmail;
    indexEdit = -1;
    Printdata(arrUser);
};

const inputData = () => {
    var inputUsername = document.getElementById('nama').value;
    var inputEmail = document.getElementById('email').value;
    console.log(inputUsername);
    var inputRole = document.getElementById('role').value;

    if (inputUsername && inputEmail && inputRole) {
        var inputObj = {
            role: arrRole[inputRole],
            userName: inputUsername,
            email: inputEmail,
        };
        arrUser.push(inputObj);
        Printdata(arrUser);
    } else {
        alert('input datanya woy');
    }
};
