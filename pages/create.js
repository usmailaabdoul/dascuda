'use client'

import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Input from "./components/input";
import Select from "./components/select";
import { AiOutlineUser, AiOutlineBook, AiOutlineReconciliation, AiOutlineTeam, AiOutlinePhone, AiOutlineTag } from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";

export default function Create() {
  return (
    <div className="h-screen">
      <Header />
      <main className="h-screen">
        <div className="relative px-7 h-full pt-[70px]">
          <div className="h-full">
            <div className="pt-5">
              <h1 className="font-bold text-3xl">Add new student</h1>
            </div>

            <div className="">
              <Input 
                label='Name'
                placeholder="Enter student's name"
                renderIcon={<AiOutlineUser className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Select 
                label='Gender'
                placeholder='Select gender'
                options={[{value: 'female', label: 'Female'}, {value: 'male', label: 'Male'}]}
                renderIcon={<BsGenderAmbiguous className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Select 
                label='Type of education'
                placeholder='Select education'
                options={[
                  {value: 'ajamiya', label: 'Ajamiya'},
                  {value: 'arabiya', label: 'Arabiya'},
                  {value: 'both', label: 'Both'}
                ]}
                renderIcon={<BsGenderAmbiguous className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                label='Level (University or Secondary or High School or Primary)'
                placeholder="Enter education level"
                renderIcon={<AiOutlineBook className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                label='Class or Form or Year in University'
                placeholder="Enter class"
                renderIcon={<AiOutlineReconciliation className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                label='Parents or Guardian Name'
                placeholder="Enter parents/gaurdian's name"
                renderIcon={<AiOutlineTeam className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                label='Phone Number (parents/gaurdians/students)'
                placeholder="Enter phone number"
                type="number"
                renderIcon={<AiOutlinePhone className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                label='Location of child'
                placeholder="Enter location"
                renderIcon={<AiOutlineTag className="text-2xl text-primary-1 group-hover:text-light" />}
              />
              <Input 
                label='Location of parents'
                placeholder="Enter location"
                renderIcon={<AiOutlineTag className="text-2xl text-primary-1 group-hover:text-light" />}
              />
            </div>

            <div className='pb-16'>
              <button className="bg-primary-1 py-3 px-4 text-light rounded-md w-full mt-5">
                Add student
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
