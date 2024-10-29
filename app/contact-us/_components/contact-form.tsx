'use client'
import React, { ChangeEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

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
    const [loading, setLoading] = useState(false); // Loading state

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

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
            toast.success(result.message || 'Email sent successfully!');
            // Reset form fields after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit} className='w-full'>
            <Toaster position="top-center" reverseOrder={false} />
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
            <button type="submit" className='bg-[#174C81] text-white px-6 py-2 rounded' disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
            </button>
        </form>
    )
}

export default ContactForm