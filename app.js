// Contact
function Contact(name, phone, email) {
  this.name = name;
  this.phone = phone;
  this.email = email;
}
Contact.prototype.display = function() {
  return `${this.name} - ${this.phone} - ${this.email}`;
};

// AddressBook
function AddressBook() {
  this.contacts = [];
}
AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};
AddressBook.prototype.findContact = function(name) {
  return this.contacts.find(c => c.name === name);
};
AddressBook.prototype.removeContact = function(name) {
  this.contacts = this.contacts.filter(c => c.name !== name);
};

// Place 
function Place(location, landmarks) {
  this.location = location;
  this.landmarks = landmarks;
}
Place.prototype.summary = function() {
  return `${this.location}: ${this.landmarks.join(", ")}`;
};

// Task
function Task(description) {
  this.description = description;
  this.done = false;
}
Task.prototype.markDone = function() {
  this.done = true;
};

// Managers
const book = new AddressBook();
const places = [];
const tasks = [];

// Attach UI logic after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  // Address Book UI
  document.getElementById("add-contact").addEventListener("click", () => {
    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const email = document.getElementById("contact-email").value.trim();

    if (!name || !phone || !email) {
      alert("Please fill all contact fields");
      return;
    }

    const contact = new Contact(name, phone, email);
    book.addContact(contact);

    const li = document.createElement("li");
    li.textContent = contact.display();
    document.getElementById("contact-list").appendChild(li);
    console.log("Contact added:", contact.display());
  });

  // Places UI (no season/notes)
  document.getElementById("add-place").addEventListener("click", () => {
    const location = document.getElementById("place-location").value.trim();
    const landmarks = document.getElementById("place-landmarks").value.split(",").map(l => l.trim()).filter(l => l);

    if (!location) {
      alert("Location is required");
      return;
    }

    const place = new Place(location, landmarks);
    places.push(place);

    const li = document.createElement("li");
    li.textContent = place.summary();
    document.getElementById("place-list").appendChild(li);
    console.log("Place added:", place.summary());
  });

  // To Do UI
  document.getElementById("add-task").addEventListener("click", () => {
    const desc = document.getElementById("task-desc").value.trim();
    if (!desc) {
      alert("Task description required");
      return;
    }

    const task = new Task(desc);
    tasks.push(task);

    const li = document.createElement("li");
    li.textContent = task.description;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.onclick = () => {
      task.markDone();
      li.style.textDecoration = "line-through";
      console.log(`Task completed: ${task.description}`);
    };

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
      li.remove();
      console.log(`Task removed: ${task.description}`);
    };

    li.appendChild(doneBtn);
    li.appendChild(removeBtn);
    document.getElementById("task-list").appendChild(li);
    console.log("Task added:", task.description);
  });
});
