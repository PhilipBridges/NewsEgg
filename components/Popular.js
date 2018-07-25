import { Button } from '@material-ui/core/';

class Bar extends React.Component {
  state = {
    search: ''
  }

  handleClick = async (e) => {
    await this.setState({ search: e.target.value })
    this.props.searchData({ text: this.state.search })
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexGrow: 1 }}>
        <Button style={{backgroundColor: '#8bffd61a'}} variant="contained" onClick={this.handleClick} value="google-news">Google</Button>
        <Button style={{backgroundColor: '#8bffd61a'}} variant="contained" onClick={this.handleClick} value="bbc-news">BBC</Button>
        <Button style={{backgroundColor: '#8bffd61a'}} variant="contained" onClick={this.handleClick} value="CNN">CNN</Button>
        <Button style={{backgroundColor: '#8bffd61a'}} variant="contained" onClick={this.handleClick} value="fox-news">Fox</Button>
        <Button style={{backgroundColor: '#8bffd61a'}} variant="contained" onClick={this.handleClick} value="reuters">Reuters</Button>
        <Button style={{backgroundColor: '#8bffd61a'}} variant="contained" onClick={this.handleClick} value="nbc-news">NBC</Button>
        <Button style={{backgroundColor: '#8bffd61a'}} variant="contained" onClick={this.handleClick} value="the-washington-post">Washington Post</Button>
        <Button style={{backgroundColor: '#8bffd61a'}} variant="contained" onClick={this.handleClick} value="the-new-york-times">NY Times</Button>
      </div>
    )
  }
}

export default Bar