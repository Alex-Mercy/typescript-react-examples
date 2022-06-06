import React, { FC, useRef, useState } from 'react'

type PropType = {

}

const EventExample: FC<PropType> = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const dragHandler =(e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag');
    }
    
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    const leaveHeandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('Drop');
        
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='управляемый' />
            <input ref={inputRef} type="text" placeholder='неуправляемый' />
            <button onClick={clickHandler}>Event</button>
            <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'red' }}></div>
            <div 
            style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 10 }}
            onDrop={dropHandler}
            onDragLeave={leaveHeandler}
            onDragOver={dragWithPreventHandler}
            >

            </div>
        </div>
    )
}

export default EventExample