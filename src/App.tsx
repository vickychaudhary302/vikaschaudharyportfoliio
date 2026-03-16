/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Services from './components/Services';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'about' && <About onNavigate={handleNavigate} />}
      {currentPage === 'blog' && <Blog onNavigate={handleNavigate} />}
      {currentPage === 'projects' && <Projects onNavigate={handleNavigate} />}
      {currentPage === 'services' && <Services onNavigate={handleNavigate} />}
    </>
  );
}
