const generateCardImage = (card) => {
  const img = document.createElement('img');
  img.src = `http://localhost:7000/public/assets/cards/${card}.svg`;
  return img;
};

export default generateCardImage;
