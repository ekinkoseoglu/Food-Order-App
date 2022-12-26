import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./shared/store/CartProvider";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};
	return (
		<Fragment>
			<CartProvider>
				{cartIsShown && <Cart onHideCartModal={hideCartHandler} />}
				<Header onShowCartModal={showCartHandler} />
				<main>
					<Meals />
				</main>
			</CartProvider>
		</Fragment>
	);
}

export default App;
