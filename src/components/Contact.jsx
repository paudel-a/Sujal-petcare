import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-green-950 py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
        {/* Contact information */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Let's Connect
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-green-100">
            Have questions about our products or want to learn more about
            Himalayan dog chews? Get in touch with our team.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-900">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-sm text-green-300">Email</p>
                <p>anishpaudel2060@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-900">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-sm text-green-300">Phone</p>
                <p>+977 9812345670</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-900">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-sm text-green-300">Location</p>
                <p>Nepal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 text-gray-900 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div className="mt-5">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="How can we help?"
              className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
            />

            {errors.message && (
              <p className="mt-2 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-green-900 px-6 py-3.5 font-semibold text-white transition hover:bg-green-800"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 text-center text-sm font-medium text-green-700">
              Thank you! Your message has been submitted.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
