import '../../App.css';
import biscuitImage from '../../assets/biscuit.png';
import burgerImage from '../../assets/burger.png';
import cakeImage from '../../assets/cake.png';
import coffeeImage from '../../assets/coffee.png';
import colaImage from '../../assets/cola.png';
import cookiesImage from '../../assets/cookies.png';
import freeImage from '../../assets/free.png';
import hotdogImage from '../../assets/hotdog.png';
import icecreamImage from '../../assets/icecream.png';
import pancakesImage from '../../assets/pancakes.png';
import pizzaImage from '../../assets/pizza.png';
import wafflesImage from '../../assets/waffles.png';
import MenuButton from '../MenuButton/MenuButton.tsx'



interface Imenu {
	name: string;
	price: number;
	image: string;
}
const Menu = () => {

	const MENU: Imenu[] = [
		{name: 'Biscuit', price: 180, image: biscuitImage},
		{name: 'Burger', price: 250, image: burgerImage},
		{name: 'Cake', price: 110, image: cakeImage},
		{name: 'Coffee', price: 60, image: coffeeImage},
		{name: 'Cola', price: 160, image: colaImage},
		{name: 'Cookies', price: 160, image: cookiesImage},
		{name: 'Free', price: 150, image: freeImage},
		{name: 'Hotdog', price: 250, image: hotdogImage},
		{name: 'Icecream', price: 90, image: icecreamImage},
		{name: 'Pancakes', price: 190, image: pancakesImage},
		{name: 'Pizza', price: 380, image: pizzaImage},
		{name: 'Waffles', price: 170, image: wafflesImage},
	];


	return (
		<div className="container">
			<div className="menu">
				{MENU.map((item, index) => (
					<MenuButton key={index}
											menuImage={item.image}
											menuName={item.name}
											menuPrice={item.price}/>
				))}
			</div>

		</div>
	)
}

export default Menu