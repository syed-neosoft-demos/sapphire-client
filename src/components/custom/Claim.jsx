import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSelector } from "react-redux";

const ClaimList = () => {
  const { claim } = useSelector((store) => store);
  return (
    <div className="grow bg-white p-4 rounded">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>List of claim</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-left text-gray-600">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-2 text-gray-800">Amount</th>
                  <th className="px-4 py-2 text-gray-800">Remark</th>
                  <th className="px-4 py-2 text-gray-800">Expense Date</th>
                  <th className="px-4 py-2 text-gray-800">Created Date</th>
                  <th className="px-4 py-2 text-gray-800">Location</th>
                  <th className="px-4 py-2 text-gray-800 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {claim?.claims?.rows &&
                  claim?.claims?.rows.map((el) => (
                    <tr
                      key={el.id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-2">{el.claim_amount}</td>
                      <td className="px-4 py-2">{el.remark}</td>
                      <td className="px-4 py-2">{el.createdAt}</td>
                      <td className="px-4 py-2">{el.expense_date}</td>
                      <td className="px-4 py-2">{el.location}</td>
                      <td className="px-4 py-2 text-center space-x-2">
                        <Button variant="secondary" size="sm">
                          View Bill
                        </Button>
                        {/* <Button variant="destructive" size="sm">
                          Delete
                        </Button> */}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        {claim?.claims?.count > 5 && (
          <div className="m-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ClaimList;
