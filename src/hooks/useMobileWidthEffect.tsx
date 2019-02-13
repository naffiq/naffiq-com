import * as React from "react";

export const MAX_MOBILE_WIDTH = 767;

// Gatsby build fix
const myWindow = (typeof window !== "undefined" && window) || ({} as any);

const useMobileWidthEffect = (callback: (isMobile: boolean) => void) => {
  const [isMobile, setIsMobile] = React.useState(myWindow.innerWidth < 767);

  React.useEffect(() => {
    const checkIfMobile = () => {
      if (myWindow.innerWidth >= MAX_MOBILE_WIDTH && isMobile) {
        setIsMobile(false);
        callback(false);
      } else if (myWindow.innerWidth < MAX_MOBILE_WIDTH && !isMobile) {
        callback(true);
        setIsMobile(true);
      }
    };

    myWindow.addEventListener("resize", checkIfMobile);

    return () => myWindow.removeEventListener("resize", checkIfMobile);
  });

  return isMobile;
};

export default useMobileWidthEffect;
