'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [hash, setHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash); // Mengambil hash dari URL
    };

    window.addEventListener('hashchange', handleHashChange);

    // Set initial hash saat pertama kali dimuat
    handleHashChange();

    // Cleanup event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Fungsi untuk menentukan kelas aktif
  const getActiveClass = (path: string) => {
    return hash === path ? 'text-green-500' : ''; // Adjust the class for active state
  };

  // Fungsi untuk toggle menu
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Handle click to change hash
  const handleLinkClick = (path: string) => {
    window.location.hash = path; // Change the hash in the URL
    setHash(path); // Update the hash in the state immediately
  };
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="shadow-md sticky z-40 top-0  bg-white">
      {/* Desktop & Mobile Navbar */}
      <div className="w-full flex sm:justify-around justify-between items-center sm:px-[5rem] p-8">
        {/* Mobile Menu Button */}
        <div className="sm:hidden items-center">
          <button
            onClick={handleOpenMenu}
            aria-expanded={isOpenMenu}
            className="font-bold"
          >
            {isOpenMenu ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Logo */}
        <div className="font-bold">LOGO</div>

        {/* Desktop Links */}
        <div className="sm:flex hidden justify-around items-center leading-loose gap-4">
          <div className={getActiveClass('')}>
            <Link href="#" onClick={() => handleLinkClick('')}>
              Home
            </Link>
          </div>
          <div className={getActiveClass('#product')}>
            <Link href="#product" onClick={() => handleLinkClick('#product')}>
              Product
            </Link>
          </div>
          <div className={getActiveClass('#about')}>
            <Link href="#about" onClick={() => handleLinkClick('#about')}>
              About
            </Link>
          </div>
          <div className={getActiveClass('#contact')}>
            <Link href="#contact" onClick={() => handleLinkClick('#contact')}>
              Contact
            </Link>
          </div>
          <div className={getActiveClass('#search')}>Search</div>
        </div>

        {/* Register / Cart Menu */}
        <div className="sm:flex hidden gap-6 items-center justify-between">
          <div>
            <Button
              label="Register"
              color="default"
              onClick={handleClick}
              size="small"
            />
          </div>
          <div>Cart</div>
        </div>

        <div className="font-bold sm:hidden flex">Login</div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpenMenu ? 'flex' : 'hidden'
        } sm:hidden flex-col gap-2 p-8 py-4 border-t-2 bg-white bg-opacity-90 ease-in-out duration-700 font-semibold absolute top-[5.5rem] left-0 w-full z-50`}
      >
        <div className={getActiveClass('#search')}>
          <button>Search</button>
        </div>
        <div className={getActiveClass('')}>
          <Link href="#" onClick={() => handleLinkClick('')}>
            Home
          </Link>
        </div>
        <div className={getActiveClass('#product')}>
          <Link href="#product" onClick={() => handleLinkClick('#product')}>
            Product
          </Link>
        </div>
        <div className={getActiveClass('#about')}>
          <Link href="#about" onClick={() => handleLinkClick('#about')}>
            About
          </Link>
        </div>
        <div
          className={`${getActiveClass(
            '#contact'
          )} border-b-2 border-slate-400 pb-4`}
        >
          <Link href="#contact" onClick={() => handleLinkClick('#contact')}>
            Contact
          </Link>
        </div>
        <div
          className={`${getActiveClass(
            '#contact'
          )} justify-center flex pt-2 pb-4`}
        >
          <button className="pb-2 pt-1 w-1/2 rounded-full shadow-md font-semibold text-white bg-black">
            <Link href="#contact" onClick={() => handleLinkClick('#contact')}>
              Log In
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
