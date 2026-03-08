const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
};

export const apiFetch = (path: string, init?: RequestInit) => {
  const base = getBaseUrl();
  const url = `${base}${path}`;
  return fetch(url, init);
};

