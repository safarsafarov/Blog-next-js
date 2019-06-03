import Layout from '../components/layout'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title">NEW BLOG POST</h1>
        <h2 className="small-title">Post Title</h2>
        <input className="input" type="text" placeholder="Text input" input/>
        <br/>
        <br/>
        <h2 className="small-title">Post</h2>
        <textarea className="textarea" ></textarea>
      </div>
    </section>
  </Layout>
);