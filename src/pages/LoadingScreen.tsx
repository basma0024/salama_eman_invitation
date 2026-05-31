import { useEffect, useState } from 'react';
import { useLang } from '../context/LangContext';
import LangToggle from '../components/LangToggle';
import rings from "public/imgs/rings.png";

const LoadingScreen = ({ onComplete, audioRef }: {
  onComplete: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}) => {
  const [progress, setProgress] = useState(false);
  const [started, setStarted] = useState(false);
  const { tr, isRTL } = useLang();

 const handleEnter = () => {
  audioRef.current?.play().catch(() => {});
  onComplete();
};

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5ede4',
      fontFamily: "'Cormorant Garamond', serif",
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
        <LangToggle />
      </div>

      {[10, 25, 40, 55, 75, 88].map((left, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${left}%`, top: '-20px',
          width: i % 2 === 0 ? '8px' : '6px',
          height: i % 2 === 0 ? '14px' : '10px',
          background: '#c9956b', opacity: 0.18,
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          animation: `fall ${5 + i}s linear infinite`,
          animationDelay: `${i * 0.7}s`,
        }} />
      ))}

      <div style={{ marginBottom: '2.5rem' }}>
        <img src={rings} alt="rings" style={{ width: '90px', height: 'auto' }} />
      </div>

      <p style={{
        fontSize: '17px', letterSpacing: '0.2em', color: '#7c4a2d',
        textTransform: 'uppercase', marginBottom: '1.2rem',
        animation: 'fadeUp 1s ease forwards 0.3s', opacity: 0, fontWeight: 900
      }}>
        {tr.loading.invited}
      </p>

      <div style={{
        fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : "'Playfair Display', serif",
        fontSize: '52px', fontStyle: 'italic', color: '#4a2512',
        textAlign: 'center', lineHeight: isRTL ? 1.8 : 1.1,
        marginBottom: '1.5rem',
        animation: 'fadeUp 1s ease forwards 0.6s', opacity: 0,
      }}>
        {tr.home.salama}
        <span style={{ display: 'block', fontSize: '29px', color: '#c9956b', margin: '4px 0' }}>&</span>
        {tr.home.eman}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem', animation: 'fadeUp 1s ease forwards 0.9s', opacity: 0 }}>
        <div style={{ width: '50px', height: '1px', background: '#c9956b' }} />
        <div style={{ width: '5px', height: '5px', background: '#c9956b', borderRadius: '50%' }} />
        <div style={{ width: '50px', height: '1px', background: '#c9956b' }} />
      </div>

      <p style={{
        fontSize: '17px', letterSpacing: '0.2em', color: '#7c4a2d',
        fontStyle: 'italic', marginBottom: '2.5rem',
        animation: 'fadeUp 1s ease forwards 1.1s', opacity: 0,
        textAlign: 'center', fontWeight: 900
      }}>
        {tr.loading.date}
      </p>

      {/* Enter Button */}
      {!started && (
        <button
          onClick={handleEnter}
          style={{
            padding: '12px 40px',
            border: '1.5px solid #7c4a2d',
            borderRadius: '50px',
            background: 'transparent',
            color: '#7c4a2d',
            fontSize: '15px',
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: '0.2em',
            cursor: 'pointer',
            animation: 'fadeUp 0.5s ease forwards 1.3s',
            opacity: 0,
          }}
        >
          {isRTL ? '✦ ادخل ✦' : '✦ Enter ✦'}
        </button>
      )}

      {/* Progress Bar */}
      {started && (
        <div style={{ width: '180px', height: '1px', background: '#dbc5b0', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{
            height: '100%', background: '#7c4a2d', borderRadius: '2px',
            width: progress ? '100%' : '0%',
            transition: 'width 3.5s ease',
          }} />
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400..700&display=swap');
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fall { 0% { transform: translateY(-20px) rotate(0deg); opacity: 0.2; } 100% { transform: translateY(100vh) rotate(360deg); opacity: 0; } }
      `}</style>
    </div>
  );
};

export default LoadingScreen;