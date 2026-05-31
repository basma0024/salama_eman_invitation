import { useState, useEffect } from 'react';
import { useLang } from '../context/LangContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);
  const { tr } = useLang();

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = (): TimeLeft => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: tr.countdown.days },
    { value: timeLeft.hours, label: tr.countdown.hours },
    { value: timeLeft.minutes, label: tr.countdown.minutes },
    { value: timeLeft.seconds, label: tr.countdown.seconds },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className={`text-center ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg border border-blush-100">
              <div
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-2 transition-all duration-300"
                key={unit.value}
              >
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="font-sans text-xs md:text-sm uppercase tracking-widest "  style={{ color: '#7c4a2d', fontWeight:600 }}>
                   {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
