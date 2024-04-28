"use client";
import { Button } from "@/components/Cart/ui/button"
import { useRouter } from "next/navigation";

export default function Component() {
    const products = [
        {
            image: "/laptop2Deals.png",
            name: "Samsung Laptop",
            price: 126,
            quantity: 1,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            category: "Computers",  // Add this line
            subcategory: "Laptops",  // Add this line
            id: "1",


        },
        {
            image: "/AsusLaptop.png",
            name: "Asus Laptop",
            price: 125,
            quantity: 1,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            category: "Computers",  // Add this line
            subcategory: "Laptops",  // Add this line
            id: "2",

        },
        {
            image: "/iphone.png",
            name: "IPhone 13",
            price: 300,
            quantity: 1,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            category: "Mobiles",  // Add this line
            subcategory: "Iphone",  //Add this line
            id: "3",

        },
        {
            image: "/MonitorDeals.png",
            name: "HP5 Monitor",
            price: 200,
            quantity: 1,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            category: "Computers",  // Add this line
            subcategory: "Desktop Laptops",
            id: "4",

        },

        // Add more products here...

    ];
    const router = useRouter(); // Instantiate the useRouter hook
    const goToCheckout = () => {
        router.push('/cart/checkout'); // Navigate to the checkout page
    };

    return (
        <div className="max-w-6xl mx-auto p-4 bg-white font-latolight">
            <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>
            <div className="grid gap-8 mb-8 px-3 py-3 border-2">
                {products.map((product, index) => (
                    <div key={index} className="flex justify-between pb-4">
                        <div className="flex max-w-3xl">
                            <img src={product.image} alt={product.name} className="mr-4" /> {/* Add this line */}
                            <div>
                                <h2 className="font-semibold text-lg">{product.name}</h2>
                                <p className="text-muted-foreground text-sm mb-2 leading-6">{product.description}</p>
                                <p className="font-medium italic">Unit Price: BHD {product.price}</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button className="text-sm" variant="ghost">Remove</Button>
                            <p className="text-lg">BHD {product.price * product.quantity}</p>
                            <div className="flex items-center justify-between mt-2 bg-[#F9B823] text-white rounded-md">
                                <Button className="px-2 bg-[#F9B823] border-0" variant="outline">-</Button>
                                <span className="mx-2">{product.quantity}</span>
                                <Button className="px-2 bg-[#F9B823] border-0" variant="outline">+</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end">
                <div className="bg-white max-w-96 min-w-96 p-4  text-black">
                    <h2 className="text-3xl mb-4 ">Cart Summary</h2>
                    <div className="flex justify-between items-center mt-2 mb-4">
                        <span className="text-sm italic font-medium">Total:</span>
                        <span className="text-sm  italic font-medium">BHD 700</span>
                    </div>

                    <Button className="w-full bg-[#F9B823] text-white py-2 px-4 rounded font-lg" onClick={goToCheckout}>Proceed to Checkout</Button>                </div>
            </div>
        </div>
    )
}
