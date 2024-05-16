import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
return (
    <>
    <div className="flex flex-col h-screen justify-between">

        <Header /> 
        <main className="mb-auto">
      

            {children}
        </main>
        <Footer/>

        </div>

    </>
);
}