import { FiPhone } from 'react-icons/fi'
import { GoMail } from 'react-icons/go'


export default function HeaderDetails() {
return (
<header className="bg-black py-4 px-8">

<div className="mx-auto flex justify-between max-w-6xl font-sans" >
  <div className="flex items-center">
    <a href="tel:+97333945666" className="text-white hover:text-gray-300 flex items-center">
      <FiPhone className="h-6 w-6 mr-2" />
      (+973) 3394 5666
    </a>
    <span className="mx-2">|</span>
    <a href="mailto:info@nexcel.me" className="text-white hover:text-gray-300 flex items-center">
      <GoMail className="h-6 w-6 mr-2" />
      Info@nexcel.me
    </a>
  </div>
  <div className="flex items-center">
    <a href="/about" className="text-white hover:text-gray-300 mr-6">About Us</a>
    <a href="/english" className=" text-white hover:text-gray-300">English</a>
  </div>
</div>

    
    </header>
)

}