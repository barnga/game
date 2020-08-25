const insertStylesheet = (callback) => {
  const link = document.createElement('link');
  link.href = '/css/theme.css';
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.className = 'theme-stylesheet';

  link.onload = callback;
  document.getElementsByTagName('head')[0].appendChild(link);
};

export default insertStylesheet;
