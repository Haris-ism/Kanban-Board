import {
  Button, Col, Input, Row
} from 'antd';
import { useState } from 'react';
import './App.css';
import Cards from './Card';

function App() {
  const [input,setInput]=useState("")
  const [data,setData]=useState([
    {
      name:"Task 1",
      stage:1
    },
    {
      name:"Task 2",
      stage:2
    },
    {
      name:"Task 3",
      stage:1
    }
  ])
  const handleChange=(e)=>{
    setInput(e.target.value)
  }
  const handleInput=()=>{
    if (input!=""){
      setData(prev=>[...prev,{name:input,stage:1}])
      setInput("")
    }
  }
  return (
    <div className="App" >
      <Input.Group compact style={{ marginTop: '50px',marginBottom: '50px' }}>
        <Input placeholder="New Task Name" style={{ width: '200px' }} onChange={handleChange} value={input}/>
        <Button type="primary" onClick={handleInput}>Create Task</Button>
      </Input.Group>
      <div className="site-card-wrapper" >
        <Row gutter={16}>
          <Col span={6}>
            <Cards data={data} setData={setData} title={"Backlog"} stage={1}/>
          </Col>
          <Col span={6}>
            <Cards data={data} setData={setData} title={"To Do"} stage={2}/>
          </Col>
          <Col span={6}>
            <Cards data={data} setData={setData} title={"On Going"} stage={3}/>
          </Col>
          <Col span={6}>
            <Cards data={data} setData={setData} title={"Done"} stage={4}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
