import React from 'react'

function RoomName(props) {
    const {data,onChange} = props
    console.log("room",data.text);
    
    return (
        <div>
            <div>Update Room Name</div>
            <input value={data.text} onChange={onChange}/>
        </div>
    )
    }
export default React.memo(RoomName)    