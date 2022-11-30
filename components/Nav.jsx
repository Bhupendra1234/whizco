import React from 'react';

// import navigation data
import { navigation } from '../data';

// import Link
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-gray-400 hover:text-accent cursor-pointer'
              key={idx}
            >
              <Link
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
