export const getRequest = async url => {
  const result = await fetch(url)
  return result.json()
}
