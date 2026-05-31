import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Calendar, MapPin } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import LangToggle from '../components/LangToggle';
import { useLang } from '../context/LangContext';

const emojis = ['📷', '💍', '🕯️', '🎉'];

const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  const { tr, isRTL } = useLang();

  useEffect(() => {
    setMounted(true);
  }, []);

  const weddingDate = '2026-08-07T18:00:00';

  return (
    <div className="relative" style={{ fontFamily: isRTL ? "'Scheherazade New', serif" : "'Playfair Display', serif", background: '#f5ede4', direction: isRTL ? 'rtl' : 'ltr',


     }}>

      {/* Lang Toggle - fixed top right */}
<div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 1001 }}>
  <LangToggle />
</div>

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f5ede4',
          padding: '2rem 1rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
     {/* Falling hearts */}
{[5, 15, 25, 35, 50, 62, 75, 88].map((left, i) => (
  <div
    key={i}
    style={{
      position: 'fixed',
      left: `${left}%`,
      top: '-30px',
      fontSize: i % 2 === 0 ? '22px' : '19px',
      color: '#c9956b',
      opacity: 0.4,
      animation: `fall ${7 + i}s linear infinite`,
      animationDelay: `${i * 0.9}s`,
      userSelect: 'none',
      pointerEvents: 'none',
      zIndex: 999,
    }}
  >
    ♥
  </div>
))}

        {/* Rings icon */}
<div
  style={{
    marginBottom: '2rem',
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 1s ease 0.1s',
  }}
>
  <img
    src="/src/imgs/rings.png"
    alt="rings"
    style={{ width: '80px', height: 'auto' }}
  />
