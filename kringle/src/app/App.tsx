import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './Routes';
import {PageWrapper} from './components/PageWrapper';
import {CenterLayout} from './components/CenterLayout';


interface AppProps { }

export const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <PageWrapper>
        <CenterLayout>
          <Routes />
        </CenterLayout>
      </PageWrapper>
    </BrowserRouter>
  )
};