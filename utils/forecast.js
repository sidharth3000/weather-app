const request = require('request')

const forecast = (lat, long, callback) => {

	const url = 'http://api.weatherstack.com/current?access_key=57fb3b42310c516f49d6df99f056a909&query=' + lat + ',' + long

	request({url: url, json: true}, (error, response) => {
		if (error) {
			callback('Unable to connect to weather service', undefined)
		}else if (response.body.error) {
			callback('Unable to find location', undefined)
		}else {
			callback(undefined, response.body.current.weather_descriptions[0] + " It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
		}
	})
}

module.exports = forecast