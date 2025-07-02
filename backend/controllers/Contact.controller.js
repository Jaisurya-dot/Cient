import Contact from "../models/contact.model.js";




// Create a new contact
export const createContact = async (req, res) => {
    const contact = req.body; // user will send this data

    if (!contact.name || !contact.email || !contact.phone || !contact.product || !contact.message) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newContact = new Contact(contact);

    try {
        await newContact.save();
        res.status(201).json({ success: true, data: newContact });
    } catch (error) {
        console.error("Error in Create contact:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Get all contacts
 
export const getContacts = async (req, res) => {
	try {
		const products = await Contact.find({});
		res.status(200).json({ success: true, data: products });
	} catch (error) {
		console.log("error in fetching products:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};



 
// Update a contact by ID
export const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a contact by ID
export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};