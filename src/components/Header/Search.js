import React from 'react'
import { Input } from 'semantic-ui-react'

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchValue: '',
    }
    this.runQuery = this.runQuery.bind(this)
    this.queryValue = this.queryValue.bind(this)
    this.queryEnterValue = this.queryEnterValue.bind(this)
    this.updateState = this.updateState.bind(this)
  }
  queryValue(){
    this.runQuery()
  }
  queryEnterValue(event){
    if(event.charCode === 13){
      this.runQuery()
    }
  }
  updateState(event){
    this.setState({
      searchValue: event.target.value,
    })
  }
  runQuery(){
    console.log(this.state.searchValue)
  }
  render(){
    return(
      <Input style={searchStyle}
        onSubmit={this.queryValue}
        onKeyPress={this.queryEnterValue}
        icon={{
          name: 'search',
          link: true,
          onClick: this.queryValue,
        }}
        onChange={this.updateState}
        placeholder='Search...'
      />
    )
  }
}
const searchStyle = {
  height: 50,
  width: 1000,
  margin: 'auto',
  backgroundColor: 'green',
}

export default Search
