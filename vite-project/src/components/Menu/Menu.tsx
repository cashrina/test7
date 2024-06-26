import '../../App.css';
import biscuitImage from '../../assets/biscuit.png';
import burgerImage from '../../assets/burger.png';
import cakeImage from '../../assets/cake.png';
import coffeeImage from '../../assets/coffee.png';
import colaImage from '../../assets/cola.png';
import cookiesImage from '../../assets/cookies.png';
import friesImage from '../../assets/fries.png';
import hotdogImage from '../../assets/hotdog.png';
import icecreamImage from '../../assets/icecream.png';
import pancakesImage from '../../assets/pancakes.png';
import pizzaImage from '../../assets/pizza.png';
import wafflesImage from '../../assets/waffles.png';
import MenuButton from '../MenuButton/MenuButton.tsx';
import { useState } from 'react';
import Order from '../Order/Order.tsx';

interface Imenu {
  name: string;
  price: number;
  image: string;
}

interface IMenu {
  name: string;
  count: number;
}
const Menu = () => {
  const [Items, setItems] = useState<IMenu[]>([]);

  const MENU: Imenu[] = [
    { name: 'Biscuit', price: 180, image: biscuitImage },
    { name: 'Burger', price: 250, image: burgerImage },
    { name: 'Cake', price: 110, image: cakeImage },
    { name: 'Coffee', price: 160, image: coffeeImage },
    { name: 'Cola', price: 100, image: colaImage },
    { name: 'Cookies', price: 120, image: cookiesImage },
    { name: 'Fries', price: 150, image: friesImage },
    { name: 'Hot dog', price: 250, image: hotdogImage },
    { name: 'Ice cream', price: 90, image: icecreamImage },
    { name: 'Pancakes', price: 190, image: pancakesImage },
    { name: 'Pizza', price: 380, image: pizzaImage },
    { name: 'Waffles', price: 170, image: wafflesImage },
  ];

  const addItem = (name: string) => {
    setItems((prevState) => {
      const existingItem = prevState.find((item) => item.name === name);
      if (existingItem) {
        return prevState.map((item) =>
          item.name === name ? { ...item, count: item.count + 1 } : item,
        );
      } else {
        return [...prevState, { name: name, count: 1 }];
      }
    });
  };

  const getCount = (value: string) => {
    const count = Items.filter((item) => item.name === value);
    const prise = MENU.filter((priseItem) => priseItem.name === value);
    return count[0].count * prise[0].price;
  };

  const removeItem = (deleteItem: string) => {
    setItems((prevState) => {
      const updatedItems = prevState.map((orderItem) => {
        if (orderItem.name === deleteItem && orderItem.count > 0) {
          return { ...orderItem, count: orderItem.count - 1 };
        }
        return orderItem;
      });
      return updatedItems.filter((item) => item.count > 0);
    });
  };

  const getTotalPrise = () => {
    let emptySum = 0;
    Items.forEach((item) => {
      MENU.forEach((info) => {
        if (item.name === info.name) {
          if (item.count > 0) {
            emptySum += item.count * info.price;
          }
        }
      });
    });
    return emptySum;
  };

  const total: number = getTotalPrise();

  return (
    <div className="container">
      <div className="menu">
        {MENU.map((item, index) => (
          <MenuButton
            key={index}
            menuImage={item.image}
            menuName={item.name}
            menuPrice={item.price}
            onAddItem={() => addItem(item.name)}
          />
        ))}
      </div>

      <div className="order">
        <h3>Order Details:</h3>
        <hr />
        {Items.map((createItem, index) => (
          <Order
            key={index}
            name={createItem.name}
            count={createItem.count}
            sumItems={() => getCount(createItem.name)}
            onRemove={() => removeItem(createItem.name)}
          />
        ))}
        <hr />
        <div className="price">
          <b>Total price:</b> <p>{total} KGS</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
