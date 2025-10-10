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
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (setter) => (event) => {
        setter(event.target.value);

        const field = event.target.name;
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };
      
    const validation = () => {
        const newErrors = {};
        if (!username.trim()) newErrors.username = 'The Username is required';
        if (!email.trim()) newErrors.email = 'The Email is required';
        if (!password) newErrors.password = 'The Password is required';
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
            await registerTheUser({ username, email, password });
            alert('Registration is a success!!!');
            setUsername('');
            setEmail('');
            setPassword('');
            setErrors({});
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
                    value={username}
                    onChange={handleChange}
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div>
        
            <div>
                <input 
                    name="email"
                    type="email"
                    placeholder="Input the Email"
                    value={email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
        
            <div>
                <input 
                    name="password"
                    type="password"
                    placeholder="Input the Password"
                    value={password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
        
            <button type="submit">Register Here</button>
        </form>
    );
}

export default RegistrationForm;