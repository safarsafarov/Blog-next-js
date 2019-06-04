import Layout from '../components/layout'

export default () => (
  <Layout>
    <section className="section">
    <div className='container'>
     <form className="" action="/compose" method='post'>
       <label className='small-title' htmlFor="exampleFormControlSelect1">Post Title</label>
       <br/>
       <input type="text" className="input" name="postTitle"/>
       <br/>
       <label className='small-title' htmlFor="exampleFormControlSelect1">Post Title</label>
       <textarea className='textarea' name="form-control" id="exampleFormControlTextarea1" name="postBody" rows="5"></textarea>

       <br/>
       <button className="btn btn-primary" type="submit">Publish</button>
     </form>
     </div>
    </section>
  </Layout>
);