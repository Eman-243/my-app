import Sidebar from '@/components/Dashboard/sidebar'
import Topbar from '@/components/Dashboard/topbar'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="grid grid-cols-6 h-svh">
                <div>
                    <Sidebar />

                </div>
                <div className='col-span-5'>
                    <Topbar />
                    {children}

                </div>
            </div>
        </>
    );
}