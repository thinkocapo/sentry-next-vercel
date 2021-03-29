import Image from 'next/image'

/*
Adding getServerSideProps causes the `npm run build` to output it as (Server) server-side renders at runtime (uses getServerSideProps)
*/
export async function getServerSideProps(context) {
    return {
      props: {
        // props for your component
      }
    }
  }

function About() {
    return <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Will Cap"
  />
  }
  
  export default About