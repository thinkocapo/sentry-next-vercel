import Image from 'next/image'
function About() {
    return <Image
    src="/images/newsletter-photo-1.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Will Cap"
  />
  }
  
  export default About