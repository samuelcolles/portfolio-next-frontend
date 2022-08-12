
import Link from 'next/link'
import Image from 'next/image'
import Style from '../styles/postPreview.module.scss'

export default function PostPreview({ post }) {
    //console.log(post.attributes.preview_image.data.attributes.formats.small.url)
    return (
        <Link href={`/blog/${post.attributes.slug}`}>
            <div className={Style.preview}>
                <h1>{post.attributes.title}</h1>
                <div className={Style.imgContainer} style={{backgroundImage: `url("http://localhost:1337${post.attributes.preview_image.data.attributes.formats.small.url}")`}}>
                    
                </div>
                <div className={Style.textContainer}>
                    <p>{post.attributes.excerpt}</p>
                </div>

            </div>
        </Link>)

}
//<img src={`http://localhost:1337${post.attributes.preview_image.data.attributes.formats.small.url}`} />
