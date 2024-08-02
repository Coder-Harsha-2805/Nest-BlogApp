import Link from "next/link"

const NotFound =()=>{
   return (
      <div>
         Not Found, Sorry the page you are looking for does not exists
         <Link href="/">Return to Home Page</Link>
      </div>
      
   )
}
export default NotFound