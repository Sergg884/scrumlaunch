import { SVGProps, forwardRef } from 'react';

const CloseIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
      <rect x="3.92969" y="2.51465" width="22" height="2" rx="1" transform="rotate(45 3.92969 2.51465)" fill="white" />
      <rect width="22" height="2" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.0703 2.51465)" fill="white" />
    </svg>
  );
});

CloseIcon.displayName = 'CloseIcon';

export default CloseIcon; 