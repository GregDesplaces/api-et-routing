
export const setCart = (product, quantity = 1) => {
	const products = JSON.parse(localStorage.getItem('cart')) || [];
	
	const existingProductIndex = products.findIndex((item) => item.id === product.id);

	if (existingProductIndex !== -1) {
		products[existingProductIndex].quantity += quantity;
	} else {
		product.quantity = quantity;
		products.push(product);
	}

	localStorage.setItem('cart', JSON.stringify(products));
};

export const getCart = () => {
	return JSON.parse(localStorage.getItem('cart')) || null;
};