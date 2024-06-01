import React from 'react'

interface MenuButtonProps {
	menuImage: string,
	menuName: string,
	menuPrice: number,
	onAddItem: React.MouseEventHandler<HTMLDivElement>,
}

const MenuButton: React.FC<MenuButtonProps> = ({menuImage, menuName, menuPrice, onAddItem}) => {

	return (
		<div className="menu-btn" onClick={onAddItem}>
				<img key={`${menuName}-image`} src={menuImage} alt="Menu Image" style={{width: '80px', height: '80px'}} />
				<h3>{menuName}</h3>
				<p>Price: {menuPrice} KGS</p>
		</div>
	)
}

export default MenuButton