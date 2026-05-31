import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import RSVPPage from './pages/RSVPPage';
import GalleryPage from './pages/GalleryPage';
import StoryPage from './pages/StoryPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import PageTransition from './components/PageTransition';
import LoadingScreen from './pages/LoadingScreen';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/rsvp" element={<RSVPPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageTransition>
      </main>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('public/imgs/song.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    audioRef.current.play().catch(() => {});
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} audioRef={audioRef} />
      ) : (
        <Routes>
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/*" element={<AppLayout />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;