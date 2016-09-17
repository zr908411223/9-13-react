import React, { PropTypes } from 'react';
import{ hashHistory } from 'react-router';

class Card extends React.Component {
  handleJump(){
    let address = this.props.url;
    hashHistory.push(`/blog/${address}`)
  }
  render () {
    return(
      <div>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={this.props.img} />
            <div className="caption">
              <h3>{this.props.title}</h3>
              <p>{this.props.desc}</p>
              <p><a className="btn btn-primary" role="button" onClick={this.handleJump.bind(this)}>Button</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
Card.defaultProps={
  title:'第一天',
  desc:'描述1',
  img:'./src/images/2.jpg'
}

export default Card;
