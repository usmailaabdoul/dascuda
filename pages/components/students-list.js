import React from 'react'
import { useRouter } from 'next/navigation'

const StudentsList = ({students}) => {
  const router = useRouter()

  return (
    <div className='mt-4 pb-24'>
      <div className='bg-primary-1 h-10 flex items-center px-2 rounded-tr-md rounded-tl-md'>
        <span className='text-light text-center w-10 mr-2'>#No</span>
        <span className='text-light w-full'>Name</span>
      </div>
      {students?.map((student, i) => {
        const isLast = (i == students.length -1);
        return (
          <div key={i} 
            className={`flex items-center h-10 border-b border-r border-l border-primary-1 px-2 ${isLast && 'rounded-bl-md rounded-br-md'}`}>
            <span className='w-10 mr-2 text-center'>{i+1}</span>
            <button className='w-full text-left' onClick={() => router.push(`/update/${student.id}`)}>{student.name}</button>
          </div>
        )
      })}
    </div>
  )
}

export default StudentsList;
