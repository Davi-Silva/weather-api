import fetch from 'node-fetch'

export const currentWeather = async (req, res) => {
  try {
    const { city, state, country, units } = req.query

    console.log(req.query)

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=${units}&appid=${process.env.OPENWEATHER_API_KEY}`)
    const data = await response.json()

    return res.status(200).send(data)
  } catch (err) {
    console.error(err)
    return res.status(500).send({
      error: err.message
    })
  }
}