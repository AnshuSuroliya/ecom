import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAllOrder } from "../../../user/slices/order";
import "./Table.css";

const ShowAllOrders=()=>{
    const dispatch=useDispatch();
    const AllData=useSelector((state)=>state.order.showAllData);
    useEffect(()=>{
        dispatch(showAllOrder());
    },[])
    return(
        <div>
            {AllData.length===0 ? (<h2 className="flex justify-center">No Orders Found</h2>) :
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
                {AllData.map((order)=>{
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
export default ShowAllOrders;