// contact
function Contact(name, Phone, email) {
    this.name = name;
    this.phone = Phone;
    this.email = email;
    console.log(`Contact created: ${name} - ${phone} - ${email}`);
}

Contact.prototype.updatePhone = function(newPhone) {
    console.log(`Displaying contact: ${this.name}`);
    return `${this.name} - ${this.phone} - ${this.email}`;
};

//AddressBook
function AddressBook() {
    this.contacts = [];
    console.log('AddressBook initialized');
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
    console.log(`Contact added to AddressBook: ${contact.name}`);;
};

//place
function Place(location, landmark) {
    this.location = location;
    this.landmark = landmark;
    console.log(`Place created: ${this.location}, ${this.landmark}`);
}

Place.prototype.summary = function() {
    console.log(`Summarizing place: ${this.location}`);
    return `${this.location} is located in ${this.landmark}`;
};

//task
function Task(description) {
    this.description = description;
    this.done = false;
    console.log(`Task created: ${this.description}`);
}

Task.prototype.markDone = function() {
    this.done = true;
    console.log(`Task marked done: ${this.description}`);
};

// managers
const book = new AddressBook();
const places = [];
const tasks = [];

//Address book interface
document.getElementById('add-contact').addEventListener('click', () => {
    const name = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;
    const email = document.getElementById('contact-email').value;
    const contact = new Contact(name, phone, email);
    book.addContact(contact);
    const li = document.createElement('li');
    li.textContent = contact.display();
    document.getElementById('contact-list').appendChild(li);
    console.log(`Contact added to list`);
});

//Place Interface
document.getElementById('add-place').addEventListener('click', () => {
    const location = document.getElementById('place-location').value;
    const landmark = document.getElementById('place-landmark').value;
    const place = new Place(location, landmark);
    places.push(place);


    const li = document.createElement('li');
    li.textContent = place.summary();
    document.getElementById('place-list').appendChild(li);
    console.log(`Place added to list`);
});

//To do interface
document.getElementById('add-task').addEventListener('click', () => {
    const desc = document.getElementById('task-desc').value;
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
    document.getElementById('task-list').appendChild(li);
    console.log(`Task added to list`);
});
    
