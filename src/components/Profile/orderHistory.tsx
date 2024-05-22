import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Component() {
  const cards = [
    {
      title: "Order Status",
      status: "Processing",
      progressValue: 50,
      estimatedDelivery: "May 10, 2023"
    },
    {
      title: "Order Status",
      status: "Shipped",
      progressValue: 75,
      estimatedDelivery: "May 12, 2023"
    },
    {
      title: "Order Status",
      status: "Delivered",
      progressValue: 100,
      deliveredOn: "May 13, 2023"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center font-sans my-4">
      <div className="w-full">
        <div className="grid gap-6">
          {cards.map((card, index) => (
            <div key={index}>
              <Card>
                <CardHeader className="px-6 py-4">
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="text-base text-gray-500 dark:text-gray-400">Status</p>
                      <p className="text-sm font-semibold">{card.status}</p>
                    </div>
                    <Progress className="w-full max-w-[150px]" value={card.progressValue} />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="text-base text-gray-500 dark:text-gray-400">Estimated Delivery</p>
                      <p className="text-sm font-semibold">{card.estimatedDelivery || card.deliveredOn}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
