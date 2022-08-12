import PostPreview from '../Components/PostPreview'


export default function Blog({ posts }) {
  return (<div className='background-box'>
    <div className='container grid-2-col'>
      {posts.map(post =>
        <PostPreview key={post.id} post={post} />
      )}
    </div>
  </div>)
}

export async function getStaticProps() {
  const res = await fetch( process.env.STRAPI_BACKEND_URL + '/api/posts?populate=preview_image')
  const data = await res.json()
  const { data: posts } = data
  const postNames = posts.map(post => {
    return post.attributes.slug
  })
  console.log(postNames)
  return {
    props: {
      posts
    }
  }
}