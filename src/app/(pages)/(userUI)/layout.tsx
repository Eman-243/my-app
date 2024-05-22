import Path from '@/components/Path/path'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
return (
    <>
    <div className='my-4'>
<Path/>
</div>
        <main className="mb-auto">
      

            {children}
        </main>


    </>
);
}