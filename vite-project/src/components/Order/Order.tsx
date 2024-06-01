import '../../App.css';
import stockImage from '../../assets/stock.png';

import React from 'react';

interface IItemsProps {
	name: string;
	count: number;
	sumItems: () => number,
	onRemove: React.MouseEventHandler<HTMLButtonElement>;
}

const Order: React.FC<IItemsProps> = ({name,count, sumItems,onRemove}) => {
	const sum = sumItems();

	return (
		<div className="order-items">
			<h5>{name}</h5>
			<p>x {count}</p>
			<p>{sum} KGS</p>
			<button onClick={onRemove}
							className="stock"><img
							src={stockImage} alt="Stock Image"
							style={{ width: '70px', height: '70px' }} />
			</button>
		</div>
	)
}

export default Order