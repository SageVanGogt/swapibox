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

const getCleanCharacters = (people) => {
  const allPeople = people.results;
  const formattedCharacters = allPeople.map(person => {
    return ({
      name: person.name,
      species: people.species,
      homeworld: 'homeworld',
      homeworldPopulation: 'homeworld population',
    })
  })
  return formattedCharacters;
}

export { getRandomFilm, getCleanCharacters };