import { activities as defaultActivities } from './activities';

const KEY = 'mcj_activities';

export function getActivities() {
  try {
    const stored = localStorage.getItem(KEY);
    return stored ? JSON.parse(stored) : defaultActivities;
  } catch {
    return defaultActivities;
  }
}

export function saveActivities(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function resetActivities() {
  localStorage.removeItem(KEY);
}
