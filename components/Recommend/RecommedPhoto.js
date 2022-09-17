import moment from 'moment';
import Image from 'next/image';
import React from 'react';

const RecommedPhoto = ({ image, date, time, content, hashtag }) => {
  return (
    <div className='mb-6'>
      <div className='relative md:w-full w-[230px] h-36 '>
        <Image
          src={image}
          layout='fill'
          alt='undefined'
          objectFit='cover'
          priority
        />
        <div className='absolute bottom-0 text-white text-sm bg-ha-primary-300'>
          {moment(date, 'YYYY-MM-DD').format('MM.DD')}
          {` ${time}`}
        </div>
      </div>
      <div className=' text-black text-sm font-light'>{content}</div>
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
