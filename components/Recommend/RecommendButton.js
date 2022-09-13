import React from 'react';

const RecommendButton = ({ engText, jpText }) => {
  return (
    <button className='w-[216px] h-36 bg-ha-dark-600 flex flex-col justify-start text-center pt-6 px-6 hover:opacity-80 mr-8 mt-8 xl:mt-0'>
      <div className='text-xl font-normal mb-2' style={{ color: '#FFCC21' }}>
        {engText}
      </div>
      <hr className='w-14 self-center mb-2' />
      <div className=' text-white font-light text-lg self-center'>{jpText}</div>
    </button>
  );
};

export default RecommendButton;
