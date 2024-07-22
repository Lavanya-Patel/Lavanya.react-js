import React, { useState } from 'react';


const StudentForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        grade: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <div className="form-group">
                <label>
                    Full Name:
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Grade:
                    <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}>
                        <option value="Freshman">Select</option>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                        </select>
                </label>
            </div>
            <div className="form-group-gender">
                <label>
                    Gender:
                    <div  className='radio'>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                                required
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                                required
                            />
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={formData.gender === 'Other'}
                                onChange={handleChange}
                                required
                            />
                            Other
                        </label>
                    </div>
                </label>
            </div>
            <button type="submit"className="submit-button" >Submit</button>
        </form>
    );
};

export default StudentForm;