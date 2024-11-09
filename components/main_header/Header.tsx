interface HeaderProps {
  hoveredItem: string | null;
}

export default function Header({ hoveredItem }: HeaderProps) {
  const isHovered = hoveredItem === 'repair';

  return (
    <>
      <header className='w-full max-w-[1440px] h-[86px] border border-[#D4D4D4] mx-auto grid grid-cols-[60px_1fr_60px] md:grid-cols-[86px_1fr_86px] group'>
        <div className='h-[60px] md:h-[86px] border-r border-[#D4D4D4] flex items-center justify-center'>
          <div className='cursor-pointer p-2'>
            <img
              src='/icon/map.svg'
              alt='Map Icon'
              className={`w-[24px] h-[24px] md:w-[15px] md:h-[18px] transition-all 
                ${isHovered ? 'brightness-0 invert' : ''}`}
            />
          </div>
        </div>

        <div className='hidden md:flex items-center justify-center max-w-[1004px] h-full mx-auto w-full relative'>
          <nav className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between w-full'>
            <div className='flex gap-8 min-w-[100px]'>
              <a
                href='/'
                className={`${
                  isHovered ? 'text-white' : 'text-gray-800'
                } hover:font-bold transition-all min-w-[100px]`}>
                Главная
              </a>
              <a
                href='/about'
                className={`${
                  isHovered ? 'text-white' : 'text-gray-800'
                } hover:font-bold whitespace-nowrap transition-all min-w-[100px]`}>
                О компании
              </a>
              <a
                href='/services'
                className={`${
                  isHovered ? 'text-white' : 'text-gray-800'
                } hover:font-bold transition-all min-w-[100px]`}>
                Услуги
              </a>
            </div>

            <img
              src='/icon/logo.svg'
              alt='Palladium Lab Logo'
              className={`h-[30px] transition-all ${
                isHovered
                  ? 'brightness-0 invert'
                  : 'group-hover:[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(91%)_saturate(7471%)_hue-rotate(357deg)_brightness(95%)_contrast(117%)]'
              }`}
            />

            <div className='flex gap-8'>
              <a
                href='/prices'
                className={`${
                  isHovered ? 'text-white' : 'text-gray-800'
                } hover:font-bold transition-all min-w-[100px]`}>
                Цены
              </a>
              <a
                href='/portfolio'
                className={`${
                  isHovered ? 'text-white' : 'text-gray-800'
                } hover:font-bold transition-all min-w-[100px]`}>
                Портфолио
              </a>
              <a
                href='/contacts'
                className={`${
                  isHovered ? 'text-white' : 'text-gray-800'
                } hover:font-bold transition-all min-w-[100px]`}>
                Контакты
              </a>
            </div>
          </nav>
        </div>

        <div className='h-[60px] md:h-[86px] border-l border-[#D4D4D4] flex items-center justify-center'>
          <div className='cursor-pointer p-2'>
            <img
              src='/icon/phone.svg'
              alt='Phone Icon'
              className={`w-6 h-6 md:w-[18px] md:h-[18px] transition-all 
                ${isHovered ? 'brightness-0 invert' : ''}`}
            />
          </div>
        </div>
      </header>
    </>
  );
}
