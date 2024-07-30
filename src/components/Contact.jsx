import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="p-4">
            <h2 className="text-2xl mb-4">Contact</h2>
            <form>
                <div className="mb-4">
                    <label className="block">Name</label>
                    <input type="text" className="w-full border p-2" />
                </div>
                <div className="mb-4">
                    <label className="block">Email</label>
                    <input type="email" className="w-full border p-2" />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded"
                >
                    Send
                </button>
            </form>
        </section>
    );
};

export default Contact;
