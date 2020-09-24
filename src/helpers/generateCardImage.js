const generateCardImage = (card) => new Promise((resolve) => {
  const img = document.createElement('img');
  img.src = process.env.NODE_ENV ? `https://barngaproject.net/assets/cards/${card}.svg` : `http://localhost:7000/public/assets/cards/${card}.svg`;
  img.onload = () => resolve(img);
});

export default generateCardImage;
