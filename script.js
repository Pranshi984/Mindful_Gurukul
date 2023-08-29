// Function to edit user details
function editUser(userId) {
    const user = users.find(user => user.id === userId);

    if (user) {
        const newName = prompt('Enter new name:', user.name);
        const newEmail = prompt('Enter new email:', user.email);
        const newPhone = prompt('Enter new phone:', user.phone);

        if (newName && newEmail && newPhone) {
            user.name = newName;
            user.email = newEmail;
            user.phone = newPhone;
            renderUserListing();
        }
    }
}

// Function to delete user
function deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
        users = users.filter(user => user.id !== userId);
        renderUserListing();
    }
}

// Function to show add user form
function showAddUserForm() {
    const addUserForm = document.createElement('div');
    addUserForm.className = 'add-user-form';

    const formContent = `
        <h2>Add New User</h2>
        <input id="newUserName" type="text" placeholder="Name">
        <input id="newUserEmail" type="text" placeholder="Email">
        <input id="newUserPhone" type="text" placeholder="Phone">
        <button onclick="addNewUser()">Add User</button>
        <button onclick="cancelAddUser()">Cancel</button>
    `;

    addUserForm.innerHTML = formContent;
    document.getElementById('userDetails').appendChild(addUserForm);
}

// Function to add a new user
function addNewUser() {
    const newUserName = document.getElementById('newUserName').value;
    const newUserEmail = document.getElementById('newUserEmail').value;
    const newUserPhone = document.getElementById('newUserPhone').value;

    if (newUserName && newUserEmail && newUserPhone) {
        addUser(newUserName, newUserEmail, newUserPhone);
        cancelAddUser();
    }
}

// Function to cancel adding a new user
function cancelAddUser() {
    const addUserForm = document.querySelector('.add-user-form');
    if (addUserForm) {
        addUserForm.remove();
    }
}

// Initialize the app
function initApp() {
    // Fetch users from API or local storage and populate the 'users' array
    // Call renderUserListing() to display the user listing
    renderUserListing();
}

window.onload = initApp;
