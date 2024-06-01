import React from 'react'

interface MenuButtonProps {
	menuImage: string,
	menuName: string,
	menuPrice: number,
}

const MenuButton: React.FC<MenuButtonProps> = ({menuImage, menuName, menuPrice}) => {

	return (
		<div className="menu-btn">
				<img key={`${menuName}-image`} src={menuImage} alt="Menu Image" style={{width: '80px', height: '80px'}} />
				<h3>{menuName}</h3>
				<p>Price: {menuPrice} KGS</p>
		</div>
	)
}

export default MenuButton