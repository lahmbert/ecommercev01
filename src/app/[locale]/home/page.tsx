'use client';
import Navbar from '@/components/Navbar';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../globals.css';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Jumlah slide yang ada
  const t = useTranslations('HomePage');

  // Fungsi untuk pindah ke slide tertentu
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Fungsi untuk pindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Fungsi untuk pindah ke slide sebelumnya
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-pindah slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik

    // Bersihkan interval ketika komponen dibersihkan
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <section>
        <div
          id="default-carousel"
          className="relative w-full sm:h-[87vh] px-4 top-2 sm:top-0 sm:px-0"
        >
          {/* Carousel wrapper */}
          <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[87vh] duration-700 overflow-hidden rounded-lg">
            {[...Array(totalSlides)].map((_, index) => (
              <div
                className={`duration-700 ease-in-out ${
                  currentSlide === index ? 'block' : 'hidden'
                }`}
                key={index}
              >
                <img
                  src={`/img/carousel-0${index + 1}.webp`}
                  className="absolute block w-full h-full object-cover duration-700 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-green-500' : 'bg-white'
                }`}
                aria-current={currentSlide === index ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Slider controls */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
      <section className="sm:h-[87vh] flex flex-col justify-start sm:px-[12rem] text-center py-10 relative">
        <div className="relative w-full px-4 flex items-center">
          {/* Horizontal Line */}
          <div className="w-full h-[0.1rem] bg-gray-400"></div>

          {/* Title */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white px-4">
            <div className="sm:text-2xl text-lg font-extrabold capitalize">
              shop our top categories
            </div>
          </div>
        </div>
        <div className="py-14 sm:flex flex-row grid grid-cols-2 mx-4 sm:mx-0 gap-2 justify-around">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Categories%20T-shirt.cb20e956.webp"
              className="sm:w-[20rem]"
              alt="gambar-1"
            />
            <label className="text-3xl font-extrabold mt-4">T-Shirt</label>
            <p className="mt-5 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              itaque quos quod atque voluptate.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Categories%20T-shirt.cb20e956.webp"
              className="sm:w-[20rem]"
              alt="gambar-1"
            />
            <label className="text-3xl font-extrabold mt-4">T-Shirt</label>
            <p className="mt-5 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              itaque quos quod atque voluptate.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Categories%20T-shirt.cb20e956.webp"
              className="sm:w-[20rem]"
              alt="gambar-1"
            />
            <label className="text-3xl font-extrabold mt-4">T-Shirt</label>
            <p className="mt-5 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              itaque quos quod atque voluptate.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Categories%20T-shirt.cb20e956.webp"
              className="sm:w-[20rem]"
              alt="gambar-1"
            />
            <label className="text-3xl font-extrabold mt-4">T-Shirt</label>
            <p className="mt-5 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              itaque quos quod atque voluptate.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-start sm:px-[12rem] text-center py-10 relative">
        <div className="relative w-full px-4 flex items-center">
          {/* Horizontal Line */}
          <div className="w-full h-[0.1rem] bg-gray-400"></div>

          {/* Title */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white px-4 sm:w-auto w-3/4">
            <div className="sm:text-2xl text-lg font-extrabold capitalize">
              We Print Your Idea
            </div>
            <p className="w-full font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus est accusantium dicta Lorem ipsum.
            </p>
          </div>
        </div>
        <div className="pt-20 grid sm:grid-cols-4 grid-cols-2 mx-4 sm:mx-0 sm:gap-8 gap-4 justify-around">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cititex.com/static/media/Print-Ideas1.94dac842.webp"
              className="sm:w-[20rem] sm:h-[16rem]"
              alt="gambar-1"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
