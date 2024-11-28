import { useSelector } from "react-redux";

const OrderCard = () => {
  const { claim } = useSelector((store) => store);
  console.log("claim PPP ", claim);
  return (
    <div>
      <h1 className="text-3xl font-bold secondary-radiant">Dashboard</h1>
      <p className="text-lg secondary-radiant">
        You can see all your claims here
      </p>
      <div className="bg-white rounded mt-5 mb-5 p-5 ">
        <h3 className="mb-2 secondary-radiant">Claim Status</h3>
        <div className="flex gap-5 flex-wrap justify-between">
          <div className="border border-l-4 border-l-orange-400 rounded-lg grow w-60 p-4">
            <h3 className="text-2xl text-orange-400 font-bold p-2">
              {claim?.dashboardCounts?.totalClaim ?? 0}
            </h3>
            <h4 className="text-lg text-gray-600 font-bold">Total</h4>
            <p className="text-sm text-gray-600 font-bold">Claims</p>
          </div>
          <div className="border border-l-4 border-l-teal-400 rounded-lg grow w-60 p-4 ">
            <h3 className="text-2xl text-teal-400 font-bold p-2">0</h3>
            <h4 className="text-lg text-gray-600 font-bold">Approved</h4>
            <p className="text-sm text-gray-600 font-bold">Claims</p>
          </div>
          <div className="border border-l-4 border-l-gray-400 rounded-lg grow w-60 p-4 ">
            <h3 className="text-2xl text-gray-400 font-bold p-2">0</h3>
            <h4 className="text-lg text-gray-600 font-bold">Pending</h4>
            <p className="text-sm text-gray-600 font-bold">Claims</p>
          </div>
          <div className="border border-l-4 border-l-black-400 rounded-lg grow w-60 p-4 ">
            <h3 className="text-2xl text-red-500 font-bold p-2">0</h3>
            <h4 className="text-lg text-black-400 font-bold">Rejected</h4>
            <p className="text-sm text-gray-600 font-bold">Claims</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
