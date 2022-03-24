import { useContext, useEffect, useRef } from "react";
import { v4 as uuid } from 'uuid';
import { UserContext } from '../context/UserContext';

function AddUserForm() {

    const { editMode, setEditMode, selectedUser, addNewUser, updateUser } = useContext(UserContext)

    const nameRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        let name = nameRef.current.value;
        if (editMode) {
            let user = {
                id: selectedUser.id,
                name
            };
            updateUser(user.id, user);
            setEditMode(false);
            nameRef.current.value = '';
        }
        else {
            let newUser = {
                id: uuid(),
                name
            }

            addNewUser(newUser);
            nameRef.current.value = '';
        }
    }

    useEffect(() => {
        nameRef.current.value = selectedUser.name;
    }, [selectedUser])

    return <div className="col-md-4 p-5">
        <h2 className="my-1"><u>{editMode ? "Edit this User" : "Add New User"}</u></h2>
        <form onSubmit={handleSubmit}>
            <div className="my-2">
                <label>User's name: </label>
                <input
                    type="text"
                    className="form-control"
                    ref={nameRef}
                    required
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
            >
                {editMode ? "Edit User" : "Add User"}
            </button>
        </form>
    </div>
};

export default AddUserForm;