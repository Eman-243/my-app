
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/Cart/ui/card"
import { Separator } from "@/components/Cart/ui/separator"
import { Label } from "@/components/Cart/ui/label"
import { Input } from "@/components/Cart/ui/input"
import { Button } from "@/components/Cart/ui/button"
interface IconProps extends React.SVGProps<SVGSVGElement> { }

export default function Component() {
  return (
    <>
      <div className="max-w-6xl mx-auto mb-8 font-sans">
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
            <CardDescription>Review your items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <h2 className="font-semibold text-base">Hooded Jacket</h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">Black</div>
              </div>
              <div className="ml-auto font-semibold">$99.00</div>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <h2 className="font-semibold text-base">Sweatshirt</h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">Gray</div>
              </div>
              <div className="ml-auto font-semibold">$49.00</div>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <h2 className="font-semibold text-base">T-Shirt</h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">White</div>
              </div>
              <div className="ml-auto font-semibold">$19.00</div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <TruckIcon className="w-4 h-4" />
              <div className="text-sm">Free shipping</div>
            </div>
            <div className="ml-auto font-semibold">$167.00</div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Shipping information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4 md:gap-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="first-name">
                    First name
                  </Label>
                  <Input id="first-name" placeholder="Enter first name" required />
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="last-name">
                    Last name
                  </Label>
                  <Input id="last-name" placeholder="Enter last name" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="address">
                  Address
                </Label>
                <Input id="address" placeholder="Enter address" required />
              </div>
              <div className="grid gap-2 md:grid-cols-3">
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="city">
                    City
                  </Label>
                  <Input id="city" placeholder="Enter city" required />
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="state">
                    State
                  </Label>
                  <Input id="state" placeholder="Enter state" required />
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="zip">
                    ZIP
                  </Label>
                  <Input id="zip" placeholder="Enter ZIP" required />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4 md:gap-6">
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="card-number">
                  Card number
                </Label>
                <Input id="card-number" placeholder="Enter card number" />
              </div>
              <div className="grid gap-2 md:grid-cols-3">
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="expiration-date">
                    Expiration date
                  </Label>
                  <Input id="expiration-date" placeholder="MM/YY" />
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="cvv">
                    CVV
                  </Label>
                  <Input id="cvv" placeholder="Enter CVV" />
                </div>
                <div className="grid gap-2  items-end ">
                  <Button className="bg-[#F9B823]" size="lg">Place order</Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

      </div>
    </>
  )
}

function TruckIcon(props: IconProps) {
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
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}
