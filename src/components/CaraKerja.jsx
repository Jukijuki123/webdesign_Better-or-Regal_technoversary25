"use client";
import React from "react";
import { motion } from "framer-motion";

// Ganti path & nama file sesuai asetmu
import step1Img from "../assets/img/checkBox.png";
import step2Img from "../assets/img/mobileBox.png";
import step3Img from "../assets/img/truckBox.png";
import step4Img from "../assets/img/transaksi.png";

const steps = [
  {
    id: 1,
    title: "Kumpulkan Sampah di Rumah",
    desc: "Pisahkan sampah plastik, kertas, logam, dan kaca agar tidak tercampur dan mudah ditimbang. Pemilahan awal membantu menjaga kualitas daur ulang.",
    img: step1Img,
  },
  {
    id: 2,
    title: "Isi Detail Tukar Sampah",
    desc: "Isi detail sampah yang ingin kamu jual lalu pilih lokasi untuk menemukan bank sampah terdekat. Pastikan jam operasionalnya sebelum berangkat.",
    img: step2Img,
  },
  {
    id: 3,
    title: "Antar Sampah ke Lokasi",
    desc: "Datangi langsung tempat pengepul pilihanmu. Kamu bebas menentukan waktu pengantaran agar lebih fleksibel dan cepat.",
    img: step3Img,
  },
  {
    id: 4,
    title: "Timbang & Dapatkan Uang",
    desc: "Serahkan sampah, tunggu ditimbang, lalu tunjukkan bukti penjualan untuk menerima uang. Tanpa akun, cukup isi detail penukaran.",
    img: step4Img,
  },
];

const CaraKerjaSection = () => {
  return (
    <section id="carakerja" className="bg-white py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-3"
        >
          Cara <span className="text-primary">Kerja Sistem</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-abu max-w-3xl mx-auto mb-16"
        >
          Sistem kami dirancang agar pengelolaan sampah menjadi lebih efisien,
          transparan, dan berdampak positif bagi lingkungan.
        </motion.p>

        {/* Grid langkah */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-14 md:gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 3 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center md:w-1/4 z-10"
              >
                {/* Gambar */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-primary-light rounded-2xl shadow-sm mb-6">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>

                {/* Judul */}
                <h3 className="text-lg font-semibold text-primary-dark mb-3">
                  {step.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-sm text-gray-600 leading-relaxed max-w-[260px]">
                  {step.desc}
                </p>
              </motion.div>

              {/* Garis penghubung (bukan pada step terakhir) */}
              {index !== steps.length - 1 && (
                <>
                  {/* Horizontal line (desktop) */}
                  <div className="hidden md:block absolute top-[70px] left-0 right-0 h-[3px] bg-linear-to-r from-green-500 to-orange-400 rounded-full z-0" />

                  {/* Vertical line (mobile) */}
                  <div className="md:hidden w-[3px] h-12 bg-linear-to-b from-green-500 to-orange-400 rounded-full -mt-6 mb-4"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaraKerjaSection;