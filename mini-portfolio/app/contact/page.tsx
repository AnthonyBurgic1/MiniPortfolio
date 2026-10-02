"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {

    const router = useRouter();

    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });


    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    }


    function handleSubmit(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();

        setSubmitted(true);

        setTimeout(() => {
            router.push("/about");
        }, 4000);

    }


    return (
        <section className="page-section">

            <div className="page-heading">

                <p className="section-label">
                    CONTACT
                </p>

                <h1>
                    Let's connect.
                </h1>

                <p>
                    Fill out the form below to send me your contact
                    information and a short message.
                </p>

            </div>


            {submitted ? (

                <div className="confirmation">

                    <p className="section-label">
                        SUCCESS
                    </p>

                    <h2>
                        Thank you, {formData.name}!
                    </h2>

                    <p>
                        Your contact information has been submitted.
                    </p>

                    <div className="submitted-information">

                        <p>
                            <strong>Phone:</strong> {formData.phone}
                        </p>

                        <p>
                            <strong>Message:</strong> {formData.message}
                        </p>

                    </div>

                    <p>
                        You will be redirected to the About Me page shortly.
                    </p>

                </div>

            ) : (

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <label htmlFor="name">
                        Full Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />


                    <label htmlFor="phone">
                        Contact Number
                    </label>

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />


                    <label htmlFor="message">
                        Short Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message..."
                        rows={7}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />


                    <button
                        type="submit"
                        className="button button-primary"
                    >
                        Submit Message
                    </button>

                </form>

            )}

        </section>
    );
}