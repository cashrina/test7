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
			<h5 className="order-name">{name}</h5>
			<p className="order-count">x {count}</p>
			<p className="order-sum">{sum} KGS</p>
			<button onClick={onRemove}
							className="stock"><img
							src={stockImage} alt="Stock Image"
							style={{ width: '40px', height: '40px' }} />
			</button>
		</div>
	)
}

export default Order