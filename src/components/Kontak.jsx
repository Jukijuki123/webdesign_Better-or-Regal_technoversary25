"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const ContactSection = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setStatus({ type: "", message: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Nama wajib diisi.";
    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Format email tidak valid.";
    }
    if (!form.subject.trim()) newErrors.subject = "Subjek wajib diisi.";
    if (!form.message.trim()) newErrors.message = "Pesan tidak boleh kosong.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Untuk sekarang, hanya simulasi kirim
    console.log("Form contact:", form);

    setStatus({
      type: "success",
      message: "Pesan kamu sudah terkirim.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
    if (formRef.current) formRef.current.reset();
  };

  return (
    <section
      id="kontak"
      className="bg-gray-50 py-16 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        

        {/* Form + Info */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
          {/* Form kiri */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-primary-dark mb-2">
              Hubungi Kami
            </h3>
            <p className="text-xs md:text-sm text-gray-500 mb-6">
              Pelajari gimana sampah bisa punya nilai dan bantu bumi tetap bersih.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Nama + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-3 py-2.5 text-sm md:text-base bg-gray-50 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-400"
                        : "border-gray-200 focus:ring-primary-dark"
                    }`}
                    placeholder="Masukkan nama Anda"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-3 py-2.5 text-sm md:text-base bg-gray-50 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-400"
                        : "border-gray-200 focus:ring-primary-dark"
                    }`}
                    placeholder="Masukkan Email Anda"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-3 py-2.5 text-sm md:text-base bg-gray-50 focus:outline-none focus:ring-2 ${
                    errors.subject
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-200 focus:ring-primary-dark"
                  }`}
                  placeholder="Masukkan nomor Anda"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-3 py-2.5 text-sm md:text-base bg-gray-50 focus:outline-none focus:ring-2 resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-200 focus:ring-primary-dark"
                  }`}
                  placeholder="Tulis pesanmu di sini..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Status */}
              {status.message && (
                <p
                  className={`text-xs md:text-sm mt-1 ${
                    status.type === "success"
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {status.message}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-primary-dark text-white text-sm md:text-base font-semibold hover:bg-primary transition mt-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Kartu info kanan (pentagon hijau) */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="bg-linear-to-br from-primary-dark to-primary text-white rounded-2xl p-6 md:p-8 shadow-xl max-w-sm w-full flex flex-col justify-between">
              {/* Address */}
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Address</h3>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-5 h-5 mt-1 text-lime-300" />
                    <p>Bank Sampah Persatuan Jakarta, DKI Jakarta, Indonesia</p>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-lg font-semibold mb-1">Contact</h3>
                  <div className="flex items-start gap-3 text-sm mb-1">
                    <Phone className="w-5 h-5 mt-0.5 text-lime-300" />
                    <p>+62 857-0739-3495</p>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Mail className="w-5 h-5 mt-0.5 text-lime-300" />
                    <p>support@earthline.com</p>
                  </div>
                </div>

                {/* Open time */}
                <div>
                  <h3 className="text-lg font-semibold mb-1">Open Time</h3>
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="w-5 h-5 mt-0.5 text-lime-300" />
                    <p>
                      Monday - Friday: 08:00 - 16:00 <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6">
                <p className="text-sm font-medium mb-2">Stay Connected</p>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-full bg-lime-300 text-green-800 flex items-center justify-center shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Map embed di bawah */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl overflow-hidden shadow-md bg-gray-200"
        >
          <iframe
            title="EarthLine Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.522482133161!2d106.88473927499024!3d-6.194578793793093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f49532b5b715%3A0xa4012b68ec698d4e!2sSMK%20Negeri%2026%20Jakarta!5e0!3m2!1sid!2sid!4v1764164411238!5m2!1sid!2sid"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64 md:h-80 border-0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
