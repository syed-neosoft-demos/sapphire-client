import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PanelLayout from "@/components/layout/PanelLayout";

const ViewBill = () => {
  const activity = {
    amount: 500,
    remark: "Travel",
    expenseDate: "2024-03-01",
    createdDate: "2024-03-05",
    location: "New York",
    billUrl: "https://example.com/bill.pdf",
  };
  return (
    <PanelLayout>
      <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
        <Card className="w-full max-w-md shadow-lg bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-800">
              Bill Details
            </CardTitle>
            <CardDescription className="text-sm text-gray-500">
              View detailed information about the selected activity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Amount */}
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Amount:</span>
                <span className="font-medium text-gray-800">
                  ₹{activity.amount}
                </span>
              </div>

              {/* Remark */}
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Remark:</span>
                <span className="font-medium text-gray-800">
                  {activity.remark}
                </span>
              </div>

              {/* Expense Date */}
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Expense Date:</span>
                <span className="font-medium text-gray-800">
                  {activity.expenseDate}
                </span>
              </div>

              {/* Created Date */}
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Created Date:</span>
                <span className="font-medium text-gray-800">
                  {activity.createdDate}
                </span>
              </div>

              {/* Location */}
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium text-gray-800">
                  {activity.location}
                </span>
              </div>

              {/* Bill URL */}
              <div className="flex flex-col space-y-2">
                <span className="text-gray-600">Bill:</span>
                <a
                  href={activity.billUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 text-sm"
                >
                  View Bill Document
                </a>
              </div>
            </div>
          </CardContent>
          <div className="flex justify-end p-4 border-t">
            <Button variant="secondary">Close</Button>
          </div>
        </Card>
      </div>
    </PanelLayout>
  );
};

export default ViewBill;
