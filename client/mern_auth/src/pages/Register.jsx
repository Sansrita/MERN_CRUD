import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        how_hear: [],
        city: '',
        state: ''
    });

    const { name, email, phone, gender, how_hear, city, state } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify(formData);
            await axios.post('YOUR_API_URL', body, config);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (how_hear.includes(value)) {
            setFormData({ ...formData, how_hear: how_hear.filter((item) => item !== value) });
        } else {
            setFormData({ ...formData, how_hear: [...how_hear, value] });
        }
    };

    return (
        <div className="signup-screen">
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name: </label>
                <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required />
                </div>
                <div>
                <label>Email: </label>                
                <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
                </div>
                <div>
                <label>Phone Number: </label>
                <input type="text" name="phone" value={phone} onChange={handleChange} placeholder="Phone" required />               
                </div>
                <div>
                <label>Gender: </label>
                <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleChange} />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleChange} />
                <label htmlFor="female">Female</label>
                <input type="radio" name="gender" value="others" checked={gender === 'others'} onChange={handleChange} />
                <label htmlFor="others">Others</label>
                </div>
                
                <div>
                    <label>How did you hear about this? </label>
                    <input type="checkbox" name="how_hear" value="LinkedIn" checked={how_hear.includes('LinkedIn')} onChange={handleCheckboxChange} />
                    <label htmlFor="LinkedIn">LinkedIn</label>
                    <input type="checkbox" name="how_hear" value="Friends" checked={how_hear.includes('Friends')} onChange={handleCheckboxChange} />
                    <label htmlFor="Friends">Friends</label>
                    <input type="checkbox" name="how_hear" value="Job Portal" checked={how_hear.includes('Job Portal')} onChange={handleCheckboxChange} />
                    <label htmlFor="Job Portal">Job Portal</label>
                    <input type="checkbox" name="how_hear" value="Others" checked={how_hear.includes('Others')} onChange={handleCheckboxChange} />
                    <label htmlFor="Others">Others</label>
                </div>
                <div>
                    <label>City</label>
                    <select name="city" value={city} onChange={handleChange}>
                    <option value="">--Select City--</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                </select></div>
                <div>
                    <lable>State</lable>
                <input type="text" name="state" value={state} onChange={handleChange} placeholder="State" list="states" required />
                <datalist id="states">
                    <option value="Gujarat">Gujarat</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                </datalist>
                </div>
                
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default Register;