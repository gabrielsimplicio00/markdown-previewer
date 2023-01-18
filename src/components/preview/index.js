import './preview.css'
import React from 'react'

class Preview extends React.Component {

  render() {
    return (
      // {this.props.text}
      <div className='Preview'>
        <div className='toolbar-preview'>Preview</div>
        <div className='text-preview'>
          <div dangerouslySetInnerHTML={{__html: this.props.text}}/>
        </div>
      </div>
    )
  }
}

export default Preview