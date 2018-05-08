const getRandomFilm = (filmData) => {
  const ranIndex = findRanIndex(filmData.count);
  const ranFilm = filmData.results[ranIndex];
  const openingCrawl = ranFilm.opening_crawl;
  const title = ranFilm.title;
  const releaseYear = ranFilm.release_date.slice(0, 4);

  return ({
    openingCrawl,
    title,
    releaseYear
  });
}

const findRanIndex = (filmCount) => {
  const number = Math.floor(Math.random(1) * 7);
  return number;
}

export default getRandomFilm;