import * as React from "react";

export const MAX_MOBILE_WIDTH = 767;

const useMobileWidthEffect = (callback: (isMobile: boolean) => void) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 767);

  React.useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth >= MAX_MOBILE_WIDTH && isMobile) {
        setIsMobile(false);
        callback(false);
      } else if (window.innerWidth < MAX_MOBILE_WIDTH && !isMobile) {
        callback(true);
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  });

  return isMobile;
};

export default useMobileWidthEffect;
