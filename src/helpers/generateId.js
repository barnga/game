const generateId = (length) => {
  let text = '';
  const charset = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i += 1) {
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return text;
};

export default generateId;
