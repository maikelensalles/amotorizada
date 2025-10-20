import { useEffect, useMemo, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getDiff(target: Date): TimeLeft {
  const ms = target.getTime() - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function Cell({ value, label }: { value: number; label: string }) {
  return (
    <div className="w-[64px] sm:w-[80px] text-center bg-secondary text-secondary-foreground rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-primary/50 shadow-sm">
      <div className="text-2xl sm:text-3xl font-bold font-orbitron leading-none text-primary">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-80 text-racing-gray-light mt-1">
        {label}
      </div>
    </div>
  );
}

export function CountdownTimer({ targetISO = "2025-10-28T23:59:59-03:00" }: { targetISO?: string }) {
  const target = useMemo(() => new Date(targetISO), [targetISO]);
  const [t, setT] = useState<TimeLeft>(() => getDiff(target));

  useEffect(() => {
    const id = setInterval(() => setT(getDiff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div
      className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4 py-4"
      role="timer"
      aria-live="polite"
    >
      <Cell value={t.days} label="DIAS" />
      <span className="shrink-0 self-center text-primary text-xl sm:text-2xl">:</span>
      <Cell value={t.hours} label="HORAS" />
      <span className="shrink-0 self-center text-primary text-xl sm:text-2xl">:</span>
      <Cell value={t.minutes} label="MIN" />
      <span className="shrink-0 self-center text-primary text-xl sm:text-2xl">:</span>
      <Cell value={t.seconds} label="SEG" />
    </div>
  );
}

export default CountdownTimer;
