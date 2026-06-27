"use client";

import { useEffect, useState } from "react";

function formatWIBTime(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

/**
 * Status badge with a live clock (WIB) — shows visitors at a glance
 * whether it's a reasonable hour to reach out, updated every second.
 */
export function LiveStatusBadge() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatWIBTime(new Date()));
    const interval = setInterval(() => {
      setTime(formatWIBTime(new Date()));
    }, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider"
      style={{
        background: "rgba(122,114,112,0.06)",
        border: "1px solid rgba(122,114,112,0.1)",
        color: "#7A7270",
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#7A7270] animate-pulse" />
      Tersedia untuk kerja lepas
      {time && (
        <>
          <span className="w-px h-3 bg-[rgba(122,106,86,0.16)]" />
          <span className="text-[#a0a0a0] font-normal tracking-normal" suppressHydrationWarning>
            {time} WIB
          </span>
        </>
      )}
    </div>
  );
}
