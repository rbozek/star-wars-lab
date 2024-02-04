const baseUrl = 'https://sei-dnd-api.herokuapp.com'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}