import React, { useState, useEffect } from 'react';

export default function Cookies() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  };

  return (
    <div className="bg-darkColor flex flex-col justify-center">
      {open && (
        <div
          className={`max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-0 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between 
          transition duration-200 transform ease ${
            open ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="w-full">
            This website uses cookies to ensure you get the best experience on our website. 
            <a href="#" className="text-mainColor whitespace-nowrap hover:underline">Learn more</a>
          </div>
          <div className="flex gap-4 items-center flex-shrink-0">
            <button
              onClick={handleClose}
              className="text-mainColor focus:outline-none hover:underline"
            >
              Decline
            </button>
            <button
              onClick={handleClose}
              className="bg-mainColor px-5 py-2 text-white rounded-md hover:bg-mainColor focus:outline-none"
            >
              Allow Cookies
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

