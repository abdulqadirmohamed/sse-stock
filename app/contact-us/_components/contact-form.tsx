'use client'
import React, { ChangeEvent, useState } from 'react'

// Define a type for the form data
interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}
const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to send email');
            }

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error:', error);
            //   alert(`Error: ${error.message}`);
        }
    };
    return (
        <form onSubmit={handleSubmit} className='w-full'>
            <input type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Name*' className='border px-4 py-2 w-full outline-0 my-2' required />

            <input type="email"
                name='email'
                value={formData.email}
                onChange={handleChange} placeholder='Email*' className='border px-4 py-2 w-full outline-0 my-2' required />

            <input type="tel"
                name='phone'
                value={formData.phone}
                onChange={handleChange} placeholder='Phone' className='border px-4 py-2 w-full outline-0 my-2' />

            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange} placeholder='Message' className='border px-4 py-2 w-full outline-0 my-3' required></textarea>
            <button type="submit" className='bg-blue-800 text-white px-6 py-2 rounded'>Send</button>
        </form>
    )
}

export default ContactForm