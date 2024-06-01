import '../../App.css';

import React from 'react';

interface IItemsProps {
	name: string;
	count: number;
	sumItems: () => number,
}

const Order: React.FC<IItemsProps> = ({name,count, sumItems}) => {
	const sum = sumItems();

	return (
		<div className="order-items">
			<h5>{name}</h5>
			<p>x {count}</p>
			<p>{sum} KGS</p>
		</div>
	)
}

export default Order