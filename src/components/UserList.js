import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserList() {

    const { users, setEditMode, setSelectedUser, deleteUser } = useContext(UserContext);

    const editHandler = (user) => {
        setEditMode(true)
        setSelectedUser(user)
    }

    const mappingUsers = (
        users.map((user, index) => (
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
        ))
    );

    const noUsers = (
        <tr>
            <td
                colspan="3"
                className="text-center">
                No Users in the list
            </td>
        </tr>
    )

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
                {users.length > 0 ? mappingUsers : noUsers}
            </tbody>
        </table>

    </div>
}

export default UserList