fetchCharacterInfo = jest.fn()
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => {
    throw(new Error('Error adding grocery'))
  })

 fetchSpeciesInfo = jest.fn()
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => {
    throw(new Error('Error adding grocery'))
  })

 fetchHomeworld = jest.fn()
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => {
    throw(new Error('Error adding grocery'))
  })

 fetchPlanetInfo = jest.fn()
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => {
    throw(new Error('Error adding grocery'))
  })

fetchResident = jest.fn()
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => {
    throw(new Error('Error adding grocery'))
  })


export {
  fetchResident, 
  fetchPlanetInfo,
  fetchCharacterInfo,
  fetchHomeworld,
  fetchSpeciesInfo
}
  