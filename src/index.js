import React from 'react'
import ReactDOM from 'react-dom'
import Contract from './contract'

const Index = class Index extends React.Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef();

    this.contract = new Contract()
    this.value = ''

    this.state = {
      value: '',
      isValid: false,
      isSending: false,
      tx: null,
      tries: 0
    }
  }

  async componentWillMount() {
    await this.contract.loadContract()
    this.contract.addEventListener((v) => {
      this.setState({ value: v.value })
    })
  }

  onChangeHandler(event) {
    this.value = event.target.value
    console.log(this.value)
    const isValid = this.value > 0
    this.setState({ value:this.value })
  }

  async confirmValue() {
    console.log('fuck ')
    try {
      const tries = this.state.tries + 1
      this.textInput.current.value = ''
      this.setState({tries})
    } catch (err) {
      console.error('Ops, some error happen:', err)
    }
    this.setState({isSending: false})
  }

  render() {
    const loomyAlert = (
      <div className="alert alert-warning">
        I dare you to type 47 and press Confirm !
      </div>
    )

    return (
      <div className="container" style={{ marginTop: 20 }}>
        <form onSubmit={e => { e.preventDefault(); }}>
          <div className="form-group">
            <label>请输入</label>
            <input type="text" className="form-control" onChange={(event) => this.onChangeHandler(event)} ref={this.textInput}/>
            <small className="form-text text-muted"></small>
          </div>
          <button type="button"  className="btn btn-primary" onClick={() => this.confirmValue()}>确认</button>
        </form>
        <div className="alert alert-success">
          输入的值是 {this.state.value} 
        </div>
        <hr />
        <pre>
          {this.state.value}
        </pre>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))

