import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({
    name: '',
    gmail: '',
    phone: '',
    message: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
    setForm({ name: '', gmail: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">My Contact Form</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="gmail">
            Gmail
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="gmail"
            name="gmail"
            value={form.gmail}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="phone">
            Phone
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
