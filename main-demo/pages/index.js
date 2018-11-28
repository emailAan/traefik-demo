
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <div>
    <h1>Hello Next.js</h1>
    <pre><code>{props.shows}</code></pre>
    <a style={{ color: 'purple', backgroundColor: 'orange', border: 'outset 1px darkgrey', padding: 2, borderRadius: 5 }}
      onClick={() => {
        console.log('fetching')
        Index.fetchWhoami(null)
      }}>ververs op de client</a>
  </div>
)

Index.fetchWhoami = async (req) => {
  const url = req ? 'http://reverse-proxy/whoami/' : '/whoami'
  const res = await fetch(url, { 'headers': { 'Host': 'main.localhost' } })
  const data = await res.text()

  return data
}

Index.getInitialProps = async function ({ req }) {
  const data = await Index.fetchWhoami(req)

  console.log(data)
  return {
    shows: data
  }
}

export default Index
