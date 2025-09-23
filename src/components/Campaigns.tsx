import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  Plus, 
  Play, 
  Pause,
  Mail,
  MessageSquare,
  Phone,
  Users,
  Calendar,
  TrendingUp
} from "lucide-react";

const mockCampaigns = [
  {
    id: 1,
    name: "Q4 SaaS Outreach",
    description: "Targeting mid-market SaaS companies",
    status: "active",
    progress: 68,
    leads: 500,
    contacted: 340,
    responses: 47,
    conversions: 12,
    channels: ["email", "linkedin"],
    startDate: "Oct 15, 2024",
    endDate: "Dec 31, 2024"
  },
  {
    id: 2,
    name: "LinkedIn Connect Series",
    description: "Professional networking campaign",
    status: "active", 
    progress: 45,
    leads: 400,
    contacted: 180,
    responses: 23,
    conversions: 8,
    channels: ["linkedin", "email"],
    startDate: "Nov 1, 2024",
    endDate: "Dec 15, 2024"
  },
  {
    id: 3,
    name: "Holiday Follow-up",
    description: "Year-end closing sequence",
    status: "scheduled",
    progress: 0,
    leads: 200,
    contacted: 0,
    responses: 0,
    conversions: 0,
    channels: ["email", "phone"],
    startDate: "Dec 1, 2024",
    endDate: "Dec 23, 2024"
  }
];

const getChannelIcon = (channel: string) => {
  switch (channel) {
    case "email": return <Mail className="w-4 h-4" />;
    case "linkedin": return <MessageSquare className="w-4 h-4" />;
    case "phone": return <Phone className="w-4 h-4" />;
    default: return <MessageSquare className="w-4 h-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "active": return "status-success";
    case "paused": return "status-warning";
    case "scheduled": return "bg-accent text-accent-foreground";
    case "completed": return "bg-muted text-muted-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

export const Campaigns = () => {
  return (
    <div className="flex-1 space-y-6 p-6 bg-surface">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Campaigns</h1>
          <p className="text-muted-foreground">Orchestrate your multi-channel outreach</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Campaign
          </Button>
        </div>
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockCampaigns.map((campaign) => (
          <Card key={campaign.id} className="p-6 shadow-soft transition-smooth hover:shadow-medium">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{campaign.name}</h3>
                  <p className="text-sm text-muted-foreground">{campaign.description}</p>
                </div>
              </div>
              <Badge className={getStatusColor(campaign.status)}>
                {campaign.status}
              </Badge>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Campaign Progress</span>
                <span className="text-sm font-medium">{campaign.progress}%</span>
              </div>
              <Progress value={campaign.progress} className="h-2" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 rounded-lg bg-accent/50">
                <div className="flex items-center justify-center mb-1">
                  <Users className="w-4 h-4 text-primary mr-1" />
                  <span className="text-sm font-medium">{campaign.leads}</span>
                </div>
                <p className="text-xs text-muted-foreground">Total Leads</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-accent/50">
                <div className="flex items-center justify-center mb-1">
                  <Mail className="w-4 h-4 text-warning mr-1" />
                  <span className="text-sm font-medium">{campaign.contacted}</span>
                </div>
                <p className="text-xs text-muted-foreground">Contacted</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-accent/50">
                <div className="flex items-center justify-center mb-1">
                  <MessageSquare className="w-4 h-4 text-success mr-1" />
                  <span className="text-sm font-medium">{campaign.responses}</span>
                </div>
                <p className="text-xs text-muted-foreground">Responses</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-accent/50">
                <div className="flex items-center justify-center mb-1">
                  <TrendingUp className="w-4 h-4 text-primary mr-1" />
                  <span className="text-sm font-medium">{campaign.conversions}</span>
                </div>
                <p className="text-xs text-muted-foreground">Conversions</p>
              </div>
            </div>

            {/* Channels */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">Channels:</p>
              <div className="flex items-center space-x-2">
                {campaign.channels.map((channel, index) => (
                  <Badge key={index} variant="outline" className="flex items-center space-x-1">
                    {getChannelIcon(channel)}
                    <span className="capitalize">{channel}</span>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-4 text-xs text-muted-foreground">
              <p>{campaign.startDate} - {campaign.endDate}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                {campaign.status === "active" ? (
                  <Button size="sm" variant="outline">
                    <Pause className="w-4 h-4 mr-2" />
                    Pause
                  </Button>
                ) : (
                  <Button size="sm" variant="outline">
                    <Play className="w-4 h-4 mr-2" />
                    Start
                  </Button>
                )}
                <Button size="sm" variant="ghost">
                  Edit
                </Button>
              </div>
              <Button size="sm">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Campaign Builder */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold mb-4">Quick Campaign Builder</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
            <Mail className="w-6 h-6 text-primary" />
            <span className="font-medium">Email Campaign</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
            <MessageSquare className="w-6 h-6 text-primary" />
            <span className="font-medium">LinkedIn Outreach</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
            <Target className="w-6 h-6 text-primary" />
            <span className="font-medium">Multi-Channel</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};