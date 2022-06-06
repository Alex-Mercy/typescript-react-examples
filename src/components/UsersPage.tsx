import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserType } from '../types/types';
import List from './List';
import UserItem from './UserItem';

const UsersPage: FC = () => {
    const [users, setUsers] = useState<Array<UserType>>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers()
    }, [])
    async function fetchUsers() {
        try {
            const response = await axios.get<Array<UserType>>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: UserType) =>
                <UserItem
                    onClick={(user) => { navigate('/users/' + user.id) }}
                    user={user}
                    key={user.id}
                />}
        />
    )
}

export default UsersPage