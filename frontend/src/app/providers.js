'use client';

import { AuthProvider } from '@/context/AuthContext';

import { Content, Theme } from '@carbon/react';
import BasicHeader from '@/components/BasicHeader/BasicHeader';
import BasicFooter from '@/components/BasicFooter/BasicFooter';

export function Providers({ children }) {
  return (
    <AuthProvider>
      <div className="layout">
        <Theme theme="g100">
          <BasicHeader />
        </Theme>
        <Content>{children}</Content>
        <Theme theme="g100">
          <BasicFooter />
        </Theme>
      </div>
    </AuthProvider>
  );
}
