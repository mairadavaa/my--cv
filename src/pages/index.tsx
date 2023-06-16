import Image from 'next/image'
import styles from '../style/styles.module.css';
import bgImage from '../../public/v546batch3-mynt-34-badgewatercolor_1.jpg'
import Link from 'next/link';
export default function Home() {
 
  return (
    <>
      <div className={`bg-image ${styles.bgImage} h-screen`}>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <img src="http://creativemongolia.com/media/yaruusetgegch/content/profile/maira_bugat.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                        </img>
                        <p className="text-gray-600 text-xl font-bold">Maira Dayei</p>
                        <p className="text-gray-600">Software </p>
                        <p className="text-gray-600"> Developer</p>
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                            <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">Contact</a>
                            <a href="#" className="bg-yellow-600 hover:bg-yellow-400 text-white-800 py-2 px-4 rounded">Resume</a>
                        </div>
                    </div>
                    <hr className="my-6 border-t border-gray-300"/>
                    <div className="flex flex-col">
                        <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">Skills</span>
                        
                            <p className="text-black">JavaScript</p>
                            <p className=" text-black">Next.js</p>
                            <p className=" text-black">Typescript</p>
                            <p className=" text-black">Tailwind Css</p>
                            <p className=" text-black">Blender</p>
                            <p className=" text-black">AWS</p>
                            <p className=" text-black">Firebase</p>
                            <p className=" text-black">Github</p>
                            
                      
                    </div>
                </div>
            </div>
            <div className="col-span-4 sm:col-span-9 h-[650px] bg-white ">
                <div className='flex flex-row'>

               
                <div className="bg-white  rounded-lg w-1/2 p-6 flex flex-col">
                    <h2 className="text-xl font-bold text-black mb-4 ">My project</h2>
                    <a href="https://github.com/mairadavaa" className='text-black dark:md:hover:underline'> Github</a>
                    <a href="https://mairadn.github.io/leap2022-semister1" className='text-black dark:md:hover:underline '> XO game</a>
                    <a href="https://mairadn.github.io/todolist/" className='text-black dark:md:hover:underline '>  To do list</a>
                    <a href="https://moviemai-108fd.web.app/" className='text-black dark:md:hover:underline'> Movie </a>
                    <a href="https://next-location.vercel.app/" className='text-black dark:md:hover:underline'> Location</a>
                    <a href="https://my-blender-react.vercel.app/" className='text-black dark:md:hover:underline'> 3D model-donut</a>
                    <a href="https://hand-3d-model.vercel.app/" className='text-black dark:md:hover:underline'> 3D model-hand</a>

                </div>
                <div className="bg-white  rounded-lg w-1/2 p-6 flex flex-col">
                    <h2 className="text-xl font-bold text-black mb-4 ">TEAM project</h2>
                    <a href="https://fire-leap.firebaseapp.com/index.html?fbclid=IwAR2QdQDdcp8asCLO7J_PTCBs4jAHzoG9riT1mDvtB1x8w9sxN5Mf08TZ2e4" className='text-black dark:md:hover:underline'> LEAP1- Million tree</a>
                    <a href="https://mepo-af-project.vercel.app" className='text-black dark:md:hover:underline '> LEAP2- Ecommerse</a>
                    <a href="https://car-rental-app-lime.vercel.app" className='text-black dark:md:hover:underline '>  LEAP3- Car rent</a>


                </div>
                </div>
                <div  > 
                <h2 className="text-xl font-bold text-black p-6 mb-4 ">Tasks</h2>
                 <h1 className="title text-black ml-6">
                    <Link href="/Palindrom">find palindrom piece</Link>
                 </h1>
                 <h1 className="title text-black ml-6">
                    <Link href="/Bill">bill-how much amount of money to spend on lunch per week</Link>
                 </h1>
                 <h1 className="title text-black ml-6">
                    <Link href="/Database">working database</Link>
                 </h1>
                 <h1 className="title text-black ml-6">
                    <Link href="/Photo">edit photo</Link>
                 </h1>
                </div>
            </div>
        </div>
    </div>
     </div>
    
 
      
 
   
    </>
 
  )
}
