import { useState } from "react";
import { sendMessage } from "../api/api";
import "./ContactFormStyles.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await sendMessage(formData);
            setStatus(response.message);
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            setStatus("Failed to send message. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required />
                <button type="submit">Send Message</button>
                {status && <p className="status-message">{status}</p>}
            </form>
        </div>
    );
}

export default ContactForm;
