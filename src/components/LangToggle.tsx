import { useLang } from '../context/LangContext';

interface LangToggleProps {
  className?: string;
  style?: React.CSSProperties;
}

const LangToggle = ({ className = '', style }: LangToggleProps) => {
  const { lang, setLang, tr } = useLang();

  const toggle = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggle}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        border: '1.5px solid #7c4a2d',
        borderRadius: '30px',
        background: 'transparent',
        color: '#7c4a2d',
        fontSize: '13px',
        fontFamily: lang === 'ar' ? 'serif' : "'Cormorant Garamond', serif",
        letterSpacing: lang === 'en' ? '0.1em' : '0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        ...style,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.background = '#7c4a2d';
        (e.currentTarget as HTMLButtonElement).style.color = '#f5ede4';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
        (e.currentTarget as HTMLButtonElement).style.color = '#7c4a2d';
      }}
      aria-label="Toggle language"
    >
      <span style={{ fontSize: '16px' }}>{lang === 'en' ? '' : ''}</span>
      {tr.lang.switchTo}
    </button>
  );
};

export default LangToggle;
