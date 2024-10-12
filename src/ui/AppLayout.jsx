import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import Search from "../features/order/SearchOrder";
function AppLayout(){
          const navigation=useNavigation();
          const isLoading=navigation.state ==="loading"
                
       return (
       <div className="layout">  
       {isLoading && <Loader/>}           
         <Header/>
         <Search/>
       <main>
        <h1>content</h1>
        <Outlet/>
       </main>
     
     <CartOverview/>
     
     
     
      </div>


       )

}
export default AppLayout