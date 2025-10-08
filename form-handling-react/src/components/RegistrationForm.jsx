import { useState } from "react";

const registerTheUser = async (userData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('User has been registered:', userData);
            resolve({ success: true });
        }, 500);
    });
};

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validation = () => {
        const newErrors = {};
        if (!formData.username.trim()) newErrors.username = 'The Username is required';
        if (!formData.email.trim()) newErrors.email = 'The Email is required';
        if (!formData.password) newErrors.password = 'The Password is required';
        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validation();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            await registerTheUser(formData);
            alert('Registration is a success!!!');
            setFormData({ username: '', email: '', password: '' });
        } catch (err) {
            alert('Registration Failure')
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h2>Register (Controlled Components)</h2>
        
            <div>
                <input 
                    name="username"
                    placeholder="Input the Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div>
        
            <div>
                <input 
                    name="email"
                    type="email"
                    placeholder="Input the Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
        
            <div>
                <input 
                    name="password"
                    type="password"
                    placeholder="Input the Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
        
            <button type="submit">Register Here</button>
        </form>
    );
}

export default RegistrationForm;