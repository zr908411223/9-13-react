import React from 'react';
import Card from './Card.js';
import Bg from './images/2.jpg';


let cardDate = [
  {title:'第一天',desc:'描述1',img:Bg,url:'a'},
  {title:'第二天',desc:'描述2',img:Bg,url:'b'},
  {title:'第三天',desc:'描述3',img:Bg,url:'c'},
  {title:'第四天',desc:'描述4',img:Bg,url:'d'}
]

class Work extends React.Component{
  render(){
    let styles={
      div:{
        backgroundColor:'teal'
      }
    }
    return(
      <div className="container-fluid">
        <div className="row">
          {cardDate.map( (item,i) => <Card {...item} key = {i} /> )}
        </div>
      </div>
    )
  }
}
export default Work;
