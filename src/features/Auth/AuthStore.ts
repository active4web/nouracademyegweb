import Cookies from "js-cookie";

export const TOKEN_COOKIE_KEY = "token";

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

export function subscribeToAuth(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("focus", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("focus", callback);
  };
}

export function getAuthSnapshot() {
  return Boolean(Cookies.get(TOKEN_COOKIE_KEY));
}

export function getAuthServerSnapshot() {
  return false;
}

export interface ApiProfile {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  parent_email: string | null;
  parent_phone: string;
  parent_whatsapp: string;
  country: string;
}

export interface ProfileApiResponse {
  status: string;
  message: string;
  data: ApiProfile;
}

export async function fetchProfile(): Promise<ApiProfile | null> {
  const token = Cookies.get(TOKEN_COOKIE_KEY);
  if (!token) return null;

  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${base}website/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const json: ProfileApiResponse = await res.json();

    if (!res.ok || json.status !== "Success") {
      return null;
    }

    return json.data;
  } catch {
    return null;
  }
}

export function notifyAuthChange() {
  notify();
}
