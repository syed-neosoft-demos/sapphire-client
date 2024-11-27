import PanelLayout from "@/components/layout/PanelLayout";
import TopCard from "@/components/custom/Card";
import Activity from "@/components/custom/Activity";

const Dashboard = () => {
  return (
    <PanelLayout>
      <TopCard />
      <Activity />
    </PanelLayout>
  );
};

export default Dashboard;
