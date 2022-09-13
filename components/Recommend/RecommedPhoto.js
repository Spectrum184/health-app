import moment from 'moment';
import Image from 'next/image';
import React from 'react';

const RecommedPhoto = ({ image, date, time, content, hashtag }) => {
  return (
    <div className='flex flex-col'>
      <div className='relative h-36'>
        <Image
          src={image}
          layout='fill'
          priority
          alt='undefined'
          objectFit='cover'
        />
        <span className='absolute bottom-0 px-2 py-1 text-white text-sm bg-ha-primary-300'>
          {moment(date, 'YYYY-MM-DD').format('MM.DD')}
          {` ${time}`}
        </span>
      </div>
      <div className=' h-[46px] mt-2 text-black text-sm font-light'>
        {content}
      </div>
      <div
        className=' text-black text-xs font-light'
        style={{ color: '#FF963C' }}
      >
        {hashtag}
      </div>
    </div>
  );
};

export default RecommedPhoto;
