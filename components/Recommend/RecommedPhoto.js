import moment from 'moment';
import Image from 'next/image';
import React from 'react';

const RecommedPhoto = ({ image, date, time, content, hashtag }) => {
  return (
    <div className='w-auto mb-6'>
      <div className='relative h-36 w-auto'>
        <Image
          src={image}
          layout='fill'
          priority
          alt='undefined'
          objectFit='cover'
        />
        <div className='absolute bottom-0 text-white text-sm bg-ha-primary-300 sm:block hidden'>
          {moment(date, 'YYYY-MM-DD').format('MM.DD')}
          {` ${time}`}
        </div>
      </div>
      <div className=' text-black text-sm font-light sm:block hidden'>
        {content}
      </div>
      <div
        className=' text-black text-xs font-light sm:block hidden'
        style={{ color: '#FF963C' }}
      >
        {hashtag}
      </div>
    </div>
  );
};

export default RecommedPhoto;
