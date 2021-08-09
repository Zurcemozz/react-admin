import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './app.css'
import Sidebar from './components/sidemenu/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import NewProduct from './pages/newProduct/NewProduct'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/product/ProductList'
import Product from './pages/productItem/Product'
import User from './pages/user/User'
import UserList from './pages/userList/UserList'
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products/:productId">
            <Product />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
