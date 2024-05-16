// "use client";
// import Link from "next/link"
// import { Input } from "@/components/Header/ui/input"
// import { IoSearch } from "react-icons/io5";
// import { RiShoppingCartLine } from "react-icons/ri";
// import { useState } from "react";
// import { TfiMenu } from "react-icons/tfi";
// import { useEffect } from "react";
// import { FaRegUserCircle } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
// import { MdOutlineArrowBackIos } from "react-icons/md";
// import { useRouter } from "next/navigation";




// export default function Component() {
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [isSecondarySidebarOpen, setIsSecondarySidebarOpen] = useState(false);
//   const [isShopSidebarOpen, setIsShopSidebarOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedSubcategory, setSelectedSubcategory] = useState('');


//   const router = useRouter();

//   interface Categories {
//     [key: string]: string[];
//   }
  
//   const categories: Categories = {
//     Computers: ['Laptops', 'Desktops', 'Accessories'],
//     // ... other categories
//   };

//   const openShopSidebar = () => {
//     setIsShopSidebarOpen(true);
//     setSidebarOpen(false); // Close the main sidebar if open
//   };
//   const selectCategory = (category:string) => {
//     setSelectedCategory(category);
//     // Logic to open subcategory list or directly navigate if no subcategories
//   };

 
//   const selectSubcategory = (subcategory: string) => {
//     setSelectedSubcategory(subcategory);
//     // Navigate to the URL with query parameters
//     const link = `/products/${selectedCategory}/${subcategory}?category=${selectedCategory}&subcategory=${subcategory}`;
        
//     // Navigate to the new URL
//     router.replace(link);
//     setIsShopSidebarOpen(false);
//     setSelectedCategory('');

//     // Close the sidebar
//   };

//   const openSecondarySidebar = () => {
//     if(isSecondarySidebarOpen) {
//       setIsSecondarySidebarOpen(false);
//       setSidebarOpen(false);
//     } else {
//       setIsSecondarySidebarOpen(true);
//     }
   

//   };

//   const closeSecondarySidebar = () => {
//     setIsSecondarySidebarOpen(false);
//     setSidebarOpen(true);
//     console.log('closeSecondarySidebar');
//   };

//   const toggleSidebar = () => {
//     if (isSecondarySidebarOpen) {
//       closeSecondarySidebar();
//       console
//     } else {
//       setSidebarOpen(!isSidebarOpen);
//     }
//   };

//   // Effect to handle the sidebar visibility for smooth closing
//   useEffect(() => {

//     if (isSidebarOpen) {
//       setSidebarVisible(true);


//     } else {
//       const timer = setTimeout(() => {
//         setSidebarVisible(false);
//       }, 300); // Duration should match the CSS transition
//       return () => clearTimeout(timer);
//     }
//   }, [isSidebarOpen]);
  
// useEffect(() => {
//   if(isSecondarySidebarOpen) {
//     setSidebarVisible(true);
//   } else {  
//     const timer = setTimeout(() => {
//       setSidebarVisible(false);
//     }, 300);
//     return () => clearTimeout(timer);
//   }
//  }, [isSecondarySidebarOpen]);

  
//   return (
//     <header className="bg-black  w-full">
//       <div className="flex justify-center lg:justify-around tablet:items-baseline lg:max-w-6xl  miniphone:max-w-7xl miniphone:items-center mx-auto ">
//         <div className="flex justify-between items-baseline lg:p-0 px-4">
//           <div className="mx-auto flex w-full sm:max-w-6xl miniphone:items-center minitablet:items-baseline  tablet:items-baseline sm:items-baseline  justify-around">
//             <button className="tablet:hidden pr-4" onClick={toggleSidebar}>
//               <TfiMenu className="text-white h-7 w-7" />
//             </button>
//             <div className=" flex items-baseline miniphone:items-center h-20 w-20 lg:h-24 miniscreen:w-24 lg:w-16 miniphone:h-14 phone:h-16 phone:w-11 miniphone:w-11 pt-1 miniphone:mb-6 phone:mb-5 miniphone:mr-2 phone-mr-2">
//               <img src="/logo1.png" alt="logo" />
//             </div>
//           </div>
//           <nav className="hidden space-x-4 ml-5 tablet:flex">
//             <Link href="/" className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg">Home</Link>
//             <Link href="/services" className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg">Services</Link>
//             <Link href="/blogs" className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg">Blog</Link>
//             <Link href="/products" className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg">Shop</Link>
//           </nav>
//         </div>
//         <div className="flex justify-center items-center relative tablet:w-60 miniscreen:w-96 lg:w-80 phon:my-0 sm:my-3 miniphone:w-52 miniphone:h-10 ">
//           <Input className="pl-10 w-full" placeholder="Search" type="search" />
//           <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//         </div>
//         <Link href="/cart" className="minitablet:hidden items-baseline miniphone:flex  lg:mb-auto tablet:mb-auto text-bottom px-4">
//           <RiShoppingCartLine className="text-white  mb-auto miniphone:h-7 miniphone:w-7" />
//         </Link>
//         <div className="hidden items-baseline minitablet:flex space-x-4 ml-6 h-full">
//           <Link href="/cart" className="items-baseline lg:mb-auto tablet:mb-auto text-bottom ">
//             <RiShoppingCartLine className="text-white lg:h-6 lg:w-6 sm:h-5 sm:w-5" />
//           </Link>
//           <Link href="/sign-in" className="text-white hover:text-gray-300 minitablet:text-[13px] tablet:text-[12px] sm:text-base lg:text-lg">
//             Sign In
//           </Link>
//           <Link href="/about-us" className="text-white hover:text-gray-300 minitablet:text-[13px] tablet:text-[12px] sm:text-base lg:text-lg">
//             About Us
//           </Link>
//           <Link href="/english" className="text-white hover:text-gray-300  minitablet:text-[13px] tablet:text-[12px] sm:text-base lg:text-lg">
//             English
//           </Link>
//         </div>

