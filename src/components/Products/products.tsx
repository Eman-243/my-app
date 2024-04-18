
export default function Component() {
    return (
      <div className="max-w-5xl	max-h-max bg-zinc-100 shadow-sm rounded-sm font-sans ml-2 mt-2 flex-shrink-0 flex-grow">
        <div className="grid grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 flex flex-col items-center">
            <HeartIcon className="self-end text-yellow-400" />
            <img
              alt="Samsung Laptop"
              className="mb-4"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/150",
                objectFit: "cover",
              }}
              width="200"
            />
            <h2 className="text-lg font-semibold">Samsung Laptop</h2>
            <p className="text-sm font-medium text-gray-600">BHD 126</p>
          </div>
          <div className="border rounded-lg p-4 flex flex-col items-center">
            <HeartIcon className="self-end text-yellow-400" />
            <img
              alt="Asus Laptop"
              className="mb-4"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/150",
                objectFit: "cover",
              }}
              width="200"
            />
            <h2 className="text-lg font-semibold">Asus Laptop</h2>
            <p className="text-sm font-medium text-gray-600">BHD 125</p>
          </div>
          <div className="border rounded-lg p-4 flex flex-col items-center">
            <HeartIcon className="self-end text-yellow-400" />
            <img
              alt="IPhone 13"
              className="mb-4"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/150",
                objectFit: "cover",
              }}
              width="200"
            />
            <h2 className="text-lg font-semibold">IPhone 13</h2>
            <p className="text-sm font-medium text-gray-600">BHD 300</p>
          </div>
          <div className="border rounded-lg p-4 flex flex-col items-center">
            <HeartIcon className="self-end text-yellow-400" />
            <img
              alt="HP Monitor"
              className="mb-4"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/150",
                objectFit: "cover",
              }}
              width="200"
            />
            <h2 className="text-lg font-semibold">HP Monitor</h2>
            <p className="text-sm font-medium text-gray-600">BHD 200</p>
          </div>
        </div>
      </div>
    )
  }
  
  function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  }