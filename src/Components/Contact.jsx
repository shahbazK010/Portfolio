import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

export function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
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
      )
      .then(() => {
        setLoading(false);
        setSuccessMessage(
          "Thank you for your message. I will get back to you soon!"
        );
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3 seconds
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setSuccessMessage("Something went wrong. Please try again.");
        setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3 seconds
      });
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
          <label className="text-white font-medium mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-[#1d2d4f] py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white font-medium mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-[#1d2d4f] py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white font-medium mb-2">Your Message</label>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What would you like to say?"
            className="bg-[#1d2d4f] py-4 px-6 text-white rounded-lg outline-none border-none font-medium resize-none"
            required
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

      {/* Success Message */}
      {successMessage && (
        <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white text-center py-4">
          {successMessage}
        </div>
      )}
    </section>
  );
}
