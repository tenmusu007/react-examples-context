<<<<<<< HEAD
import { useReducer } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('adding to cart', state);
      const product = action.payload;
      // if cart is empty, add the product to the list
      if (state.cart.length === 0)
        return { cart: [{ ...product, quantity: 1 }] };
      //check if product is in the list
      const productIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (productIndex === -1)
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      const productSelected = state.cart[productIndex];
      // update only selected product, increasing the quantity by 1
      const updatedCartList = state.cart.map((item) => {
        if (item.id === productSelected.id) {
          return {
            ...productSelected,
            quantity: productSelected.quantity + 1,
          };
        } else {
          return item;
        }
      });
      return { cart: updatedCartList };
    case 'REMOVE_ITEM':
      console.log('removing item');
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      return { cart: filteredCart };
    case 'RESET_CART':
      console.log('resetting cart');
      return { cart: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { cart: [], total: 0 });
  // const [cartList, setCartList] = useState([]);
  // const addToCart = (product) => {
  //   //if list is not empty
  //   if (cartList.length > 0) {
  //     //check if product is in the list
  //     const productIndex = cartList.findIndex((item) => item.id === product.id);
  //     // if includes
  //     if (productIndex !== -1) {
  //       const productSelected = cartList[productIndex];
  //       // update only selected product, increasing the quantity by 1
  //       const updatedCartList = cartList.map((item) => {
  //         if (item.id === productSelected.id) {
  //           return {
  //             ...productSelected,
  //             quantity: productSelected.quantity + 1,
  //           };
  //         } else {
  //           return item;
  //         }
  //       });
  //       setCartList(updatedCartList);
  //     } else {
  //       // if not included
  //       setCartList([...cartList, { ...product, quantity: 1 }]);
  //     }
  //   } else {
  //     setCartList([{ ...product, quantity: 1 }]);
  //   }
  // };
  const calculateTotal = () => {
    return state.cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  /*
  [{id:1},{id:2}, ...]
  [{id:2}, ...]
  */
  // const removeItem = (id) => {
  //   setCartList(
  //     //   cartList.filter((item) => {
  //     //     return item.id !== id;
  //     //   })
  //     // same thing
  //     // !==
  //     cartList.filter((item) => item.id !== id)
  //   );
  // };
  return (
    <CartContext.Provider value={{ state, dispatch, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
=======
import { Component, createContext } from 'react';

export const CartContext = createContext();

export class CartProvider extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addToCart(newProduct) {
    const { cartList } = this.state;
    //check if cart is not empty
    if (cartList.length > 0) {
      let updatedProduct;
      const found = cartList.find((item) => item.id === newProduct.id);
      if (found) {
        // if product was found in cart
        updatedProduct = { ...found, quantity: found.quantity + 1 };
        const newCartList = cartList.map((item) => {
          if (item.id === updatedProduct.id) {
            return updatedProduct;
          } else {
            return item;
          }
        });
        this.setState({ cartList: newCartList });
      } else {
        // not found in cart
        updatedProduct = { ...newProduct, quantity: 1 };
        this.setState({ cartList: [...cartList, updatedProduct] });
      }
    } else {
      // cart is empty
      this.setState({ cartList: [{ ...newProduct, quantity: 1 }] });
    }
  }

  calculateTotal() {
    return this.state.cartList.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
  removeItem(id) {
    const filteredList = this.state.cartList.filter((item) => item.id !== id);
    this.setState({ cartList: filteredList });
  }
  render() {
    return (
      <CartContext.Provider
        value={{
          cartList: this.state.cartList,
          addToCart: this.addToCart,
          calculateTotal: this.calculateTotal,
          removeItem: this.removeItem,
        }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
