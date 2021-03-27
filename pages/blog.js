function Blog() {
    return <div>Blog</div>
}

// https://nextjs.org/docs/basic-features/pages#server-side-rendering
// export async function getStaticProps() {
//   console.log('this runs!')
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }


  export default Blog