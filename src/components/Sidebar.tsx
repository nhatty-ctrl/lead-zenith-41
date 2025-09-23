import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Target, 
  BarChart3, 
  Brain, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "leads", name: "Lead Management", icon: Users, badge: "247" },
  { id: "playbooks", name: "Playbooks", icon: BookOpen },
  { id: "campaigns", name: "Campaigns", icon: Target, badge: "12" },
  { id: "analytics", name: "Analytics", icon: BarChart3 },
  { id: "copilot", name: "AI Co-Pilot", icon: Brain, badge: "New" },
];

const bottomNavigation = [
  { id: "settings", name: "Settings", icon: Settings },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-full flex-col">
        {/* Logo Header */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-sidebar-foreground">Lead</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>

        {/* Main Navigation */}
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-2">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start transition-smooth",
                  activeTab === item.id 
                    ? "bg-primary text-primary-foreground shadow-soft" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  collapsed && "px-2"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <item.icon className={cn("w-5 h-5", !collapsed && "mr-3")} />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left">{item.name}</span>
                    {item.badge && (
                      <Badge 
                        variant={activeTab === item.id ? "secondary" : "outline"}
                        className="ml-auto text-xs"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}
              </Button>
            ))}
          </nav>
        </ScrollArea>

        {/* Bottom Navigation */}
        <div className="border-t border-sidebar-border p-3">
          {bottomNavigation.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent",
                collapsed && "px-2"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <item.icon className={cn("w-5 h-5", !collapsed && "mr-3")} />
              {!collapsed && <span>{item.name}</span>}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};