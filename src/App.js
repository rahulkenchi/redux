import './App.css';
import Navigation from './component/Navigation';
import Products from './component/Products';
import Cart from './component/Cart'
import { createStore } from 'redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

const initialState = { cart: [] }

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD': return { cart: [...state.cart, action.payload] }
    default: return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <Router>
      <Provider store={store}>
        < Navigation />
        <Switch>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/products" exact component={Products}></Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
