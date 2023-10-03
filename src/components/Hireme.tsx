import { LucideCircleEqual } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import hireme3 from 'public/hireme3.png'

const Hireme = () => {
  return (
    
  
   <div className="flex items-start justify-start overflow-hidden" >
     <div className=" w-48 h-auto flex items-start justify-start relative ">
       <Link href="mailto:213838bs@gmail.com" className=" dark:text-white  ">
         <Image src={hireme3} alt="hire me"  height={200} width={200} className="  dark:fill-white fill-black animate-spin-slow relative"  />
        </Link >
      </div>
   </div>
    

  );
};

export default Hireme;
