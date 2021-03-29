import useSWR from 'swr'

function Profile() {
  // TODO
  // const { data, error } = useSWR('/api/user', fetch)
  var error = null
  var data = {name:'Statically generate (pre-render) parts of the page that do not require external data.'}
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}

// https://nextjs.org/docs/basic-features/pages#server-side-rendering
// export async function getStaticProps() {
//   console.log('this runs!')
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Profile component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }


  export default Profile