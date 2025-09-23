import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Dashboard } from "./Dashboard";
import { LeadManagement } from "./LeadManagement";
import { AICoPilot } from "./AICoPilot";
import { Playbooks } from "./Playbooks";
import { Campaigns } from "./Campaigns";
import { Analytics } from "./Analytics";

export const MainLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "leads":
        return <LeadManagement />;
      case "playbooks":
        return <Playbooks />;
      case "campaigns":
        return <Campaigns />;
      case "analytics":
        return <Analytics />;
      case "copilot":
        return <AICoPilot />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};