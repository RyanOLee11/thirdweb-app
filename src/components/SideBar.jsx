import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
    <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
      )}
    </div>
  )

const SideBar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');
    
  return (
    <div className='flex sticky flex-col justify-between items-center top-5 h-[93vh]'>
        <Link to='/'>
            <Icon styles='w-[52px] h-[52px] bg-[#2c2f32]' imgUrl={logo} />
        </Link>

        <div className='bg-[#1c1c24] rounded-[20px] flex flex-col flex-1 py-4 mt-12 justify-between items-center w-[76px]'>
            <div className='gap-3 flex flex-col justify-center items-center'>
                {navlinks.map((nlink) => (
                    <Icon key={nlink.name}
                    {...nlink}
                    isActive={isActive}
                    handleClick={() => {
                      if(!nlink.disabled) {
                        setIsActive(nlink.name);
                        navigate(nlink.link);
                      }
                    }}/>
                ))}
            </div>

        <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
        </div>
    </div>
  )
}

export default SideBar