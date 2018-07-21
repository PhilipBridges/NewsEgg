import axios from 'axios'

const Index = ({ data }) =>
  (
    <div>
      {data && data.articles.map(article => (
        <div>
          {article.title}
        </div>
      ))}
    </div>
  )


Index.getInitialProps = async () => {
  let res = await axios({
    method: 'GET',
    url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0e8cb43829c64f21b5a4dc1c58bbb571'
  })

  return { data: res.data }
}

export default Index