import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="sm:px-[12rem] py-10 sm:mx-0 mx-4 bg-slate-100 bg-opacity-60">
        <div className="grid grid-cols-3 sm:gap-10 gap-2">
          <div className="pr-10">
            <div>Logo</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              excepturi, aut, corrupti sed culpa explicabo totam molestias
              accusamus iure.
            </div>
          </div>
          <div className="col-span-2 flex justify-around gap-4">
            <div className="flex flex-col">
              <div className="text-lg font-bold">Menu Header</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold">Menu Header</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
              <div className="text-lg font-bold">Menu Header</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold">Menu Header</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
              <div className="font-semibold cursor-pointer">Menu Link</div>
            </div>
          </div>
          <div className="col-span-3 flex justify-center pt-8">
            &copy; 2019 - {new Date().getFullYear()} Kaos Garasi Bincang Coffee
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
