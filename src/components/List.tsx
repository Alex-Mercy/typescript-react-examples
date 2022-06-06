import React, { FC } from 'react'

type PropType<T> = {
    items: Array<T>;
    renderItem: (item: T) => React.ReactNode;
}

export default function List<T> (props: PropType<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}