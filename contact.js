// Store contacts in an array
let contacts = [];

// Function to add a contact
function addContact(name, phone, email) {
    contacts.push({
        name: name,
        phone: phone,
        email: email
    });
}

// Function to search by name
function searchContact(name) {
    return contacts.find(contact =>
        contact.name.toLowerCase() === name.toLowerCase()
    );
}

// Function to list contacts alphabetically
function listContacts() {
    let sortedContacts = [...contacts].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    sortedContacts.forEach(contact => {
        console.log(
            `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
        );
    });
}

// Add 5 contacts
addContact("Victor", "08126478217", "bigv@gmail.com");
addContact("Solomon", "08084127894", "solomon@gmail.com");
addContact("Grace", "09047812547", "grace@gmail.com");
addContact("Joy", "09154781204", "joy@gmail.com");
addContact("Blessing", "07061178415", "blessing@gmail.com");

// List all contacts alphabetically
console.log("All Contacts:");
listContacts();

// Search for a contact
console.log("Search Result:");
console.log(searchContact("Joy"));