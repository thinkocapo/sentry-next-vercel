import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

// more getStaticPaths getStaticProps examples
// https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
/*
Here’s why: getStaticProps and getStaticPaths runs only on the server-side. 
It will never be run on the client-side. 
It won’t even be included in the JS bundle for the browser. 
That means you can write code such as direct database queries without them being sent to browsers.
*/

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
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

// 1. Gets called first
export const getStaticPaths: GetStaticPaths = async () => {
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
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
