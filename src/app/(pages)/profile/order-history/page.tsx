import OrderHistory from '@/components/Profile/orderHistory';
export default function profile(){
    return (
        <div className="max-w-5xl h-96 max-h-svh bg-zinc-100 shadow-md rounded-sm font-sans ml-2 mt-2 px-4 content-center overflow-y-auto">
        <OrderHistory />
      </div>
      

    )
}