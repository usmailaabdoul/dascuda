import { AiFillGithub, AiFillLinkedin, AiFillGoogleCircle, AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-[calc(100%-1rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+1rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <footer className="py-2 px-40 sm:px-5 bg-dark fixed bottom-0 w-full z-50 flex justify-end">
        <div className="flex items-center">
          <a href="mailto:ismaelabdul77@gmail.com"><AiFillGoogleCircle className="fill-white mr-2 hover:fill-light hover:cursor-pointer" size={20} /></a>
          <a href="https://www.linkedin.com/in/usmaila-abdoul-moumini-475486183/" rel="noreferrer" target='_blank'><AiFillLinkedin className="fill-white mr-2 hover:fill-light hover:cursor-pointer" size={20} /></a>
          <a href="https://github.com/usmailaabdoul" rel="noreferrer" target='_blank'><AiFillGithub className="fill-white mr-2 hover:fill-light hover:cursor-pointer" size={20} /></a>
          <div className="ml-auto text-light flex items-center font-mono text-sm">Abdoul 2023 <AiOutlineCopyrightCircle size={12} className="ml-1" /></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer