import React from 'react';

const MenuRecord = ({ image, title, content }) => {
  return (
    <div
      className='relative h-72 w-72 flex items-center justify-center flex-col border-[24px] border-ha-primary-300 mb-3 md:mb-0'
      style={{
        backgroundImage: `url('${image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h3 className='uppercase text-2xl font-normal text-ha-primary-300 z-10'>
        {title}
      </h3>
      <span className='mt-3 h-6 w-40 flex justify-center items-center bg-ha-primary-400 z-10 text-white text-sm font-light'>
        {content}
      </span>
      <div className='bg-ha-gray-500 absolute top-0 left-0 h-full opacity-80 w-full z-0' />
    </div>
  );
};

export default MenuRecord;
