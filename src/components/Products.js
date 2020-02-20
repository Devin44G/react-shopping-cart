import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';

// Components
import Product from './Product';

const Products = () => {
	const {products, addItem} = useContext(ProductContext);
	console.log(products);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
			<h1>Hi</h1>
		</div>
	);
};

export default Products;
