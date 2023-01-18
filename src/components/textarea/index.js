import React from "react"
import Preview from "../preview"
import './textarea.css'
import { marked } from 'marked'

class Textarea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const markdown = marked(this.state.text)
    return (
      <div className="Textarea">
        <div className="toolbar">Editor</div>
        <textarea className="editor" onChange={this.handleChange}>
        </textarea>
        <Preview text={markdown}/>
      </div>
    )
  }
}

export default Textarea