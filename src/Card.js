import {
  Button,
  Card
} from 'antd';
const Cards=({data,setData,title,stage})=>{
  const handleNext=(item)=>{
    let temp=[...data]
    let index=temp.indexOf(item)
    if (temp[index].stage<4){
      temp[index].stage+=1
      setData(temp)
    }
  }
  const handleBack=(item)=>{
    let temp=[...data]
    let index=temp.indexOf(item)
    if (temp[index].stage>1){
      temp[index].stage-=1
      setData(temp)
    }
  }
  const handleDelete=(item)=>{
    let temp=[...data]
    let index=temp.indexOf(item)
    temp.splice(index,1)
    setData(temp)
  }
    return(
        <Card title={title} bordered={true} >
              <ul >
                {data.filter(f=>f.stage==stage).map(item=>{
                  return (
                    <>
                      <li style={{listStyleType: 'none',marginBottom:'20px'}}>{item.name}</li>
                      {item.stage==1
                      ?<Button type="primary" onClick={()=>handleBack(item)} disabled>back</Button>
                      :<Button type="primary" onClick={()=>handleBack(item)}>back</Button>}
                      
                      <Button type="primary" onClick={()=>handleDelete(item)} danger style={{ marginLeft: '10px',marginRight: '10px',marginBottom:'20px' }}>delete</Button>

                      {item.stage==4
                      ?<Button type="primary" onClick={()=>handleNext(item)} disabled>next</Button>
                      :<Button type="primary" onClick={()=>handleNext(item)}>next</Button>}
                      
                    </>
                  )
                })}
              </ul>
        </Card>
    )
}
export default Cards;