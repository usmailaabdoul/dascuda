import { useState, useEffect} from "react";
import { useRouter } from 'next/router';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Input from "../../components/input";
import Select from "../../components/select";
import { AiOutlineUser, AiOutlineBook, AiOutlineReconciliation, AiOutlineTeam, AiOutlinePhone, AiOutlineTag, AiOutlineAccountBook } from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";
import Swal from 'sweetalert2'

export default function Update(props) {
  const router = useRouter();
  const studentId = router.query.id;

  const [student, setStudent] = useState({});
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const getStudent = async () => {
      setLoading(true)
      try {
        let res = await fetch(`/api/student/${studentId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        res = await res.json();
        setStudent(res);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Unable to GET student, internal error',
        })
      }
    }

    getStudent()
  }, [studentId])

  const updateStudent = async () => {
    setUpdating(true)
    try {
      let res = await fetch(`/api/student/${studentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      res = await res.json();
      setStudent(res);
      setUpdating(false);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Updated student information successfully',
      })
    } catch (error) {
      setUpdating(false);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Unable to update student, internal error',
      });
    }
  }

  const onChange = (value, field) => {
    const data = {...form}
    const _student = {...student}
    data[field] = value;
    _student[field] = value;
    setForm(data)
    setStudent(_student)
  }

  if (router.isFallback || loading)  return <div className="h-full w-full d-flex items-center justify-center">Loading...</div>;

  return (
    <div className="h-screen">
      <Header />
      <main className="h-screen">
        <div className="relative px-7 h-full pt-[70px]">
          <div className="h-full">
            <div className="pt-5">
              <h1 className="font-bold text-3xl">Update students information</h1>
            </div>

            <div className="">
              <Input 
                value={student?.name}
                onChange={(value) => onChange(value, 'name')}
                label='Name'
                placeholder="Enter student's name"
                renderIcon={<AiOutlineUser className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Select 
                label='Gender'
                value={student?.gender}
                onChange={(value) => onChange(value, 'gender')}
                placeholder='Select gender'
                options={[{value: 'female', label: 'Female'}, {value: 'male', label: 'Male'}]}
                renderIcon={<BsGenderAmbiguous className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Select 
                value={student?.education?.toLowerCase()}
                onChange={(value) => onChange(value, 'education')}
                label='Type of education'
                placeholder='Select education'
                options={[
                  {value: 'ajamiya', label: 'Ajamiya'},
                  {value: 'arabiya', label: 'Arabiya'},
                  {value: 'both', label: 'Both'}
                ]}
                renderIcon={<AiOutlineAccountBook className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                value={student?.level}
                onChange={(value) => onChange(value, 'level')}
                label='Level (University or Secondary or High School or Primary)'
                placeholder="Enter education level"
                renderIcon={<AiOutlineBook className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                value={student?.class}
                onChange={(value) => onChange(value, 'class')}
                label='Class or Form or Year in University'
                placeholder="Enter class"
                renderIcon={<AiOutlineReconciliation className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                value={student?.parents_name}
                onChange={(value) => onChange(value, 'parents_name')}
                label='Parents or Guardian Name'
                placeholder="Enter parents/gaurdian's name"
                renderIcon={<AiOutlineTeam className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                value={student?.phone}
                onChange={(value) => onChange(value, 'phone')}
                label='Phone Number (parents/gaurdians/students)'
                placeholder="Enter phone number"
                type="number"
                renderIcon={<AiOutlinePhone className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                value={student?.child_location}
                onChange={(value) => onChange(value, 'child_location')}
                label='Location of child'
                placeholder="Enter location"
                renderIcon={<AiOutlineTag className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                value={student?.parents_location}
                onChange={(value) => onChange(value, 'parents_location')}
                label='Location of parents'
                placeholder="Enter location"
                renderIcon={<AiOutlineTag className="text-2xl text-primary-1 group-hover:text-light" />}
              />
            </div>

            <div className='pb-16'>
              <button 
                onClick={() => updateStudent()} 
                disabled={updating}
                className="flex items-center justify-center bg-primary-1 py-3 px-4 text-light rounded-md w-full mt-5"
              >
                {updating ? (
                  <div role="status">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-light fill-primary-2" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ): (
                  'Update'
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
