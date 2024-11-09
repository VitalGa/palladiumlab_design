'use client';

import { UiButton } from '../ui/ui_button';
import { UiLine } from '../ui/ui_line';
import { buttonStyles } from './constants';
import Header from './Header';
import Image from 'next/image';

export default function MainHeader() {
  return (
    <header className=''>
      <div className=''>
        <Header />
      </div>
      <div className='mt-16 min-h-[143px] min-w-[981px] mx-auto'>
        <span className='font-gilroy font-extrabold text-[64px] leading-[74px]'>
          <span className='text-[#222222]'>
            Ремонт
            <span className='text-transparent [-webkit-text-stroke:1px_#222222]'> и </span>
            дизайн
          </span>
          <br />
          <span className='text-transparent [-webkit-text-stroke:1px_#222222]'>
            в Москве и Московской области
          </span>
        </span>
      </div>
      <div className='mt-10'>
        <div className='relative inline-flex items-center group'>
          <UiLine
            className='absolute left-5 top-1/2 -translate-y-1/2 transition-opacity duration-300 z-10'
            width='40px'
          />
          <UiButton
            className={buttonStyles}
            variant='primary'
            size='medium'
            onClick={() => console.log('click')}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            Оставить заявку
          </UiButton>
        </div>
      </div>
      <div className='relative mt-[84px] w-full max-w-[1440px] mx-auto px-4'>
        <div
          className='absolute top-[200px] w-full grid grid-cols-2 md:grid-cols-4 
          border border-[#FFFFFF] divide-x divide-[#FFFFFF]'>
          <div className='text-center p-2 md:p-4 flex items-center justify-center'>
            <span className='font-gilroy text-base md:text-[20px] font-bold leading-tight md:leading-[24.5px] text-white'>
              Услуги по ремонту
            </span>
          </div>
          <div className='text-center p-2 md:p-4 flex items-center justify-center'>
            <span className='font-gilroy text-base md:text-[20px] font-bold leading-tight md:leading-[24.5px] text-white'>
              Виды работ
            </span>
          </div>
          <div className='text-center p-2 md:p-4 flex items-center justify-center'>
            <span className='font-gilroy text-base md:text-[20px] font-bold leading-tight md:leading-[24.5px] text-white'>
              Дизайн интерьера
            </span>
          </div>
          <div className='text-center p-2 md:p-4 flex items-center justify-center'>
            <span className='font-gilroy text-base md:text-[20px] font-bold leading-tight md:leading-[24.5px] text-white'>
              Ремонт помещений
            </span>
          </div>
        </div>
        <div className='flex justify-center'>
          <Image
            src='/mini_menu_image.png'
            alt='Menu background'
            width={1440}
            height={344}
            className='w-full h-auto object-cover'
          />
        </div>
        <div className='absolute top-[282px] left-[50%] -translate-x-1/2'>
          <img
            src='/icon/arrow_circle_down.svg'
            alt='Arrow down'
            className='w-6 h-6 md:w-[40px] md:h-[40px]'
          />
        </div>
      </div>
    </header>
  );
}
