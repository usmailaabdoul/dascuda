import { useState, useEffect} from "react";
import { useRouter } from 'next/navigation'
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'
import Header from '../components/header'
import Footer from '../components/footer'
import StudentsList from '../components/students-list'
import prisma from '../lib/prisma';
import {studentsData} from '../utils/data';
import { analytics } from '../tracking/segment';

export default function App({students}) {
  console.log({students})
  const router = useRouter();
  const [data, setData] = useState(students ?? []);
  const [term, setTerm] = useState('');

  useEffect(() => {
    analytics.page('Home')
  }, [])

  useEffect(() => {
    setData(students)
  }, [students])

  const searchStudents = (term) => {
    setTerm(term);
    const filteredStudents = students?.filter(student => student?.name?.toLowerCase().includes(term.toLowerCase()));
    setData(filteredStudents);
  }
  
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
              <input 
                className='h-10 w-full pl-2 bg-transparent outline-none'
                placeholder='Search name'
                type="text"
                value={term}
                onChange={(e) => searchStudents(e.target.value)}
              />
            </div>

            <StudentsList students={data} />
          </div>
        </div>
      </main>
      <button 
        className='fixed bottom-12 right-7 z-50 flex justify-end w-auto py-4 px-4 bg-primary-1 rounded-full outline-none'
        onClick={() => router.push('/student/create')}
      >
        <AiOutlinePlus className="text-2xl text-light group-hover:text-primary-1"/>
      </button>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const seedStudents = async () => {
    const parseData = studentsData.map(student => ({
      // id: student['No'],
      name: student['Name'],
      gender: student['Gender'],
      education: student['Type_of_education'],
      level: student['Level'],
      class: student['Class'],
      parents_name: student['Parents_Name'],
      phone: student['Phone_number'],
      child_location: student['Location_of_child'],
      parents_location: student['Location_of_parents'],
    }))

    const res = await prisma.student.createMany({
      data: parseData
    })
    console.log({res})
  };
  // seedStudents()

  const students = await prisma.student.findMany({
    orderBy: {
      name: 'asc',
    }
  });

  return { 
    props: { students }, 
    revalidate: 10 
  }
}