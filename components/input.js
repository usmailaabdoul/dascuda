import React from 'react'

export default function Input({
  renderIcon,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}) {
  return (
    <div className="mt-5">
      <label className='text-dark font-medium'>
        {label}
        <div className="mt-1 flex items-center border border-primary-1 rounded-md px-2">
          {renderIcon}
          <input
            className="h-10 w-full pl-2 bg-transparent outline-none text-dark"
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </label>
    </div>
  )
}
