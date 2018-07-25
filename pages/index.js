import NewsAPI from 'newsapi'
import moment from 'moment'

import NewsList from '../components/NewsList'
import Bar from '../components/Bar'
import Popular from '../components/Popular'

import { AppBar, Toolbar, Typography } from '@material-ui/core/';

const newsapi = new NewsAPI('0e8cb43829c64f21b5a4dc1c58bbb571');

class Index extends React.Component {
  state = {
    page: 1,
    articles: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    let date = moment().format("YYYY-MM-DD")
    console.log(date)
    let res = newsapi.v2.everything({
      sources: 'google-news',
      from: date,
      to: '2018-12-12',
      page: this.state.page,
      language: 'en',
      pageSize: 10,
      sortBy: 'popularity'
    })

    let data = await res

    this.setState({ articles: data.articles })
  }

  searchData = async (e) => {
    let date = moment().format("YYYY-MM-DD")
    let search;

    if (e.currentTarget) {
      e.preventDefault()
      search = e.currentTarget[0].value
    } else {
      search = e.text
    }

    let res = newsapi.v2.everything({
      sources: search,
      from: date,
      to: '2018-12-12',
      page: this.state.page,
      language: 'en',
      pageSize: 10,
      sortBy: 'popularity'
    })

    let data = await res

    return this.setState({ articles: data.articles })

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

  render() {
    if (this.state.articles.length < 1) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography style={{paddingRight: '10px'}} variant="display1" color="inherit">
              News Egg
          </Typography>
            <Popular searchData={this.searchData} />
            <Bar searchData={this.searchData} />
          </Toolbar>
        </AppBar>
        <NewsList prevPage={this.prevPage} nextPage={this.nextPage} articles={this.state.articles} />
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