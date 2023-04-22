const users = [
    { id: 1, name: "John", age: "18", profession: "Developer" },
    { id: 2, name: "Jack", age: "20", profession: "Developer" },
    { id: 3, name: "Karen", age: "19", profession: "Admin" }
];

const usersContainer = document.getElementById('users-container');
const filterBtn = document.getElementById('filter-btn');
const addBtn = document.getElementById('add-btn');
const professionSelect = document.getElementById('profession');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const professionInput = document.getElementById('profession-input');

// function to render user cards
function renderUsers(usersArray) {
    usersContainer.innerHTML = '';
    usersArray.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <p>${user.name}</p>
        <p>Profession: ${user.profession}</p>
        <p>Age: ${user.age}</p>
      `;
        usersContainer.appendChild(card);
    });
}

// function to filter users by profession
function filterUsersByProfession(profession) {
    return users.filter(user => user.profession === profession);
}

// function to handle filter button click
function handleFilterClick() {
    const selectedProfession = professionSelect.value;
    if (selectedProfession === '') {
        alert('Please select a profession.');
        return;
    }
    const filteredUsers = filterUsersByProfession(selectedProfession);
    renderUsers(filteredUsers);
}

// function to handle add user button click
function handleAddClick() {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const profession = professionInput.value.trim();
    if (name === '' || age === '' || profession === '') {
        alert('Please fill out all fields.');
        return;
    }
    const newUser = {
        id: users.length + 1,
        name,
        age,
        profession
    };
    users.push(newUser);
    renderUsers(users);
    nameInput.value = '';
    ageInput.value = '';
    professionInput.value = '';
}

// add event listeners
filterBtn.addEventListener('click', handleFilterClick);
addBtn.addEventListener('click', handleAddClick);

// render initial users
renderUsers(users);