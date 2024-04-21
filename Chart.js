import React from 'react'
import{ResponsiveContainer,LineChart,Line, XAxis,YAxis, CartesianGrid , Legend,Tooltip} from "recharts"

const Chart = () => {
    const da= [{
        name:"python",
        fees:6,
        student:6
      }, {
        name:"c++",
        fees:18,
        student:25
      },{
        name:"java",
        fees:10,
        student:8
      },{
        name:"ja",
        fees:10,
        student:8
      },
      {
        name:"ja",
        fees:10,
        student:8
      },
      {
        name:"golang",
        fees:16,
        student:9
      }]
    
  return (
  
      <div className='chart'>
   <h1>chart</h1>

   <ResponsiveContainer width="100%" aspect={3}>
    <LineChart data={da} width={500} height={400} margin={{top:0, left:0,  right:0, bottom:0} }>
    <CartesianGrid/>
    <XAxis dataKey={"name"}  interval={"preserveStartEnd"}/>
    <YAxis dataKey={"student"}/>
    <Tooltip/>
    <Legend />
    
      <Line dataKey="name" stroke="red" activeDot={{r:8}}/>
      <Line dataKey="student" activeDot={{r:8}} />
    </LineChart>
   </ResponsiveContainer></div>

  )
}

export default Chart
