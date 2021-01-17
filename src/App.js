import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageLayout from './users/components/layouts/PageLayout'
import HomePage from './routes/userRoute/Index'
import CreateOrder from './routes/userRoute/order/CreateOrder'
import CoffeeDetails from './routes/userRoute/coffee/CoffeeDetails'
import Services from './routes/userRoute/services/Services'
import About from './routes/userRoute/about/About'
import ContactUs from './routes/userRoute/contactUs/ContactUs'

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

      <Route exact path="/coffee/details/:id">
      <CoffeeDetails />
      </Route>

<Route  exact path="/services/services">
  <Services />
</Route>

<Route exact path="/about/aboutus">
  <About />
</Route>

<Route exact path="/contact/contactUs">
  <ContactUs />
</Route>


        </Switch>
      </PageLayout>
    </Router>

  );
}

export default App;
