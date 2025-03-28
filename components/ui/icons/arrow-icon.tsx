import { SVGProps, forwardRef } from 'react';

const ArrowIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg width="75" height="37" viewBox="0 0 75 37" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
      <mask id="path-1-inside-1_8081_5269" fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M36 37L0 18.5L36 0V8L75 8V29H36V37Z" />
      </mask>
      <path d="M0 18.5L-0.457069 19.3894L-2.18785 18.5L-0.457069 17.6106L0 18.5ZM36 37H37V38.6382L35.5429 37.8894L36 37ZM36 0L35.5429 -0.889431L37 -1.6382V0L36 0ZM36 8V9H35V8H36ZM75 8V7H76V8H75ZM75 29H76V30H75V29ZM36 29H35V28H36V29ZM0.457069 17.6106L36.4571 36.1106L35.5429 37.8894L-0.457069 19.3894L0.457069 17.6106ZM36.4571 0.889431L0.457069 19.3894L-0.457069 17.6106L35.5429 -0.889431L36.4571 0.889431ZM35 8V0L37 0V8H35ZM75 9L36 9V7L75 7V9ZM74 29V8H76V29H74ZM36 28H75V30H36V28ZM35 37V29H37V37H35Z" fill="#1E1F21" mask="url(#path-1-inside-1_8081_5269)" />
    </svg>
  );
});

ArrowIcon.displayName = 'ArrowIcon';

export default ArrowIcon; 