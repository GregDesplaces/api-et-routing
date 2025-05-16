const API_URL = 'https://dummyjson.com/products'

export const getProducts = async (slug = null) => {
	let url = API_URL
	if (slug) url = `${API_URL}/category/${slug}`

	try {
		const response = await fetch(url)
		const data = await response.json()
		if (!response.ok) {
			throw new error('Erreur dans la récupération des produits')
		}
		return data.products
	} catch (e) {
		throw new error('Erreur dans la récupération des produits')
	}
}


export const getProductById = async (id) => {
	try {
		const response = await fetch(`${API_URL}/${id}`)
		const product = await response.json()
		if (!response.ok) {
			throw new error('Erreur dans la récupération du produit')
		}
		return product
	} catch (e) {
		throw new error('Erreur dans la récupération du produit')
	}
}

export const getAllCategories = async () => {
	try {
		const response = await fetch(`${API_URL}/categories`)
		const categories = await response.json()
		if (!response.ok) {
			throw new error('Erreur dans la récupération des catégories')
		}
		return categories
	} catch (e) {
		throw new error('Erreur dans la récupération des catégories')
	}
}