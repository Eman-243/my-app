"use client";
import { usePathname } from 'next/navigation'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function Component() {
  const pathname = usePathname()
  const pathnames = pathname.split('/').filter(x => x)
  return (
    <div className="w-full max-w-6xl  border border-transparent dark:border-[#5f5f5f]  mx-auto px-4 py-2 bg-zinc-100 dark:bg-[#424242] shadow-md rounded-sm font-sans ">
      <nav aria-label="Breadcrumb">
        <ol className="flex space-x-2 text-sm">
          <li className='flex flex-row items-center'>
            <a className="text-black hover:text-gray-800 dark:text-white" href="/">
              Home

            </a>
            <MdKeyboardDoubleArrowRight className="text-black ml-1  dark:text-white" />

            
          </li>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1
            const to = `/${pathnames.slice(0, index + 1).join('/')}`
            const decodedValue = decodeURIComponent(value).replace(/-/g, ' ');

            return last ? (
              
              <li aria-current="page" className="text-black font-medium dark:text-white" key={to}>
                {decodedValue}
              </li>
            ) : (
              <li key={to}>
                <div className="flex items-center">
                  <a className="text-black hover:text-gray-800 dark:text-white" href={to}>
                    {decodedValue}
                  </a>
                  <MdKeyboardDoubleArrowRight className="text-black ml-1 dark:text-white" />

                </div>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
