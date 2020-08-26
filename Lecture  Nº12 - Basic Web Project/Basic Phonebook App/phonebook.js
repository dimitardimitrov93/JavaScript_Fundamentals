const phonebook= [];

const addContact = contact => {
	phonebook.push(contact);
};

const getPhonebook = () => {
	return phonebook;
};

module.exports = {
	getPhonebook,
	addContact
};