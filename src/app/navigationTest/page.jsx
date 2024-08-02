"use client"

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const NavigationTestPage = () => {
   const router = useRouter();
   const pathName = usePathname();
   const searchParams = useSearchParams();

   const q = searchParams.get("q");

   const handleClick = () => {
      console.log("Clicked");
      router.forward(); 
   };

   return (
      <div>
         <Link href="/" prefetch={false}>Click Here</Link>
         <button onClick={handleClick}>Write and Redirect</button>
      </div>
   );
};

export default NavigationTestPage;

