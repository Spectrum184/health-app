import moment from 'moment';
import Image from 'next/image';
import React from 'react';

const RecommendPhoto = ({ image, date, time, content, hashtag }) => {
  return (
    <div className='flex flex-col'>
      <div className='relative h-36 cursor-pointer'>
        <Image
          src={image}
          layout='fill'
          priority
          alt={content}
          objectFit='cover'
        />
        <span className='absolute bottom-0 px-2 py-1 text-white text-sm bg-ha-primary-300'>
          {`${moment(date, 'YYYY-MM-DD').format('MM.DD')} ${time}`}
        </span>
      </div>
      <h3 className='h-[46px] mt-2 text-black font-light line-clamp-2 text-ha-title cursor-pointer hover:opacity-80'>
        {content}
      </h3>
      <p className='text-xs font-light text-ha-primary-400'>
        {hashtag.map((item, index) => (
          <span className='mr-2 hover:underline cursor-pointer' key={index}>
            #{item}
          </span>
        ))}
      </p>
    </div>
  );
};

export default RecommendPhoto;
