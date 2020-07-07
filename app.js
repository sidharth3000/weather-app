const request = require('request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if(!location){
	console.log('Please provide a address')
}else {
	geocode(location, (error, data) => {

	if(error){
		console.log(error)
		return
	}

	forecast(data.longitude, data.latitude, (error, forecastData) => {

		if(error){
			console.log(error)
			return
		}

		console.log(data.location)
		console.log(forecastData)

	})

})
	
}

