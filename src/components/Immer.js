import React, { useCallback, useState } from "react";
import CarName from "./CarName";
import RoomName from "./RoomName";
import produce from 'immer';
const initialState = [{
    name:'house',
    rooms:[
        {
            name:'room1',
            text:'Room1'
        }
    ]
},
{
    name:'car',
    text:'i20'
}
]

const Immer = () => {
    const [info,setInfo] = useState(initialState)

    const roomChange = useCallback((event) =>{

        setInfo((state) =>{

            const newState = produce(state, (draft) =>{
                draft[0].rooms[0].text = event.target.value; 
            })
            // var newState =[
            //     {                            
            //         ...state[0],
            //         rooms:[
            //             {
            //                 ...state[0].rooms[0],       //*******************************************************
            //                 text:event.target.value     //SHALLOW COPY
            //             }                               //*******************************************************
            //         ]
            //     },
            //     state[1]
            // ];

            // let newState = JSON.parse(JSON.stringify(state))    //*************************************************
            //  newState[0].rooms[0].text = event.target.value;    //DEEP COPY
            return newState;                                    //*************************************************

        }) 
    },[])

    const carChange = useCallback((event) =>{
         setInfo((state) =>{
            const newState = produce(state,(draft) =>{
                draft[1].text = event.target.value  
            })
            // const newState = [
                
            //       state[0],
            //       {
            //         ...state[1],                 //*******************************************************
            //         text:event.target.value      //SHALLOW COPY
            //       }                              //*******************************************************
                

            // ];

            // let newState = JSON.parse(JSON.stringify(state))    //***********************************************
            // newState[1].text = event.target.value               //DEEP COPY
            return newState;                                    //***********************************************
         })
        },[])
  return <div>
     <RoomName data={info[0].rooms[0]} onChange={roomChange}/>
     <CarName data={info[1]} onChange={carChange}/>
  </div>;
};

export default Immer;