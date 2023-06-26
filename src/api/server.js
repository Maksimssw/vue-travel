import {request} from "@/api/http";

export const server = () => {
  const _url = 'https://www.travelpayouts.com/'

  // Get the city code
  const getCodeCity = async (from, to) => {
    const res = await request(`${_url}widgets_suggest_params?q=Из%20${from}%20в%20${to}`)

    return res
  }

  return {getCodeCity}
}