import axios from 'axios'

const apis = {
	token: 'https://gateway.apiserpro.serpro.gov.br/token',
	nfe: 'https://gateway.apiserpro.serpro.gov.br/consulta-nfe-df/api/v1/nfe/'
}

class Serpro {

	#key = null
	#secret = null
	#token = null
	#access_token = null

	constructor(key, secret){

		if(!key || !secret)
			throw new Error('Key and secret must not be nullable')

		this.key = key
		this.secret = secret

	}

	async getNewToken(){

		const base64credentials = btoa(`${this.key}:${this.secret}`)

		return await axios.post(apis.token, new URLSearchParams({
			'grant_type': 'client_credentials'
		}), {
			headers: {
				'Authorization': `Basic ${base64credentials}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			}
		}).then(r => {

			const { access_token } = r.data

			this.access_token = access_token

			return r.data

		})

	}

	async searchNFE(nfe){

		if(!nfe)
			throw new Error('NFE key is required')

		nfe = nfe.trim().replace(/\s/g, '')

		return await axios.get(`${apis.nfe}${nfe}`, {
			headers: {
				'Authorization': `Bearer ${this.access_token}`,
				'Accept': 'application/json',
			}
		}).then(r => r.data)

	}

}

export default { Serpro }
export { Serpro }
