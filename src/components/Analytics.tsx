import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Mail,
  MessageSquare,
  Phone,
  Users,
  Target,
  Calendar,
  Download
} from "lucide-react";

const channelMetrics = [
  {
    channel: "Email",
    icon: Mail,
    sent: 2847,
    opened: 1203,
    clicked: 245,
    replied: 89,
    openRate: 42.3,
    clickRate: 8.6,
    replyRate: 3.1,
    trend: "up"
  },
  {
    channel: "LinkedIn",
    icon: MessageSquare,
    sent: 1456,
    opened: 892,
    clicked: 234,
    replied: 67,
    openRate: 61.3,
    clickRate: 16.1,
    replyRate: 4.6,
    trend: "up"
  },
  {
    channel: "Phone",
    icon: Phone,
    sent: 234,
    opened: 198,
    clicked: 0,
    replied: 45,
    openRate: 84.6,
    clickRate: 0,
    replyRate: 19.2,
    trend: "down"
  }
];

const campaignPerformance = [
  {
    name: "Q4 SaaS Outreach",
    leads: 500,
    contacted: 340,
    responses: 47,
    conversions: 12,
    roi: "340%",
    status: "active"
  },
  {
    name: "LinkedIn Connect Series", 
    leads: 400,
    contacted: 180,
    responses: 23,
    conversions: 8,
    roi: "245%",
    status: "active"
  },
  {
    name: "Follow-up Sequence",
    leads: 300,
    contacted: 267,
    responses: 34,
    conversions: 15,
    roi: "420%",
    status: "completed"
  }
];

const topPerformingPlaybooks = [
  {
    name: "SaaS Cold Outreach",
    usage: "847 sends",
    conversion: 18.4,
    avgResponse: "2.3 days",
    improvement: "+12%"
  },
  {
    name: "LinkedIn Connect Series",
    usage: "523 sends", 
    conversion: 24.1,
    avgResponse: "1.8 days",
    improvement: "+8%"
  },
  {
    name: "Follow-up Automation",
    usage: "392 sends",
    conversion: 31.2,
    avgResponse: "4.1 days",
    improvement: "+15%"
  }
];

export const Analytics = () => {
  return (
    <div className="flex-1 space-y-6 p-6 bg-surface">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track performance across all channels and campaigns</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 Days
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <Badge className="text-success">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12.5%
            </Badge>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Outreach</p>
            <p className="text-2xl font-bold text-foreground">4,537</p>
          </div>
        </Card>
        
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-success/10">
              <Target className="w-5 h-5 text-success" />
            </div>
            <Badge className="text-success">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8.2%
            </Badge>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Responses</p>
            <p className="text-2xl font-bold text-foreground">201</p>
          </div>
        </Card>

        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-warning/10">
              <BarChart3 className="w-5 h-5 text-warning" />
            </div>
            <Badge className="text-success">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15.3%
            </Badge>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Conversion Rate</p>
            <p className="text-2xl font-bold text-foreground">4.4%</p>
          </div>
        </Card>

        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-success/10">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <Badge className="text-success">
              <TrendingUp className="w-3 h-3 mr-1" />
              +23.1%
            </Badge>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">ROI</p>
            <p className="text-2xl font-bold text-foreground">312%</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Channel Performance */}
        <Card className="p-6 shadow-soft">
          <h3 className="text-lg font-semibold mb-6">Channel Performance</h3>
          <div className="space-y-6">
            {channelMetrics.map((channel) => (
              <div key={channel.channel} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <channel.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{channel.channel}</span>
                  </div>
                  <Badge variant="outline" className={channel.trend === "up" ? "text-success" : "text-destructive"}>
                    {channel.trend === "up" ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                    {channel.trend === "up" ? "↑" : "↓"}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Open Rate</p>
                    <p className="font-medium">{channel.openRate}%</p>
                    <Progress value={channel.openRate} className="h-1 mt-1" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Click Rate</p>
                    <p className="font-medium">{channel.clickRate}%</p>
                    <Progress value={channel.clickRate * 5} className="h-1 mt-1" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Reply Rate</p>
                    <p className="font-medium">{channel.replyRate}%</p>
                    <Progress value={channel.replyRate * 10} className="h-1 mt-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Campaign Performance */}
        <Card className="p-6 shadow-soft">
          <h3 className="text-lg font-semibold mb-6">Campaign Performance</h3>
          <div className="space-y-4">
            {campaignPerformance.map((campaign, index) => (
              <div key={index} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{campaign.name}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge className="text-success">ROI: {campaign.roi}</Badge>
                    <Badge variant={campaign.status === "active" ? "default" : "secondary"}>
                      {campaign.status}
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 text-sm">
                  <div className="text-center">
                    <p className="text-muted-foreground">Leads</p>
                    <p className="font-medium">{campaign.leads}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground">Contacted</p>
                    <p className="font-medium">{campaign.contacted}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground">Responses</p>
                    <p className="font-medium">{campaign.responses}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground">Conversions</p>
                    <p className="font-medium text-success">{campaign.conversions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Top Performing Playbooks */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold mb-6">Top Performing Playbooks</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPerformingPlaybooks.map((playbook, index) => (
            <div key={index} className="p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">{playbook.name}</h4>
                <Badge className="text-success">{playbook.improvement}</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Usage:</span>
                  <span className="font-medium">{playbook.usage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Conversion:</span>
                  <span className="font-medium text-success">{playbook.conversion}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Avg Response:</span>
                  <span className="font-medium">{playbook.avgResponse}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};