//         {sidebarVisible && (
//           <>
//             <div className="fixed inset-0  bg-opacity-50 transition-opacity duration-700 ease-in-out" onClick={toggleSidebar}></div>
//             <div className="fixed top-0 left-0 w-10/12 h-full bg-[#faebd7] rounded-lg shadow-lg z-50 transition-transform duration-700 ease-in-out" style={{ transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
//               <div className="flex justify-start bg-[#F9B823] pt-[21.5px] pb-[21.5px] items-center mb-2 hover:border-blue-50">
//                 <FaRegUserCircle className="text-white h-10 w-10 mr-3 ml-3" />
//                 <Link href="/sign-in" className="text-white text-lg">Sign In</Link>
//               </div>
//               <Link href="/" className=" p-4 text-lg text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Home
//                 <IoIosArrowForward className="text-black" />
//               </Link>
//               <Link href="/services" className=" text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Services
//                 <IoIosArrowForward className="text-black" />
//               </Link>
//               <Link href="/blogs" className="  text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Blog
//                 <IoIosArrowForward className="text-black" />
//               </Link>
//               <div className="text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white cursor-pointer" onClick={openShopSidebar}>
//                 Shop
//                 <IoIosArrowForward className="text-black" />
//               </div>
//               <Link href="/about-us" className="text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">About us
//                 <IoIosArrowForward className="text-black" />
//               </Link>
//               <div onClick={openSecondarySidebar} className="text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white cursor-pointer">
//                 Dashboard
//                 <IoIosArrowForward className="text-black" />
//               </div>
//               <Link href="/profile" className="text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Logout
//                 <IoIosArrowForward className="text-black" />
//               </Link>
//             </div>


//           </>
//         )}
//         {isSecondarySidebarOpen && (
//                     <>

//             <div className="fixed inset-0  bg-opacity-50 transition-opacity duration-700 ease-in-out" onClick={openSecondarySidebar}></div>
//             <div className="fixed top-0 left-0 w-10/12 h-full bg-[#faebd7] rounded-lg shadow-lg z-50 transition-transform duration-700 ease-in-out" style={{ transform: isSecondarySidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
//               <div onClick={closeSecondarySidebar} className="flex justify-start bg-[#F9B823] p-4 items-center mb-2 hover:border-blue-50">
//                 <MdOutlineArrowBackIos className="text-black mr-1" />
//                 <span className="font-bold text-lg">Back</span>
//               </div>
//               <Link href="/profile" className="p-4 text-lg text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Profile
//                 <IoIosArrowForward className="text-black" />
//               </Link>
//               <Link href="/profile/account-information" className="p-4 text-lg text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Account Information
//                 <IoIosArrowForward className="text-black" />
//               </Link>
//               <Link href="/profile/order-history" className="p-4 text-lg text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Orders History
//                 <IoIosArrowForward className="text-black" />
//               </Link>
//             </div>
//           </>
// )}


// {isShopSidebarOpen && (
//         <div className="shop-sidebar">
//           <div className="fixed inset-0  bg-opacity-50 transition-opacity duration-700 ease-in-out">
//             <div className="fixed top-0 left-0 w-10/12 h-full bg-[#faebd7] rounded-lg shadow-lg z-50 transition-transform duration-700 ease-in-out">
//           {/* List categories */}
//           {Object.keys(categories).map((category) => (
//             <div key={category} onClick={() => selectCategory(category)}>
//               {category}
//             </div>
//           ))}
//         </div>
//         </div>
//         </div>
//       )}

// {selectedCategory && (
//         <div className="subcategory-sidebar">
//              <div className="fixed inset-0  bg-opacity-50 transition-opacity duration-700 ease-in-out">
//             <div className="fixed top-0 left-0 w-10/12 h-full bg-[#faebd7] rounded-lg shadow-lg z-50 transition-transform duration-700 ease-in-out">
//           {categories[selectedCategory].map((subcategory) => (
//             <div key={subcategory} onClick={() => selectSubcategory(subcategory)}>
//               {subcategory}
//             </div>
//           ))}
//         </div>
//         </div>
//         </div>
//       )}
//       </div>
//     </header>


//   )
// }

