import { IpadCursorConfig } from 'ipad-cursor';
import { IPadCursorProvider, useIPadCursor } from 'ipad-cursor/react';
import { ReactNode, useEffect, useState } from 'react';

function checkIsPhone() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/mobile|android|iphone|ipad|tablet|ipod/.test(userAgent)) {
    return true;
  } else {
    return false;
  }
}

export const IpadProvider = ({ children }: { children: ReactNode }) => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    setIsPhone(checkIsPhone());
  }, []);

  const config: IpadCursorConfig = {
    blockPadding: 'auto',
    blockStyle: {
      radius: 'auto'
    },
    enableAutoTextCursor: true
  };

  useIPadCursor();

  if (isPhone) return <>{children}</>;

  return <IPadCursorProvider config={config}>{children}</IPadCursorProvider>;
};
