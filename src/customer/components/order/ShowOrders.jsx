import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOrder } from "../../../user/slices/order";
import "./Table.css"

const ShowOrders=()=>{
const disptach=useDispatch();
const {loading}=useSelector((state)=>state.order);
const showData=useSelector((state)=>state.order.showOrderData);
const userId=localStorage.getItem("userId");
useEffect(()=>{
    const data={
        userId:userId
    }
    disptach(showOrder(data));
},[])
console.log(showData);
if(loading){
    return <h2>loading...</h2>
}
 return(
    <div>
            {showData.length===0 ? (<h2 className="flex justify-center">No Orders Found</h2>) :
        <div className="App">
            <h2 className="mb-5 text-lg">List Of Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order Date</th>
                        <th>Order Status</th>
                        <th>Total Items</th>
                        <th>Total Price</th>
                        <th>Address</th>
                        <th>Expected Delivery Date</th>
                    </tr>
                </thead>
                <tbody>
                {showData.map((order)=>{
                        return(
                        <tr key={order.id}>
                            <td className="table-data">{order.orderDate}</td>
                            <td className="table-data">{order.orderStatus}</td>
                            <td className="table-data">{order.totalItems}</td>
                            <td className="table-data">{order.totalPrice}</td>
                            <td className="table-data">{order.address.streetAddress},{order.address.city},{order.address.state}</td>
                            <td className="table-data">{order.deliveryDate}</td>
                        </tr>
                        );
            })}
                </tbody>
            </table>
            
        </div>
}
        </div>
 );
}
export default ShowOrders;