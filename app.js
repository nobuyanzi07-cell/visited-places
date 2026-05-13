// Import Constructors
function Contact(name, Phone, email) {
    this.name = name;
    this.phone = Phone;
    this.email = email;
    console.log(`Created contact: ${this.display()}`);
}

Contact.prototype.updatePhone = function(newPhone) {
    console.log(`Displaying contact: ${this.name}`);
    return `${this.name} - ${this.phone} - ${this.email}`;
};

function AddressBook() {
    this.contacts = [];
    console.log('AddressBook creation');
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
    console.log(`Contact added: ${contact.display()}`);
};

function Place(location, landmark) {
    this.location = location;
    this.landmark = landmark;
    console.log(`Place created: ${this.location}, ${this.landmark}`);
}

Place.prototype.summary = function() {
    console.log(`Summarizing place: ${this.location}`);
    return `${this.location} is located in ${this.landmark}`;
};

function Task(description) {
    this.description = description;
    this.done = false;
    console.log(`Task creation: ${this.description}`);
}

Task.prototype.markDone = function() {
    this.done = true;
    console.log(`Task marked done: ${this.description}`);
};

//Instantiate managers
const book = new AddressBook();
const places = [];
const tasks = [];

//Address book interface
document.getElementById('addContact').addEventListener('click', () => {
    const name = document.getElementById('contactName').value;
    const phone = document.getElementById('contactPhone').value;
    const email = document.getElementById('contactEmail').value;
    const contact = new Contact(name, phone, email);
    book.addContact(contact);
    const li = document.createElement('li');
    li.textContent = contact.display();
    document.getElementById('contactList').appendChild(li);
});

//Place Interface
document.getElementById('addPlace').addEventListener('click', () => {
    const location = document.getElementById('placeLocation').value;
    const landmark = document.getElementById('placeLandmark').value;
    const place = new Place(location, landmark);
    places.push(place);


    const li = document.createElement('li');
    li.textContent = place.summary();
    document.getElementById('placeList').appendChild(li);
    console.log(`Place added to list`);
});

//To do interface
document.getElementById('addTask').addEventListener('click', () => {
    const desc = document.getElementById('taskDesc').value;
    const task = new Task(desc);
    tasks.push(task);

    const li = document.createElement('li');
    li.textContent = task.description;
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.onclick = () => {
        task.markDone();
        li.style.textDecoration = 'line-through';
        console.log(`Task marked done: ${task.description}`);
    };

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => {
        li.remove();
        console.log(`Task removed: ${task.description}`);
    };

    li.appendChild(doneBtn);
    li.appendChild(removeBtn);
    document.getElementById('taskList').appendChild(li);
    console.log(`Task added to list`);
});
    
