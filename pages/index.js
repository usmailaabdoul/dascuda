'use client'

import { useRouter } from 'next/navigation'
import { AiOutlineSearch, AiOutlinePlus, AiFillPlusCircle } from 'react-icons/ai'
import Header from './components/header'
import Footer from './components/footer'

export default function App() {
  const router = useRouter()

  return (
    <div className="h-screen">
      <Header />
      <main className="h-screen">
        <div className="relative px-7 h-full pt-[70px]">
          <div className="h-full">
            <div className='pt-5'>
              <h1 className='font-bold text-3xl'>Welcome!</h1>
              <p className='text-dark'>Please proceed by searching the name of the student to add 
                their new information or Add new student by pressing + .</p>
            </div>

            {/* <div className='mt-5 flex gap-2'>
              <button className='w-1/2 bg-primary-1 py-3 px-4 text-light rounded-md'>Update Student</button>
              <button className='w-1/2 py-3 px-4 text-primary-1 border border-primary-1 rounded-md'>Add Student</button>
            </div> */}

            <div className='mt-5 flex items-center border border-primary-1 rounded-md px-2'>
              <AiOutlineSearch className="text-2xl text-primary-1 group-hover:text-light" />
              <input className='h-10 w-full pl-2 bg-transparent outline-none' placeholder='Search name' type="text" />
            </div>

            <div className='mt-4'>
              <div className='bg-primary-1 h-10 flex items-center px-2 rounded-tr-md rounded-tl-md'>
                <span className='text-light text-center w-10 mr-2'>#No</span>
                <span className='text-light w-full'>Name</span>
              </div>
              <div className='flex items-center h-10 border border-primary-1 px-2'>
                <span className='w-10 mr-2 text-center'>1</span>
                <button className='w-full text-left' onClick={() => router.push('/update?id=1')}>Usmaila Abdoul</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <button 
        className='fixed bottom-12 right-7 z-50 flex justify-end w-auto py-4 px-4 bg-primary-1 rounded-full outline-none'
        onClick={() => router.push('/create')}
      >
        <AiOutlinePlus className="text-2xl text-light group-hover:text-primary-1"/>
      </button>

      <Footer />
    </div>
  )
}
