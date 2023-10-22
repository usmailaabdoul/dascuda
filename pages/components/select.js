import React from 'react'

export default function Select({
  renderIcon,
  label,
  value,
  onChange,
  options,
  placeholder
}) {
  return (
    <div className="mt-5">
      <label className='text-dark font-medium'>
        {label}
        <div className="mt-1 flex items-center border border-primary-1 rounded-md px-2">
          {renderIcon}
          <select 
            className={`h-10 w-full pl-2 bg-transparent outline-none ${value ? 'text-dark' : 'text-gray-400'}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value='' className='text-lg'>{placeholder}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value} className='text-lg'>{option.label}</option>
            ))}
          </select>
        </div>
      </label>
    </div>
  )
}
