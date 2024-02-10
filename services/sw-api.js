const baseUrl = 'https://swapi.dev/api/starships'

export async function getAllStarships() {
  try {
    const res = await fetch(`${baseUrl}`)
    return res.json()
  } catch (err) {
    console.log('🚨', err);
  }
}

export async function getStarshipData(shipId) {
  try {
    const res = await fetch(`${baseUrl}/${shipId}`)
    return res.json()
  } catch (err) {
    console.log('🚨', err);
  }
}
