import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

export function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_0snbu97",
        "template_yl6ixae",
        {
          from_name: form.name,
          to_name: "Your Name",
          from_email: form.email,
          to_email: "sahabazkhan.7771@gmail.com",
          message: form.message,
        },
        "wNkfa980x2Fj4stzS"
      );
      showMessage("Thank you for your message. I will get back to you soon!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      showMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto relative z-0">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
        <p className="text-gray-400 text-lg">Get in touch</p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 max-w-2xl mx-auto"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-[#1d2d4f] py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            required
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-[#1d2d4f] py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            required
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-white font-medium mb-2">
            Your Message
          </label>
          <textarea
            rows={7}
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What would you like to say?"
            className="bg-[#1d2d4f] py-4 px-6 text-white rounded-lg outline-none border-none font-medium resize-none"
            required
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:bg-[#784cd4] transition-colors flex items-center gap-2"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
          <Send size={20} />
        </button>
      </form>

      {/* Translucent Success Message */}
      {successMessage && (
        <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4">
          {successMessage}
        </div>
      )}
    </section>
  );
}
