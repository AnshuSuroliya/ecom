import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCart } from "../../user/slices/cart";
import { deleteUser, getAllUser } from "../../user/slices/register";
import "./AllUser.css"

const AllUser=()=>{
    const users=useSelector((state)=>state.register.AllUser);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        dispatch(getAllUser());
    },[])
    console.log(users);
    return(
        <div>
            {users.length===0 ? (<h2 className="flex justify-center">No Users Found</h2>) :
        <div className="App">
            <h2 className="mb-5 text-lg">List Of Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user)=>{
                        return(
                        <tr key={user.id}>
                            <td className="table-data">{user.firstName}</td>
                            <td className="table-data">{user.lastName}</td>
                            <td className="table-data">{user.email}</td>
                            <td className="table-data">{user.gender}</td>
                            <td className="table-data">{user.role}</td>
                            <td className="table-data"> <button className="rounded bg-indigo-400" onClick={()=>[dispatch(deleteUser(user.id)),navigate(0)]}>Delete</button></td>
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
export default AllUser;