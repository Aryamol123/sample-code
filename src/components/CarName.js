import React from 'react'
function CarName(props) {
    const {data,onChange} = props;
    console.log("car",data.text);
    
    return (
        <div>
            <div>Update Car Name</div>
            <input value={data.text} onChange={onChange}/>
        </div>
    )
    }

    export default React.memo(CarName);