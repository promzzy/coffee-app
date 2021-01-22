import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageLayout from './users/components/layouts/PageLayout'
import HomePage from './routes/userRoute/Index'
import CreateOrder from './routes/userRoute/order/CreateOrder'
import CoffeeDetails from './routes/userRoute/coffee/CoffeeDetails'
import Services from './routes/userRoute/services/Services'
import About from './routes/userRoute/about/About'
import ContactUs from './routes/userRoute/contactUs/ContactUs'

//ADMIN IMPORTS
import AdminLayout from './admin/adminLayout/AdminLayout'
import AdminHomePage from './routes/admin/index'

function App() {

const AppRoute = ({component:Component, layout:Layout, ...rest})=>(
  <Route {...rest} render={props=>(<Layout><Component {...props} ></Component></Layout>)}></Route>
)

  return (
    <Router>
    

      <AppRoute exact path="/" component={HomePage} layout={PageLayout} /> 

      <AppRoute exact path="/about/aboutus" component={About} layout={PageLayout} />

      <AppRoute exact path="/services/services" component={Services} layout={PageLayout} />

      <AppRoute exact path="/contact/contactUs" component={ContactUs} layout={PageLayout} />

      <AppRoute exact path="/coffee/details/:id" component={CoffeeDetails} layout={PageLayout} />

      <AppRoute  exact path={["/order/createOrder", "/order/createOrder/:id"]} component={CreateOrder} layout={PageLayout} />



{/* Addmin Routes */}

    <AppRoute exact path="/admin" component={AdminHomePage} layout={AdminLayout} />


      {/* <Route exact path="/">
        <HomePage />
      </Route> */}
      
      {/* <Route exact path={["/order/createOrder", "/order/createOrder/:id"]}>
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
</Route> */}

      
    </Router>

  );
}

export default App;
