let users = [];

const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
const filterInput = document.getElementById('filter');

function addUserToTable(user) {
    const row = userTable.insertRow();
    row.insertCell(0).innerText = user.name;
    row.insertCell(1).innerText = user.email;
    row.insertCell(2).innerText = user.age;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const age = ageInput.value;

    const user = { name, email, age };
    users.push(user);
    addUserToTable(user);

    nameInput.value = '';
    emailInput.value = '';
    ageInput.value = '';
});

function sortTable(columnIndex) {
    const rows = Array.from(userTable.rows);
    const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();

        if (cellA < cellB) return -1;
        if (cellA > cellB) return 1;
        return 0;
    });

    userTable.innerHTML = '';
    sortedRows.forEach(row => userTable.appendChild(row));
}

filterInput.addEventListener('input', function () {
    const filterValue = filterInput.value;

    const filteredUsers = users.filter(user => user.age === filterValue || !filterValue);

    userTable.innerHTML = '';
    filteredUsers.forEach(user => addUserToTable(user));
});