import React, { PropTypes } from 'react';
import{  hashHistory } from 'react-router';

class Blog extends React.Component {
  render () {
    return(
      <div>
        {this.props.params.zu == 'a' ? '这是a' :
          this.props.params.zu == 'b' ? '这是b' :
          this.props.params.zu == 'c' ? '这是c' :
          this.props.params.zu == 'd' ? '这是d' : '无内容'
      }
      </div>
    )
  }
}

export default Blog;
