import Image from 'next/image'

/*
Adding getServerSideProps causes the `npm run build` to output it as (Server) server-side renders at runtime (uses getServerSideProps)

Because getServerSideProps is called at request time, its parameter (context) contains request specific parameters.

You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. 
Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.
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