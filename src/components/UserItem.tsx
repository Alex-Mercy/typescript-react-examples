import React, { FC } from 'react'
import { UserType } from '../types/types'

interface UserItemProps {
    user: UserType;
    onClick: (user: UserType) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
    return (
        <div onClick={() => {onClick(user)}} style={{ padding: 15, border: '1px solid grey' }}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    )
}

export default UserItem