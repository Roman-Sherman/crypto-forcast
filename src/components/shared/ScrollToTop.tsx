import { useEffect, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({ children }: { children: ReactElement | null }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return children || null;
}
