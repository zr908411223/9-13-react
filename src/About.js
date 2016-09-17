import React from 'react';
import axios from 'axios';

class About extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/zr908411223')
      .then( (res) => {
        this.setState({
          data:res.data,
          wait:false
        })
      } )
  }
  render(){
    return(
      <div>
        {this.state.wait ? '正在读取数据...' :
        <div>
          <p>{this.state.data.name}</p>
          <img src={this.state.data.avatar_url} />
        </div>
        }
      </div>
    )
  }
}
export default About;
