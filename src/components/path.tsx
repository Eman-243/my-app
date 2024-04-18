"use client";
import { usePathname } from 'next/navigation'

export default function Component() {
  const pathname = usePathname()
  const pathnames = pathname.split('/').filter(x => x)

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-2 bg-zinc-100 shadow-sm rounded-sm font-sans">
      <nav aria-label="Breadcrumb">
        <ol className="flex space-x-2 text-sm">
          <li>
            <a className="text-black hover:text-gray-800" href="/">
              Home
            </a>
            <span className="text-black mx-2">{`>`}</span>
          </li>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1
            const to = `/${pathnames.slice(0, index + 1).join('/')}`

            return last ? (
              <li aria-current="page" className="text-black font-medium" key={to}>
                {value}
              </li>
            ) : (
              <li key={to}>
                <div className="flex items-center">
                  <a className="text-black hover:text-gray-800" href={to}>
                    {value}
                  </a>
                  <span className="text-black mx-2">{`>`}</span>
                </div>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