</div>

        {/* Invitation text */}
        <p
          style={{
            fontSize: '13px',
            letterSpacing: isRTL ? '0.1em' : '0.25em',
            color: '#7c4a2d',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease 0.3s',
            textAlign: 'center',
          }}
        >
          {tr.home.invitation}
        </p>

        {/* from */}
        <p
          style={{
            fontSize: '18px',
            fontStyle: 'italic',
            color: '#4a2512',
            marginBottom: '0.5rem',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease 0.4s',
          }}
        >
          {tr.home.from}
        </p>

        {/* Names */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease 0.6s',
          }}
        >
          <h1
            style={{
              fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : "'Playfair Display', serif",
              lineHeight: isRTL ? 1.8 : 1,
              fontSize: 'clamp(48px, 12vw, 80px)',
              fontStyle: 'italic',
              fontWeight: 700,
              color: '#4a2512',
              margin: 0,
            }}
          >
                      {tr.home.salama}

            
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '12px 0' }}>
            <span style={{ width: '60px', height: '1px', background: '#c9956b' }} />
            <Heart style={{ width: '20px', height: '20px', color: '#c9956b', fill: '#c9956b' }} />
            <span style={{ width: '60px', height: '1px', background: '#c9956b' }} />
          </div>
          <h1
            style={{
              fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : "'Playfair Display', serif",
              lineHeight: isRTL ? 1.8 : 1,
              fontSize: 'clamp(48px, 12vw, 80px)',
              fontStyle: 'italic',
              fontWeight: 700,
              color: '#4a2512',
              margin: 0,
            }}
          >
            {tr.home.eman}
          </h1>
        </div>

        {/* Date & Location */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease 0.8s',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '8px',fontWeight:900 }}>
            <Calendar style={{ width: '16px', height: '16px', color: '#7c4a2d' }} />
            <p style={{ fontSize: '13px', letterSpacing: '0.25em', color: '#7c4a2d', textTransform: 'uppercase', margin: 0 }}>
              {tr.home.mindate}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',fontWeight:900 }}>
            <MapPin style={{ width: '16px', height: '16px', color: '#7c4a2d' }} />
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '13px', letterSpacing: '0.25em', color: '#7c4a2d', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              {tr.home.location}
            </a>
          </div>
        </div>

        {/* Countdown */}
        <div
          style={{
            marginBottom: '2.5rem',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease 1s',
          }}
        >
          <CountdownTimer targetDate={weddingDate} />
        </div>

        {/* RSVP Button */}
        {/* <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease 1.2s',
          }}
        >
          <Link
            to="/rsvp"
            style={{
              display: 'inline-block',
              padding: '14px 44px',
              border: '1.5px solid #7c4a2d',
              color: '#7c4a2d',
              background: 'transparent',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '13px',
              letterSpacing: isRTL ? '0.05em' : '0.3em',
              textTransform: 'uppercase',
              borderRadius: '40px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#7c4a2d';
              (e.currentTarget as HTMLAnchorElement).style.color = '#f5ede4';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#7c4a2d';
            }}
          >
            {tr.home.sendMessage}
          </Link>
        </div> */}
      </section>

    {/* ── COUPLE PHOTO ── */}
<section
  style={{
    background: '#f0e4d8',
    padding: '60px 1rem',
    textAlign: 'center',
  }}
>
  <p style={{ fontSize: '13px', letterSpacing: isRTL ? '0.05em' : '0.35em', color: '#7c4a2d', textTransform: 'uppercase', marginBottom: '24px', fontWeight: 600 }}>
    {isRTL ? 'سنتزوج' : "let's get married"}
  </p>

 <img
  src="src/imgs/eman_salama.png"
  alt="Eman & Salama"
  style={{
    width: '100%',
    maxWidth: '280px',
    height: 'auto',
    marginBottom: '24px',
    display: 'block',
    margin: '0 auto 24px',
  }}
/>

  <p style={{
    fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : "'Playfair Display', serif",
    fontStyle: isRTL ? 'normal' : 'italic',
    fontSize: '22px',
    color: '#4a2512',
    marginBottom: '8px',
    lineHeight: isRTL ? 2 : 1.4,
  }}>
    {tr.home.salama_eman}
  </p>

  <p style={{ fontSize: '13px', letterSpacing: '0.2em', color: '#a07060', fontWeight: 800 }}>
    {tr.home.date}
  </p>
</section>

      {/* ── DEAR GUESTS MESSAGE ── */}
      <section style={{ background: '#f5ede4', padding: '80px 1rem', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(36px, 8vw, 56px)',
            color: '#4a2512',
            marginBottom: '16px',
          }}
        >
          {tr.home.dearGuests}
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
          {[0, 1].map(i => (
            <div key={i} style={{ position: 'relative', width: '28px', height: '28px' }}>
              <div style={{ position: 'absolute', left: i === 0 ? 0 : 10, top: '4px', width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #7c4a2d' }} />
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '18px',
            lineHeight: 1.9,
            color: '#4a2512',
            maxWidth: '560px',
            margin: '0 auto 48px',
            textAlign: 'center',
          }}
        >
          {tr.home.guestMessage}
        </p>

        {/* JULY big text */}
        <div style={{ position: 'relative', marginBottom: '32px' }}>
          <span style={{ position: 'absolute', top: '-10px', left: '20%', fontSize: '28px', color: '#c9956b', opacity: 0.6 }}>✦</span>
          <span style={{ position: 'absolute', top: '10px', right: '18%', fontSize: '20px', color: '#c9956b', opacity: 0.4 }}>✦</span>
          <h3
            style={{
      fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : "'Playfair Display', serif",
              fontSize: 'clamp(46px, 18vw, 45px)',
              fontWeight: 700,
              color: '#4a2512',
              letterSpacing: '0.1em',
              margin: 0,
              lineHeight: 1,
            }}
          >
            {tr.home.august}
          </h3>
        </div>

        <p style={{ fontStyle: 'italic', fontSize: '16px', color: '#7c4a2d', letterSpacing: isRTL ? '0.05em' : '0.15em', marginBottom: '24px' }}>
          {tr.home.twoThousandTwentySix}
        </p>

        {/* Calendar days */}
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '11px' }}>  {[5, 6, 7, 8, 9].map(d => (
    <div key={d} style={{ textAlign: 'center' }}>
      {d === 7 ? (
        <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '46px', height: '46px' }}>
          <Heart style={{ width: '46px', height: '46px', color: '#e8a0b0', fill: '#e8a0b0', position: 'absolute' }} />
         <span
  style={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: '22px',
    color: '#4a2512',
    position: 'relative',
    zIndex: 1,
    paddingBottom: '4px',
  }}
>
  7
</span>
        </div>
      ) : (
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '28px', color: '#7c4a2d', opacity: 0.5 }}>
          {d}
        </span>
      )}
    </div>
  ))}
