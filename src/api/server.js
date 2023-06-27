import {request} from "@/api/http";

export const server = () => {
  const _url = 'https://www.travelpayouts.com/'
  const _token = 'token=88d2f1abec8330722b86dbca00bcc838'

  // Get the city code
  const getCodeCity = async (from, to) => {
    const res = await request(`${_url}widgets_suggest_params?q=Из%20${from}%20в%20${to}`)

    return res
  }

  // Get the tickets
  const getTickets = async (origin, destination, date, tripClass) => {
    const res = await  request(`
      http://localhost:8080/v2/prices/latest?origin=${origin}&destination=${destination}&beginning_of_period=${date}&period_type=year&one_way=false&sorting=price&trip_class=${tripClass}&trip_duration=1&currency=rub&market=ru&limit=30&page=1&${_token}`,
        {
          headers: {
            "Accept-Encoding": 'gzip, deflate',
            "Access-Control-Allow-Origin": "*"
          }
        }
    )

    return res
  }

  return {getCodeCity, getTickets}
}