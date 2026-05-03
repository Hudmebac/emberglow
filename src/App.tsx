/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Characters from './pages/Characters';
import Lore from './pages/Lore';
import Galleries from './pages/Galleries';
import About from './pages/About';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import ThankYou from './pages/ThankYou';
import GalleryDetail from './pages/GalleryDetail';
import Original from './pages/Original';
import Songs from './pages/Songs';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/lore" element={<Lore />} />
              <Route path="/galleries" element={<Galleries />} />
              <Route path="/galleries/:id" element={<GalleryDetail />} />
              <Route path="/original" element={<Original />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
