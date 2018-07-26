import { Select, MenuItem } from '@material-ui/core/';

const Selector = (props) => (
  <div>
    <Select
      style={{ paddingTop: '8px', marginLeft: '25px' }}
      name='sort'
      value={props.sort}
      onChange={props.handleChange}
      inputProps={{
        name: 'sort',
      }}
    >
      <MenuItem value={'popularity'}>Popular</MenuItem>
      <MenuItem value={'relevancy'}>Relevance</MenuItem>
      <MenuItem value={'publishedAt'}>Recent</MenuItem>
    </Select>
  </div>
)

export default Selector