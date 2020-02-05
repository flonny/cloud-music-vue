// src/api/utils.js
export function getCount(count) {
  if (count < 0) return null;
  if (count < 10000) {
    return count;
  } if (Math.floor(count / 10000) < 10000) {
    return `${Math.floor(count / 1000) / 10}万`;
  }
  return `${Math.floor(count / 10000000) / 10}亿`;
}
export const a = 'a';
