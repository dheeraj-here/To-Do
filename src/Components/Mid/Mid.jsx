import React, { useState } from 'react'
import './mid.css'

export default function Mid() {
    const [arr, setArr] = useState([{
        i:0,
        t:"",
        d:""
    }])
    const [data, setData] = useState({
        title:"",
        desc:""
    })
            
    const addTask = () => {
        if(data.title.length >=3 && data.desc.length >= 3){
            const newItem = {
                i: arr.length,
                t: data.title,
                d: data.desc
            }
            setArr([...arr, newItem])
            setData({
            title:"",
            desc:""
           })
        }
    }

    const handleChange=(e)=> {
        const {name, value} = e.target;
        
        setData({
            ...data,
            [name] : value
        })
    }

    const deleteEle = (index) => {
        let newArr = [];
        if(arr.length === index){
             newArr = [...arr.slice(0, index)]
        }
        else{
             newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
        }
        setArr(newArr);
      };

      const edit =(index) => {
        const a = arr.find((item) => item.i === index)
        if(a){
        setData({
            title:a.t,
            desc: a.d
        })
    }
        deleteEle(index)
      }

  return (
    <>
    <button className='btn' onClick={addTask}>Add Task</button>
    <div className='addtext'>
        <textarea 
        className='tt'
        name='title'
        placeholder='Task Heading'
        value={data.title}
        onChange={handleChange}
        />

        <textarea 
        className='ta'
        name='desc'
        placeholder='Task Description'
        value={data.desc}
        onChange={handleChange}
        />
    </div>
    <div id="mid" className='mid'>
        
        {arr.map((item, index) => (
            item.t && item.d &&(
            <div className='card' key={index}>
            <div className='title'>{item.t}</div>
            <div className='content'>{item.d}</div>
            <button className="delete" onClick={() => deleteEle(index)}>Delete</button>
            <button className="edit"onClick={() => edit(index)}>Edit</button>
            </div>
            )
        ))}
    </div>
    </>
  )
}
