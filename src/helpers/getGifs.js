export const getGifs = async (category) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=5S8H7aySEN631hshyKQ2rC5DQfO54be5&q=${category}&limit=10`
  );
  const { data } = await res.json();

  const gifs = data.map(({ id, title, images }) => ({
    id: id,
    title: title,
    url: images.downsized_medium.url,
  }));

  return gifs;
};
