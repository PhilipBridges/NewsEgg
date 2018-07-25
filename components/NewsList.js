import Link from 'next/link'
import { Avatar, ListItemText, ListItem, List, Button } from '@material-ui/core'
import moment from 'moment'
const uuidv4 = require('uuid/v4');

const NewsList = (props) => <List>
  {props.articles && props.articles.map(article => (
    <ListItem divider key={uuidv4()}>
      <Avatar icon='true' src={article.urlToImage} style={{ marginRight: '5px' }} />
      <Link prefetch href={article.url}>
        <a>
          <ListItemText primary={article.title}
            secondary={article.author !== null ?
              `${article.source.name} - ${article.author} @ ${moment(article.publishedAt).format('MMMM Do, h:mm:ss a')}`
              :
              `${article.source.name} @ ${moment(article.publishedAt).format('MMMM Do, h:mm:ss a')}`
            } />
        </a>
      </Link>
    </ListItem>
  ))}
  <div style={{paddingLeft: '60px', paddingTop: '10px'}} >
    <Button variant="contained" onClick={() => props.prevPage()}>Previous</Button>
    <Button variant="contained" onClick={() => props.nextPage()}>Next</Button>
  </div>
</List>

export default NewsList