import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

// more getStaticPaths getStaticProps examples
// https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
/*
Here’s why: getStaticProps and getStaticPaths runs only on the server-side. 
It will never be run on the client-side. 
It won’t even be included in the JS bundle for the browser. 
That means you can write code such as direct database queries without them being sent to browsers.
*/
// 1. Gets called first
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }

  // OR
  // Instead of the file system,
  // fetch post data from an external API endpoint
  // const res = await fetch('..')
  // const posts = await res.json()
  // return posts.map(post => {
  //   return {
  //     params: {
  //       id: post.id
  //     }
  //   }
  // })
}

// 2. Gets called second
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}



export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}