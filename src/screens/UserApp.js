import { useState } from "react";
import { v4 as uuid } from 'uuid';

import AddUserForm from "../components/AddUserForm";
import UserList from "../components/UserList";
import { UserContext } from "../context/UserContext";

function UserApp() {

    const [users, setUsers] = useState([
        { id: uuid(), name: 'John' },
        { id: uuid(), name: 'Park' }
    ]);
    const [editMode, setEditMode] = useState(false);
    const [selectedUser, setSelectedUser] = useState({ id: null, name: '' });

    const addNewUser = (newUser) => {
        setUsers([...users, newUser])
    }

    const updateUser = (id, updatedUser) => {
        setUsers(
            users.map((user) => user.id === id ? updatedUser : user)
        )
    }

    const deleteUser = (selectedIndex) => {
        (
            setUsers(
                users.filter((item, index) => index !== selectedIndex))
        )
    }

    return (
        <UserContext.Provider value={{ users, setUsers, editMode, setEditMode, selectedUser, setSelectedUser, addNewUser, updateUser, deleteUser }}>
            <div className="row p-4">
                <UserList />
                <AddUserForm />
            </div>
        </UserContext.Provider>
    )
}

export default UserApp;