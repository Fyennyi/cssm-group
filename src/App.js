import React, { useState } from 'react';
import { TranslationProvider } from './context/TranslationContext';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';
import CookieNotice from './components/CookieNotice';

function App() {
  const [language, setLanguage] = useState('uk');

  return (
    <TranslationProvider language={language}>
      <div className="container">
        <Header setLanguage={setLanguage} />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
      <CookieNotice />
    </TranslationProvider>
  );
}

export default App;