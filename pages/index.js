import NewsAPI from 'newsapi'
import moment from 'moment'

import NewsList from '../components/NewsList'
import Bar from '../components/Bar'
import Popular from '../components/Popular'
import Selector from '../components/Selector'

import { AppBar, Toolbar, Typography } from '@material-ui/core/';

const newsapi = new NewsAPI("0e8cb43829c64f21b5a4dc1c58bbb571");

class Index extends React.Component {
  state = {
    page: 1,
    articles: [],
    sort: 'popularity',
    source: 'reuters',
    search: ''
  }

  componentDidMount() {
    this.getData()
  }

  getData = async (e) => {
    let source;
    if (e && e.text) {
      source = e.text
    } else {
      source = this.state.source
    }

    let date = moment().format("YYYY-MM-DD")
    let res = newsapi.v2.everything({
      q: this.state.search,
      sources: source,
      from: date,
      to: '2018-12-12',
      page: this.state.page,
      language: 'en',
      pageSize: 10,
      sortBy: this.state.sort
    })

    let data = await res

    this.setState({ articles: data.articles, source })
  }

  searchData = async (e) => {
    e.preventDefault()
    let date = moment().format("YYYY-MM-DD")
    let search;
    search = e.currentTarget[0].value

    let res = newsapi.v2.everything({
      q: search,
      sources: this.state.source,
      from: date,
      to: '2018-12-12',
      page: this.state.page,
      language: 'en',
      pageSize: 10,
      sortBy: this.state.sort
    })

    let data = await res

    return this.setState({ articles: data.articles, search })

  }

  nextPage = async () => {
    await this.setState({ page: this.state.page + 1 })
    this.getData()
  }

  prevPage = async () => {
    if (this.state.page > 1) {
      await this.setState({ page: this.state.page - 1 })
      this.getData()
    }
    return null
  }

  handleChange = async (e) => {
    await this.setState({ [e.target.name]: e.target.value })
    this.getData()
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <AppBar color="default" position="static">
          <Toolbar variant='dense'>
            <Typography style={{ fontFamily: 'Georgia', paddingRight: '15px', fontWeight: 'bold' }} variant="display1" color="inherit">
              News Egg
          </Typography>
            <Popular getData={this.getData} />
            <Bar searchData={this.searchData} />
          </Toolbar>
        </AppBar>
        <Selector sort={this.state.sort} handleChange={this.handleChange} />
        {this.state.articles.length > 1 ? <NewsList prevPage={this.prevPage} nextPage={this.nextPage} articles={this.state.articles} />
          :
          <div>
            
          </div>
        }

        <style global jsx>{`
      body {
        font-family: 'Roboto';
      }
      `}</style>
      </div>
    )
  }
}

export default Index