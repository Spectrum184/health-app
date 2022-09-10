import SvgIcon from '../SvgIcon';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navbarData } from '~/mocks';

const Header = () => {
  return (
    <nav className='h-16 bg-ha-dark-500 flex justify-center fixed w-full z-50'>
      <div className='flex justify-between max-w-screen-xl w-full'>
        <Link href='/'>
          <a className='flex justify-between hover:opacity-80'>
            <Image
              src='/logo.png'
              alt='logo'
              width={144}
              height={40}
              priority
              className='cursor-pointer'
            />
          </a>
        </Link>
        <ul className='flex items-center'>
          {navbarData.map((item, index) => (
            <li key={index}>
              <Link href='/'>
                <a className='h-12 w-40 items-center cursor-pointer hover:opacity-80 hidden md:flex relative'>
                  <SvgIcon name={item.icon} className='relative' />
                  {item.icon === 'info' && (
                    <span className='absolute top-1 left-6 bg-ha-primary-500 w-4 h-4 rounded-full font-light text-[10px] text-center'>
                      1
                    </span>
                  )}
                  <span className='text-white ml-2 font-light text-base'>
                    {item.text}
                  </span>
                </a>
              </Link>
            </li>
          ))}
          <SvgIcon name='menu' className='mr-2 my-auto' />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
