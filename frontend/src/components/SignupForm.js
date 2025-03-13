import { useState } from "react";
import { signupUser } from "../api/api";
import "./SignUpStyles.css";

function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signupUser(formData);
            setStatus(response.message);
            setFormData({ name: "", email: "", password: "" });
        } catch (error) {
            setStatus("Failed to sign up. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <h1>Create an Account</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <button type="submit">Sign Up</button>
                {status && <p className="status-message">{status}</p>}
            </form>
        </div>
    );
}

export default SignupForm;
