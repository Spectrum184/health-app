import React from 'react';

const DairyCard = ({ date, time, content }) => {
  return (
    <div className='border-2 p-4 h-[231px] border-ha-gray-600'>
      <h4 className='text-lg font-normal'>{date}</h4>
      <p className='text-lg font-normal'>{time}</p>
      <p className='pt-2 text-sm line-clamp-6'>{content}</p>
    </div>
  );
};

export default DairyCard;
