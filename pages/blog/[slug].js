import { marked } from 'marked'
import style from '../../styles/fullPostPage.module.scss'


export default function FullPostPage({ post }) {
  console.log(post.attributes.title)
  return (<div className='background-box'>
    <div className='container'>
      <div className={style.post}>
        <h1>{post.attributes.title}</h1>
        <div className='blog-post' dangerouslySetInnerHTML={{ __html: marked(post.attributes.content) }} />

      </div>
    </div>
  </div>)
}

export async function getStaticPaths() {
  const res = await fetch(process.env.STRAPI_BACKEND_URL + '/api/posts')
  const data = await res.json()
  const { data: posts } = data
  const paths = posts.map(post => ({
    params: {
      slug: post.attributes.slug
    }
  }))
  //console.log(paths)

  return {
    paths: paths,
    fallback: false
  }

}

export async function getStaticProps({ params: { slug } }) {

  const res = await fetch(`http://localhost:1337/api/posts?populate=preview_image`)
  const data = await res.json()
  const { data: posts } = data
  const post = posts.find(x => x.attributes.slug === slug) // To do: find by slug on backend


  return {
    props: {
      post
    }
  }
}
