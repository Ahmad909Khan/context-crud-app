import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserList() {

    const { users, setEditMode, setSelectedUser, deleteUser } = useContext(UserContext);

    const editHandler = (user) => {
        setEditMode(true)
        setSelectedUser(user)
    }

    return <div className="col-md-6">
        <h2>List Of Users: </h2>
        <table className="table">
            <thead>
                <tr className="fw-bold">
                    <td className="col-2">Sr. No</td>
                    <td className="col-5">Name</td>
                    <td className="text-center col-5">Actions</td>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr className="mx-4" key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>
                            <button
                                className="btn btn-warning m-2 my-md-0"
                                onClick={() => editHandler(user)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger m-2 my-md-0"
                                onClick={() => deleteUser(index)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
}

export default UserList