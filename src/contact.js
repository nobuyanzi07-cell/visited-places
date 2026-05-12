function Contact(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;

    console.log(`Contact created: ${this.name} (${this.phone}, ${this.email})`);
}

Contact.prototype.updatePhone = function(newPhone) {
    console.log(`Updating phone for ${this.name} from ${this.phone} to ${newPhone}`);
    this.phone = newPhone;
    console.log(`Phone updated for ${this.name}: ${this.phone}`);
};

Contact.prototype.display = function() {
    const info = `${this.name} - ${this.phone} - ${this.email}`;
    console.log(`Contact info: ${this.name} ${info}`);
    return info;
}

module.exports = Contact;