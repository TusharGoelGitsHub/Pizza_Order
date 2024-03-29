import PizzaOrderForm from "./components/PizzaOrderForm/PizzaOrderForm";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import OrdersDetailsPage from "./components/OrdersDetailsPage/OrdersDetailsPage";
import { useEffect, useState } from "react";
import { IPizzaOrder } from "./components/PizzaOrderForm/PizzaOrderForm.types";

function App() {
  const [orderData, setOrderData] = useState<IPizzaOrder[]>([]);
  const [orderIdCounter, setOrderIdCounter] = useState<number>(1);
  useEffect(() => {
    console.log(orderData);
  }, [orderData]);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PizzaOrderForm
                orderData={orderData}
                setOrderData={setOrderData}
                orderIdCounter={orderIdCounter}
                setOrderIdCounter={setOrderIdCounter}
              />
            }
          />
          <Route
            path="/detailsSection"
            element={
              <OrdersDetailsPage
                orderData={orderData}
                setOrderData={setOrderData}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
