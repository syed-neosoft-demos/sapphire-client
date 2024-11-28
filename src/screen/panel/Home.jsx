import PanelLayout from "@/components/layout/PanelLayout";
import TopCard from "@/components/custom/Card";
import ClaimList from "@/components/custom/Claim";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClaim, getCounts } from "@/store/claims/claimApi";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClaim(1));
    dispatch(getCounts());
  }, []);
  return (
    <PanelLayout>
      <TopCard />
      <ClaimList />
    </PanelLayout>
  );
};

export default Dashboard;