</div>
<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  {[10, 11].map(d => (
    <span key={d} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '28px', color: '#7c4a2d', opacity: 0.5 }}>
      {d}
    </span>
  ))}
</div>
       
      </section>

      {/* ── PROGRAM ── */}
      <section style={{ background: '#f0e4d8', padding: '80px 1rem' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2
            style={{
      fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 'clamp(25px, 11vw, 25px)',
              color: '#4a2512',
              textAlign: 'center',
              letterSpacing: '0.05em',
              marginBottom: '12px',
            }}
          >
            {tr.home.program}
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '40px' }}>
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c9956b', opacity: 0.5 }} />
            ))}
          </div>

          {tr.home.programItems.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#faf3ec',
                border: '1.5px dashed #d4b08c',
                borderRadius: '16px',
                padding: '20px 24px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                flexDirection: 'row',
textAlign: isRTL ? 'right' : 'left',
              }}
            >
              <div style={{ fontSize: '32px', lineHeight: 1 }}>{emojis[i]}</div>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '22px', color: '#4a2512', margin: '0 0 4px' }}>
                  {item.time}
                </p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '18px', color: '#7c4a2d', margin: '0 0 6px' }}>
                  {item.title}
                </p>
                <p style={{ fontSize: '14px', color: '#a07060', margin: 0, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING MESSAGE ── */}
      <section style={{ background: '#f5ede4', padding: '80px 1rem', textAlign: 'center' }}>
        <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#a07060', marginBottom: '8px',fontWeight:500,  }}>
          {tr.home.closingQuote}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', margin: '32px 0' }}>
          <span style={{ width: '40px', height: '1px', background: '#c9956b' }} />
          <div style={{ position: 'relative', width: '40px', height: '30px' }}>
            <div style={{ position: 'absolute', left: 0, top: '4px', width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #7c4a2d' }} />
            <div style={{ position: 'absolute', left: '12px', top: '4px', width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #7c4a2d' }} />
          </div>
          <span style={{ width: '40px', height: '1px', background: '#c9956b' }} />
        </div>

        <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#7c4a2d', marginBottom: '8px',      fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : "'Playfair Display', serif",
 }}>
          {tr.home.withLove}
        </p>
        <h2
          style={{
      fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(20px, 11vw, 22px)',
            color: '#4a2512',
            lineHeight: 1.5,
            margin: '0 0 16px',
          }}
        >
        {tr.home.salama_eman}
        </h2>
        <p style={{ fontSize: '13px', letterSpacing: '0.2em', color: '#a07060',fontWeight:700,       fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : "'Playfair Display', serif",
 }}>
          {tr.home.date}
        </p>

        {/* <div style={{ marginTop: '48px' }}>
          <Link
            to="/rsvp"
            style={{
              display: 'inline-block',
              padding: '14px 44px',
              border: '1.5px solid #7c4a2d',
              color: '#7c4a2d',
              background: 'transparent',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '13px',
              letterSpacing: isRTL ? '0.05em' : '0.3em',
              textTransform: 'uppercase',
              borderRadius: '40px',
              textDecoration: 'none',
            }}
          >
            {tr.home.sendMessage}
          </Link>
        </div> */}
      </section>

      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400..700&display=swap');
       @keyframes fall {
  0% { transform: translateY(-30px) rotate(0deg); opacity: 0.3; }
  100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
}
        @keyframes ringPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        
      `}</style>
    </div>
  );
};

export default HomePage;
