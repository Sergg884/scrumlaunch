import { SVGProps, forwardRef } from 'react';

const BurgerMenu = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 7C1.44772 7 1 7.44772 1 8C1 8.55228 1.44772 9 2 9H22C22.5523 9 23 8.55228 23 8C23 7.44772 22.5523 7 22 7H2ZM2 16C1.44772 16 1 16.4477 1 17C1 17.5523 1.44772 18 2 18H22C22.5523 18 23 17.5523 23 17C23 16.4477 22.5523 16 22 16H2Z" fill="currentColor" />
    </svg>
  );
});

BurgerMenu.displayName = 'BurgerMenu';

export default BurgerMenu;

