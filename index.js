const axios = require('axios')

const main = async () => {
	try {
		const values = await axios({
			method: 'get',
			url: `https://unitrans.ucdavis.edu/routes/stop_list/?route=K`,
			headers: {
				'Accept': '*/*',
				'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
				'X-Requested-With': 'XMLHttpRequest'
			}
		})
		console.log(values)
	} catch (error) {
		console.log(error)
	}
}

main()