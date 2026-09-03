const COOLDOWN_MS = 60 * 1000; // 60 seconds between submissions

export function canSubmit(key: string): boolean {
  if (typeof window === "undefined") return true;
  const last = localStorage.getItem(key);
  if (!last) return true;
  return Date.now() - Number(last) > COOLDOWN_MS;
}

export function getRemainingSeconds(key: string): number {
  if (typeof window === "undefined") return 0;
  const last = localStorage.getItem(key);
  if (!last) return 0;
  const remaining = COOLDOWN_MS - (Date.now() - Number(last));
  return Math.max(0, Math.ceil(remaining / 1000));
}

export function markSubmitted(key: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, Date.now().toString());
}