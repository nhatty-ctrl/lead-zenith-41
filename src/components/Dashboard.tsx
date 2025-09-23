import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Mail, 
  Phone, 
  MessageSquare,
  ArrowUpRight,
  Brain,
  Sparkles
} from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";

const metrics = [
  {
    title: "Total Leads",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Qualified Leads",
    value: "1,203",
    change: "+8.2%",
    trend: "up",
    icon: Target,
    color: "text-success"
  },
  {
    title: "Active Campaigns",
    value: "24",
    change: "+3",
    trend: "up",
    icon: Mail,
    color: "text-warning"
  },
  {
    title: "Conversion Rate",
    value: "18.4%",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
    color: "text-success"
  }
];

const recentActivities = [
  {
    type: "lead_qualified",
    title: "New qualified lead from LinkedIn",
    description: "Sarah Johnson - Marketing Director at TechCorp",
    time: "2 minutes ago",
    score: 95,
    icon: Target
  },
  {
    type: "campaign_sent",
    title: "Cold outreach campaign launched",
    description: "250 emails sent to Software Engineers",
    time: "15 minutes ago",
    icon: Mail
  },
  {
    type: "response_received",
    title: "Positive response received",
    description: "Michael Chen replied to LinkedIn message",
    time: "1 hour ago",
    icon: MessageSquare
  },
  {
    type: "playbook_updated",
    title: "Playbook optimized by AI",
    description: "SaaS Sales template improved by 12%",
    time: "2 hours ago",
    icon: Brain
  }
];

const activeCampaigns = [
  {
    name: "Q4 SaaS Outreach",
    progress: 68,
    sent: 340,
    total: 500,
    responses: 47,
    status: "active"
  },
  {
    name: "LinkedIn Connect Series",
    progress: 45,
    sent: 180,
    total: 400,
    responses: 23,
    status: "active"
  },
  {
    name: "Follow-up Sequence",
    progress: 89,
    sent: 267,
    total: 300,
    responses: 34,
    status: "completing"
  }
];

export const Dashboard = () => {
  return (
    <div className="flex-1 space-y-6 p-6 bg-surface">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl">
        <img 
          src={dashboardHero} 
          alt="Sales automation dashboard" 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent flex items-center">
          <div className="p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Welcome back to Lead</h1>
            <p className="text-primary-foreground/90 mb-4 max-w-md">
              Your AI-powered sales automation is working around the clock. 
              Here's what's happening with your campaigns.
            </p>
            <Button variant="secondary" className="shadow-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              View AI Insights
            </Button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title} className="p-6 gradient-card shadow-soft transition-smooth hover:shadow-medium">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-accent ${metric.color}`}>
                <metric.icon className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-success">
                {metric.change}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
              <p className="text-2xl font-bold text-foreground">{metric.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
            <Button variant="ghost" size="sm">
              View All
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-smooth">
                <div className="p-2 rounded-lg bg-primary/10">
                  <activity.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
                {activity.score && (
                  <Badge className="score-high text-xs">
                    {activity.score}%
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Active Campaigns */}
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Active Campaigns</h3>
            <Button variant="ghost" size="sm">
              Manage All
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="space-y-6">
            {activeCampaigns.map((campaign, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{campaign.name}</h4>
                  <Badge 
                    variant={campaign.status === "active" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {campaign.status}
                  </Badge>
                </div>
                <Progress value={campaign.progress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{campaign.sent}/{campaign.total} sent</span>
                  <span>{campaign.responses} responses</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};