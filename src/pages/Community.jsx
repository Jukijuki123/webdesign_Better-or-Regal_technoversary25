"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// import Footer yang sudah kamu buat sebelumnya
import Footer from "../components/Footer";

// ganti path gambar sesuai asetmu
import komunitas1Img from "../assets/img/horizontal1.jpg";
import komunitas2Img from "../assets/img/horizontal2.jpg";
// kalau mau tambah card lagi, tinggal import & tambahkan di array

const communities = [
  {
    id: 1,
    title: "Sampah Bernilai Hub",
    description:
      "Komunitas seru tempat kita belajar cara nyulap sampah jadi cuan. Di sini, yang dibuang bukan cuma mantan—tapi juga sampah yang bisa dijual lagi!",
    image: komunitas1Img,
    link: "https://example.com/sampah-bernilai", // ganti link komunitas
  },
  {
    id: 2,
    title: "Jago Jual Sampah",
    description:
      "Tempat nongkrongnya para pejuang cuan dari sampah. Kita bareng-bareng belajar cara mindahin sampah dari tong ke dompet!",
    image: komunitas2Img,
    link: "https://example.com/jago-jual", // ganti link komunitas
  },
  {
    id: 3,
    title: "Jago Jual Sampah",
    description:
      "Tempat nongkrongnya para pejuang cuan dari sampah. Kita bareng-bareng belajar cara mindahin sampah dari tong ke dompet!",
    image: komunitas2Img,
    link: "https://example.com/jago-jual", // ganti link komunitas
  },
  {
    id: 4,
    title: "Jago Jual Sampah",
    description:
      "Tempat nongkrongnya para pejuang cuan dari sampah. Kita bareng-bareng belajar cara mindahin sampah dari tong ke dompet!",
    image: komunitas2Img,
    link: "https://example.com/jago-jual", // ganti link komunitas
  },

];

const CommunityPage = () => {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#06551B]">
      {/* SECTION ATAS: header + cards */}
      <main className="flex-1">
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-4 pb-16 text-white">
          {/* Tombol back */}
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6"
            aria-label="Kembali"
          >
            <ArrowLeft className="w-6 h-6" />
            <span className="text-sm hidden sm:inline">Kembali</span>
          </button>

          {/* Header text */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-semibold"
            >
              Selamat datang!
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-1"
            >
              Komunitas <span className="text-lime-300">EARTHLINE</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-3 text-sm md:text-base text-gray-100 leading-relaxed"
            >
              Selamat datang di komunitas yang peduli lingkungan. Di sini, kita
              belajar, berbagi, dan bergerak bersama untuk mengelola sampah
              dengan lebih bijak.
            </motion.p>
          </div>

          {/* Cards: horizontal scroll */}
          <div className="mt-10">
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6 md:gap-8 min-w-max">
                {communities.map((community, index) => (
                  <motion.div
                    key={community.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="bg-white rounded-3xl shadow-lg w-[280px] sm:w-[320px] md:w-[360px] shrink-0 overflow-hidden"
                  >
                    {/* gambar */}
                    <div className="h-40 md:h-44 overflow-hidden">
                      <img
                        src={community.image}
                        alt={community.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* isi card */}
                    <div className="px-5 py-5 flex flex-col gap-3">
                      <h2 className="text-lg md:text-xl font-extrabold text-emerald-800 text-center">
                        {community.title}
                      </h2>
                      <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                        {community.description}
                      </p>

                      <div className="mt-2 flex justify-center">
                        <motion.a
                          href={community.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center justify-center min-w-[130px] rounded-full bg-[#3E7F35] text-white text-sm font-semibold px-6 py-2 shadow-md hover:bg-[#356d2d] transition"
                        >
                          Gabung
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER DI BAWAH */}
      <Footer />
    </div>
  );
};

export default CommunityPage;
