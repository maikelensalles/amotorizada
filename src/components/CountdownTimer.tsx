import { useEffect, useMemo, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getDiff(target: Date): TimeLeft {
  const ms = target.getTime() - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(ms / (1000 * 60 * 60 * 24)),
    hours: Math.floor((ms / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((ms / (1000 * 60)) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

function Cell({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="
        w-[56px] sm:w-[80px]                /* ficou um pouco menor no mobile */
        text-center bg-secondary text-secondary-foreground
        rounded-xl px-2.5 py-2 sm:px-4 sm:py-3
        border border-primary/50 shadow-sm
      "
    >
      <div
        className="
          font-bold font-inter leading-none text-primary
          text-[clamp(1.1rem,5vw,1.6rem)]   /* número escala no mobile */
          sm:text-3xl
        "
      >
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
      className="
        flex flex-nowrap justify-center items-stretch
        gap-2 sm:gap-4 py-3                 /* gaps menores no mobile */
        max-w-full overflow-x-hidden        /* evita scroll e recorte */
      "
      role="timer"
      aria-live="polite"
    >
      <Cell value={t.days} label="DIAS" />
      <span className="shrink-0 self-center text-primary text-lg sm:text-2xl">:</span>
      <Cell value={t.hours} label="HORAS" />
      <span className="shrink-0 self-center text-primary text-lg sm:text-2xl">:</span>
      <Cell value={t.minutes} label="MIN" />
      <span className="shrink-0 self-center text-primary text-lg sm:text-2xl">:</span>
      <Cell value={t.seconds} label="SEG" />
    </div>
  );
}

export default CountdownTimer;
