"use client";

import Image from "next/image";
import { useState } from "react";
import { MessageCircle, User, UserCheck } from "lucide-react";

export default function Home() {
  const navItems = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Layanan Kami", href: "#layanan-kami" },
    { name: "Klien", href: "#klien" },
  ];

  const types = [
    {
      id: "A",
      price: "1.3Jt",
      fullPrice: "Rp. 1.300.000",
      image: "/images/menu_1-service.png",
      images: [
        "/images/menu_1-service.png",
        "/images/menu_1-service.png",
        "/images/menu_1-service.png",
        "/images/menu_1-service.png",
      ],
      features: [
        "Dipan Susun",
        "Kamar Mandi Dalam",
        "Lemari",
        "AC",
        "Kipas Angin",
        "Smart TV",
      ],
      fasilitasUmum: [
        "Dapur Umum",
        "Balkon",
        "Parkir Motor",
        "Tempat Menjemur Pakaian",
        "CCTV 24 Jam",
        "Dan Masih Banyak Yang Lain",
      ],
    },
    {
      id: "B",
      price: "1.25Jt",
      fullPrice: "Rp. 1.250.000",
      image: "/images/menu_2-service.png",
      images: [
        "/images/menu_2-service.png",
        "/images/menu_2-service.png",
        "/images/menu_2-service.png",
        "/images/menu_2-service.png",
      ],
      features: [
        "Dipan Susun",
        "Kamar Mandi Dalam",
        "Lemari",
        "AC",
        "Smart TV",
      ],
      fasilitasUmum: [
        "Dapur Umum",
        "Balkon",
        "Parkir Motor",
        "Tempat Menjemur Pakaian",
        "CCTV 24 Jam",
        "Dan Masih Banyak Yang Lain",
      ],
    },
    {
      id: "C",
      price: "1.2Jt",
      fullPrice: "Rp. 1.200.000",
      image: "/images/menu_3-service.png",
      images: [
        "/images/menu_3-service.png",
        "/images/menu_3-service.png",
        "/images/menu_3-service.png",
        "/images/menu_3-service.png",
      ],
      features: [
        "Dipan Susun",
        "Kamar Mandi Dalam",
        "Lemari",
        "AC",
        "Kipas Angin",
      ],
      fasilitasUmum: [
        "Dapur Umum",
        "Balkon",
        "Parkir Motor",
        "Tempat Menjemur Pakaian",
        "CCTV 24 Jam",
        "Dan Masih Banyak Yang Lain",
      ],
    },
    {
      id: "D",
      price: "1.15Jt",
      fullPrice: "Rp. 1.150.000",
      image: "/images/menu_4-service.png",
      images: [
        "/images/menu_4-service.png",
        "/images/menu_4-service.png",
        "/images/menu_4-service.png",
        "/images/menu_4-service.png",
      ],
      features: [
        "Dipan Susun",
        "Kamar Mandi Dalam",
        "Lemari",
        "Kipas Angin",
        "Smart TV",
      ],
      fasilitasUmum: [
        "Dapur Umum",
        "Balkon",
        "Parkir Motor",
        "Tempat Menjemur Pakaian",
        "CCTV 24 Jam",
        "Dan Masih Banyak Yang Lain",
      ],
    },
  ];

  // Modal State
  const [selectedType, setSelectedType] = useState<(typeof types)[0] | null>(
    null,
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (type: (typeof types)[0]) => {
    setSelectedType(type);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedType(null);
  };

  return (
    <main className="w-full bg-[#111115] font-sans text-white overflow-x-hidden relative">
      {/* Home */}
      <section className="relative min-h-screen flex flex-col items-center justify-start w-full bg-[url('/images/bg-home.png')] bg-cover bg-center">
        {/* Navbar */}
        <nav className="w-full mx-auto px-24 max-w-11/12 flex justify-between items-center z-50 ">
          <div className="w-72 relative h-32 py-3 ">
            <Image
              src="/images/logo.png"
              alt="Griya Kost DNA Logo"
              fill
              // sizes="(max-width: 768px) 100vw, 200px"
              priority
              className="object-contain object-left drop-shadow-md pt-3"
            />
          </div>
          <div className="hidden md:flex gap-4 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="bg-white text-gray-900 hover:bg-gray-100 transition-colors px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm font-semibold text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Content */}
        <div className="w-full max-w-11/12  px-6 flex-1 flex flex-col md:flex-row items-center justify-between z-10 pb-20 relative">
          <div className="flex flex-col items-start gap-4 max-w-2xl pt-10 md:pt-0 lg:pl-12">
            <h2 className="text-3xl md:text-2xl lg:text-3xl font-medium text-white/90 font-vanilla">
              Siapa itu
            </h2>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
              GRIYA KOST <br /> DNA{" "}
              <span className="text-5xl md:text-7xl lg:text-8xl text-pink-400">
                ?
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-200 mt-4 md:mt-6 leading-relaxed font-medium max-w-xl">
              Griya Kost DNA adalah tempat hunian kos khusus putri yang
              menyediakan kamar dengan fasilitas lengkap, lingkungan yang aman,
              dan harga yang terjangkau.
            </p>
            <a
              href="#layanan-kami"
              className="inline-block mt-6 md:mt-8 bg-white text-gray-900 hover:bg-gray-100 transition-all px-8 py-4 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              Lihat Lebih Banyak
            </a>
          </div>

          {/* Section Kanan - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[620px] w-1/3 hidden md:flex items-center justify-center md:justify-end">
            <div className="relative w-full h-full">
              <Image
                src="/images/card-home.png"
                alt="Griya Kost Cards"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Discover More */}
        {/* <a
          href="#layanan-kami"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-10 hover:opacity-80 transition-opacity"
        >
          <span className="text-sm text-gray-300 font-medium">
            Discover more
          </span>
          <div className="w-4 h-8 relative">
            <Image
              src="/images/discovermore-home.png"
              alt="Scroll Down"
              fill
              className="object-contain animate-bounce"
            />
          </div>
        </a> */}
      </section>

      {/* About Us */}
      <section
        id="tentang-kami"
        className="w-full relative px-6 md:px-12 py-16 md:py-24 min-h-screen flex flex-col justify-center bg-[url('/images/bg-aboutus.png')] bg-cover bg-center"
      >
        <div className="w-full max-w-7xl mx-auto z-10">
          {/* Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-center mb-16 md:mb-24 font-extrabold text-white drop-shadow-lg">
            Tentang Kami
          </h2>

          {/* Content */}
          <div className="flex flex-col gap-12 md:gap-20">
            {/* Row 1 - Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-5/3 -rotate-2 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl">
                  <Image
                    src="/images/cardleft-aboutus.png"
                    fill
                    className="object-contain"
                    alt="Griya Kost DNA - Tampak Depan"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:bg-white/10 transition-colors duration-300">
                  <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-medium">
                    Griya Kost DNA adalah kos putri yang dirancang untuk
                    memberikan tempat tinggal yang nyaman, aman, dan terjangkau
                    bagi mahasiswa maupun pekerja. Dengan bangunan dua lantai
                    dan berbagai fasilitas penunjang, Griya Kost DNA hadir
                    sebagai pilihan hunian yang praktis dan nyaman.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 - Text Left, Image Right */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              {/* Text */}
              <div className="w-full md:w-1/2">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:bg-white/10 transition-colors duration-300">
                  <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-medium">
                    Kami menyediakan beberapa tipe kamar yang dapat disesuaikan
                    dengan kebutuhan penghuni. Lingkungan yang bersih, fasilitas
                    yang memadai, serta sistem keamanan seperti CCTV menjadikan
                    Griya Kost DNA tempat tinggal yang ideal untuk beristirahat
                    dan menjalani aktivitas sehari-hari.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-5/3 rotate-2 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl">
                  <Image
                    src="/images/cardright-aboutus.png"
                    fill
                    className="object-contain"
                    alt="Griya Kost DNA - Fasilitas"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section
        id="layanan-kami"
        className="w-full relative px-6 py-24 min-h-screen flex flex-col justify-center bg-[url('/images/bg-service.png')] bg-cover "
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] -z-10"></div>
        <div className="w-full max-w-screen-2xl mx-auto z-10">
          <h2 className="text-4xl md:text-[4rem] text-center mb-20 font-extrabold drop-shadow-md z-10">
            Layanan Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-10 ">
            {types.map((type) => (
              <div
                key={type.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-2 flex flex-col pb-5 gap-4 shadow-2xl hover:bg-white/10 transition-colors duration-300"
              >
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-inner">
                  <Image
                    src={type.image}
                    fill
                    className="object-contain p-2"
                    alt={`Tipe ${type.id}`}
                  />
                </div>
                <div className="px-3 flex-1 flex flex-col ">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 font-mono tracking-tight text-gray-100">
                    Tipe {type.id} - {type.price}/Bulan
                  </h3>
                  <ul className="text-sm text-gray-300 space-y-2 mb-8 font-mono flex-1">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-400 rounded-full shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openModal(type)}
                    className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-6 py-3 rounded-full text-sm shadow-md transition-transform hover:scale-105 active:scale-95 w-max"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Klien Section */}
      <section
        id="klien"
        className="w-full relative px-6 md:px-12 py-16 md:py-24 min-h-screen flex flex-col justify-center bg-[url('/images/bg-client.png')] bg-cover bg-center"
      >
        <div className="w-full max-w-7xl mx-auto z-10">
          <div className="flex flex-col items-center md:items-start gap-8 md:gap-12">
            {/* Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white text-center md:text-left drop-shadow-lg">
              Klien
            </h2>

            {/* Stats Cards */}
            <div className="flex flex-col gap-6 md:gap-8 w-full max-w-2xl">
              {/* Card 1 - Penghuni Saat Ini */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 flex items-center justify-between shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-14 h-14 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center">
                    <User
                      color="#0D81FF"
                      className="w-full h-full"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-sm md:text-xl font-black text-white leading-tight tracking-wide">
                    PENGHUNI
                    <br className="md:hidden" /> SAAT INI
                  </h3>
                </div>
                <span className="text-4xl md:text-6xl font-extrabold text-white tabular-nums">
                  13
                </span>
              </div>

              {/* Card 2 - Total yang Berpenghuni */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 flex items-center justify-between shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-14 h-14 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center">
                    <UserCheck
                      color="#0D81FF"
                      className="w-full h-full"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-sm md:text-xl font-black text-white leading-tight tracking-wide">
                    TOTAL YANG
                    <br className="md:hidden" /> BERPENGHUNI
                  </h3>
                </div>
                <span className="text-4xl md:text-6xl font-extrabold text-white tabular-nums">
                  22
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section
        id="social-media"
        className="w-full relative px-6 py-24 min-h-screen flex flex-col justify-center bg-[url('/images/bg-socmed.png')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] -z-10"></div>
        <div className="w-full max-w-5xl mx-auto z-10">
          <h2 className="text-4xl md:text-[4rem] text-center mb-16 font-extrabold drop-shadow-md z-10">
            Our Social Media
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="flex flex-col gap-6">
              {/* Tiktok Card */}
              <a
                href="https://www.tiktok.com/@griya.kost.dna"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 flex items-center gap-4 md:gap-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-black/40 shrink-0 group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <Image
                      src="/images/tiktok-socmed.png"
                      fill
                      className="object-contain p-2"
                      alt="TikTok"
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs sm:text-sm md:text-base text-gray-200 font-mono truncate hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
                    https://www.tiktok.com/
                    <br />
                    @griya.kost.dna
                  </p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/griyakostdna/"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 flex items-center gap-4 md:gap-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-black/40 shrink-0 group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <Image
                      src="/images/instagram-socmed.png"
                      fill
                      className="object-contain p-2"
                      alt="Instagram"
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs sm:text-sm md:text-base text-gray-200 font-mono truncate hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
                    https://www.instagram.com/
                    <br />
                    griyakostdna/
                  </p>
                </div>
              </a>
            </div>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/6285336970707"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group h-full min-h-[250px]"
            >
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden bg-black/40 group-hover:scale-110 transition-transform shrink-0">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image
                    src="/images/whatsapp-socmed.png"
                    fill
                    className="object-contain p-4 md:p-6"
                    alt="WhatsApp"
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-base sm:text-lg md:text-xl text-gray-200 font-mono hover:text-white transition-colors underline decoration-white/30 underline-offset-4 leading-relaxed">
                  wa.me/
                  <br />
                  +6285336970707
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0a0a0c] border-t border-white/5 py-8 px-6 text-center z-10 relative">
        <p className="text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Griya Kost DNA. All rights reserved.
        </p>
      </footer>

      {/* Detail Modal Overlay */}
      {selectedType && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 overflow-y-auto">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative w-full max-w-4xl bg-[#1a1a20] rounded-3xl shadow-2xl border border-white/10 my-8">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="flex flex-col md:flex-row p-6 md:p-8 gap-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {/* Left Side: Images */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Main Large Image */}
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg bg-black/30 border border-white/5">
                  <Image
                    src={selectedType.images[selectedImageIndex]}
                    fill
                    className="object-cover"
                    alt={`Main View ${selectedType.id}`}
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {selectedType.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-full aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImageIndex === idx
                          ? "border-pink-400 scale-105 shadow-lg"
                          : "border-transparent hover:border-gray-500"
                      }`}
                    >
                      <Image
                        src={img}
                        fill
                        className="object-cover"
                        alt={`Thumbnail ${idx + 1}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Side: Info */}
              <div className="flex-1 md:flex-[1.2] flex flex-col">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 font-sans tracking-tight">
                  Kamar Tipe {selectedType.id}
                </h3>
                <p className="text-lg md:text-xl font-mono text-gray-300 mb-8">
                  {selectedType.fullPrice} / Bulan
                </p>

                <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-10">
                  {/* Fasilitas Pribadi */}
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-4 text-white">
                      Fasilitas Pribadi
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-3 font-mono">
                      {selectedType.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1.5 shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fasilitas Umum */}
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-4 text-white">
                      Fasilitas Umum
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-3 font-mono">
                      {selectedType.fasilitasUmum.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1.5 shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/+6285336970707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-white text-gray-900 hover:bg-green-50 hover:text-green-700 transition-colors px-6 py-4 rounded-xl font-bold text-sm shadow-xl flex items-center justify-center gap-3 w-full border border-gray-200"
                >
                  <div className="relative w-6 h-6 shrink-0">
                    <MessageCircle color="green" />
                  </div>
                  Pesan Sekarang Melalui Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
