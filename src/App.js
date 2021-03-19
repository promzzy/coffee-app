import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageLayout from './components/layouts/PageLayout'
import HomePage from './route/Index'
import CreateOrder from './route/order/CreateOrder'
import CoffeeDetails from './route/coffee/CoffeeDetails'
import Services from './route/services/Services'
import About from './route/about/About'
import ContactUs from './route/contactUs/ContactUs'


function App() {
  return (
    <Router> 
      <PageLayout> 

        <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>

      <Route exact path={["/order/createOrder", "/order/createOrder/:id"]}>
        <CreateOrder />
      </Route>

      <Route path="/coffee/details/:id">
      <CoffeeDetails />
      </Route>

<Route path="/services/services">
  <Services />
</Route>

<Route path="/about/aboutus">
  <About />
</Route>

<Route path="/contact/contactUs">
  <ContactUs />
</Route>

</Switch>

</PageLayout>
    </Router>


  );
}

export default App;
