import { Button } from '@material-ui/core/';
import withWidth from '@material-ui/core/withWidth';

const style = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexGrow: 1,
  flexWrap: 'wrapReverse',
  flexDirection: 'column',
}

class Bar extends React.Component {
  state = {
    search: ''
  }

  handleClick = async (e) => {
    await this.setState({ search: e.target.value })
    this.props.getData({ text: this.state.search })
  }

  render() {
    const { width } = this.props
    return (
      <div style={width === 'xs' ? style : null}>
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

export default withWidth()(Bar)