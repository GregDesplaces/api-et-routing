const API_URL = 'https://dummyjson.com/products'

export const getAllProducts = async () => {
	try {
		const response = await fetch(API_URL)
		const data = await response.json()
		if (!response.ok) {
			throw new error('Erreur dans la requête')
		}
		return data.products
	} catch (e) {
		throw new error('Erreur dans la requête')
	}
}

export const getProductById = async (id) => {
	try {
		const response = await fetch(`${API_URL}/${id}`)
		const product = await response.json()
		if (!response.ok) {
			throw new error('Erreur dans la requête')
		}
		return product
	} catch (e) {
		throw new error('Erreur dans la requête')
	}
}