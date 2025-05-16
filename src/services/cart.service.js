
export const setCart = (product, quantity = 1, eraseQuantity = false) => {
	const products = JSON.parse(localStorage.getItem('cart')) || [];
	
	const existingProductIndex = products.findIndex((item) => item.id === product.id);

		if (existingProductIndex !== -1) {
			(eraseQuantity) ? products[existingProductIndex].quantity = quantity : products[existingProductIndex].quantity += quantity;
		} else {
			product.quantity = quantity;
			products.push(product);
		}

	localStorage.setItem('cart', JSON.stringify(products));
};

export const deleteProduct = (id) => {
	const products = JSON.parse(localStorage.getItem('cart'))
	const newProducts = products.filter((product) => product.id !== id)
	localStorage.setItem('cart', JSON.stringify(newProducts))
}

export const getCart = () => {
	return JSON.parse(localStorage.getItem('cart')) || [];
};