export const buttonStyles = `ml-[40px] relative border border-[#22222230] overflow-hidden
  before:absolute before:left-0 before:bottom-[50%] before:w-[2px] before:h-0 
  before:bg-[#222222] group-hover:before:h-[50%] before:transition-all 
  before:duration-150 before:origin-top
  
  after:absolute after:left-0 after:top-0 after:h-[2px] after:w-0 
  after:bg-[#222222] group-hover:after:w-full after:transition-all 
  after:duration-150 after:delay-150

  [&>span:first-child]:absolute [&>span:first-child]:right-0 [&>span:first-child]:top-0 [&>span:first-child]:w-[2px] 
  [&>span:first-child]:h-0 [&>span:first-child]:bg-[#222222] group-hover:[&>span:first-child]:h-full 
  [&>span:first-child]:transition-all [&>span:first-child]:duration-150 [&>span:first-child]:delay-[300ms]
  
  [&>span:nth-child(2)]:absolute [&>span:nth-child(2)]:right-0 [&>span:nth-child(2)]:bottom-0 [&>span:nth-child(2)]:h-[2px] 
  [&>span:nth-child(2)]:w-0 [&>span:nth-child(2)]:bg-[#222222] group-hover:[&>span:nth-child(2)]:w-full 
  [&>span:nth-child(2)]:transition-all [&>span:nth-child(2)]:duration-150 [&>span:nth-child(2)]:delay-[450ms] [&>span:nth-child(2)]:origin-right
  
  [&>span:last-child]:absolute [&>span:last-child]:left-0 [&>span:last-child]:bottom-0 [&>span:last-child]:w-[2px] 
  [&>span:last-child]:h-0 [&>span:last-child]:bg-[#222222] group-hover:[&>span:last-child]:h-[50%] 
  [&>span:last-child]:transition-all [&>span:last-child]:duration-150 [&>span:last-child]:delay-[600ms] [&>span:last-child]:origin-bottom`;
