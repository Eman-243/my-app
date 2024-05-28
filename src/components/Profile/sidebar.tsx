import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="w-full max-w-50 min-h-scree bg-zinc-100 shadow-md rounded-sm font-sans box-content overflow-auto flex-shrink-0 flex-grow h-full ">
          <h1 className="text-lg font-bold pb-4 pt-1 text-center mt-1">Account Dashboard</h1>
          <div className="space-y-4">
            <div className="mt-3">
            <Link href="/profile" className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 px-4 pb-5">
                <span className="text-base">Main Dashboard</span>
              </Link>
              <Link href="/profile/account-information" className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 px-4 pb-5">
                <span className="text-base">Account Information</span>
              </Link>
              <Link href="/profile/order-history" className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 px-4 pb-5">
                <span className="text-base">Order History</span>
              </Link>
              <Link href="/dashboard" className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 px-4 pb-5">
                <span className="text-base">Admin Dashboard</span>
              </Link>
              
              <button className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 px-4 pb-5">
                <span className="text-base">Logout</span>
              </button>
            </div>
          </div>
        </div>
      );
      
}