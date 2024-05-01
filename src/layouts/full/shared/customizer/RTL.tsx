import React, { useEffect } from 'react';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';

interface RTLType {
  children: React.ReactNode;
  direction: string;
}

const styleCache = () =>
  createCache({
    key: 'rtl',
    prepend: true,

    // We have to temporary ignore this due to incorrect definitions
    // in the stylis-plugin-rtl module
    // @see https://github.com/styled-components/stylis-plugin-rtl/issues/23
    stylisPlugins: [rtlPlugin],
  });

const RTL = (props: RTLType) => {
  const { children, direction } = props;

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  if (direction === 'rtl') {
    return <CacheProvider value={styleCache()}>{children}</CacheProvider>;
  }

  return <>{children}</>;
};

export default RTL;
