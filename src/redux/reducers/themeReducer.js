export const setThemeInLocalStorage = (theme) => {
  localStorage.setItem('theme', theme);
};

export const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || 'dark';
};
