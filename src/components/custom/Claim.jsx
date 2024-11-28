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
import { getClaim } from "@/store/claims/claimApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ClaimList = () => {
  const { claim } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = async () => {
    if (Math.ceil(claim?.claims?.count / 10) > currentPage) {
      await dispatch(getClaim(currentPage + 1));
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = async () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
      await setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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
                  <th className="px-4 py-2 text-gray-800"># ID</th>
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
                      <td className="px-4 py-2">{el?.id}</td>
                      <td className="px-4 py-2">{el.claim_amount}</td>
                      <td className="px-4 py-2">{el.remark}</td>
                      <td className="px-4 py-2">{el.expense_date}</td>
                      <td className="px-4 py-2">
                        {el.createdAt?.substring(0, 10)}
                      </td>
                      <td className="px-4 py-2">{el.location?.name}</td>
                      <td className="px-4 py-2 text-center space-x-2">
                        <Button variant="secondary" size="sm">
                          View Bill
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        {claim?.claims?.count > 10 && (
          <div className="m-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={handlePrevious} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>{currentPage}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext onClick={handleNext} />
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
