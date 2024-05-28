export default function NotFound() {
    return (
            <div className="flex flex-col items-center justify-center h-full  m-auto  text-black p-8 rounded-lg">
                <div className="max-w-xl">
                <h1 className="text-8xl font-bold font-sans mb-4 text-center">Oops!</h1>
                <h2 className="font-sans text-center">404 - PAGE NOT FOUND</h2>
                <p className="text-center font-sans mt-2">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                </div>
            </div>
    );
}