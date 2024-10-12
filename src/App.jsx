import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home"
import Menu,{Loader as menuLoader} from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import Order,{loader as orderLoader} from "./features/order/Order"
import CreateOrder,{action as createNewOrder} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout"
import Error from "./ui/Error";
     const router=createBrowserRouter([


      {
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
          {
            path:"/",
            element:<Home />
          },
          {
            path:"/menu",
            element:<Menu/>,
            errorElement:<Error/>,
            loader:menuLoader

          },
          {path:"/cart", element:<Cart/>}
          ,{
            path:"/order/new", element:<CreateOrder/>,
            action:createNewOrder
          },
          {
               path:"/order/:orderId",
                element:<Order/>,
                loader:  orderLoader,
                errorElement:<Error/>
                
          }

        ]
      },
  
])

function App(){
   return <RouterProvider router={router} />
} 


export default App;