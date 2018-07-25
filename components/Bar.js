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
      <FormControl  >
        <form style={{marginRight: '-10px', paddingLeft: '10px'}} onSubmit={this.props.searchData} >
          <Input
            onChange={this.onChange}
            value={this.state.search}
            placeholder="Search for a Source"
          />
          <Button type="submit">Search</Button>
        </form>
      </FormControl>
    )
  }
}

export default Bar