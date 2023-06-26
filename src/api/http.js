export const request = async (url) => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`url: ${url}, status: ${res.status}`)
    }

    const data = await res.json()
    if (data.length === 0) throw new Error()

    return data
  } catch (e) {
    console.log(e)
  }
}
