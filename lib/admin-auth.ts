export const ADMIN_USERNAME = 'celebrityglow';
export const ADMIN_PASSWORD = 'Akshaya1a';

export const ADMIN_SESSION_STORAGE_KEY = 'celebrityglow_admin_session';
export const ADMIN_SESSION_TOKEN = 'celebrityglow_admin_authenticated_v1';

export function verifyAdminCredentials(username: string, password: string) {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export function isAdminAuthenticated() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(ADMIN_SESSION_STORAGE_KEY) === ADMIN_SESSION_TOKEN;
}

export function setAdminAuthenticated() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(ADMIN_SESSION_STORAGE_KEY, ADMIN_SESSION_TOKEN);
}

export function clearAdminAuthenticated() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
}
