import { Input, Button, FormControl } from '@material-ui/core/';

class Bar extends React.Component {
  state = {
    search: ''
  }

  onChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    return (
      <FormControl>
        <form style={{display: 'flex', marginRight: '-10px', paddingLeft: '10px'}} onSubmit={this.props.searchData} >
          <Input
            style={{display: 'inline-grid'}}
            onChange={this.onChange}
            value={this.state.search}
            placeholder="Search"
          />
          <Button type="submit">Search</Button>
        </form>
      </FormControl>
    )
  }
}

export default Bar