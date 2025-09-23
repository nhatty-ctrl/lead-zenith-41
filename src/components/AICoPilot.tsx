import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { 
  Brain, 
  MessageSquare, 
  Lightbulb, 
  Target, 
  TrendingUp,
  Send,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Clock
} from "lucide-react";

const aiRoles = [
  {
    id: "analyst",
    name: "Analyst",
    description: "Scrape & segment leads",
    icon: Target,
    status: "active",
    lastAction: "Analyzed 45 new leads from TechCrunch list"
  },
  {
    id: "strategist", 
    name: "Strategist",
    description: "Plan campaign strategy",
    icon: Brain,
    status: "planning",
    lastAction: "Creating Q4 outreach strategy for SaaS segment"
  },
  {
    id: "operator",
    name: "Operator", 
    description: "Draft messages",
    icon: MessageSquare,
    status: "ready",
    lastAction: "Generated 12 personalized LinkedIn messages"
  },
  {
    id: "planner",
    name: "Planner",
    description: "Schedule & monitor",
    icon: Clock,
    status: "monitoring",
    lastAction: "Optimized send times for Europe timezone"
  }
];

const suggestions = [
  {
    type: "optimization",
    priority: "high",
    title: "Improve Email Open Rates",
    description: "Your cold email open rate is 23%. I recommend testing shorter subject lines and adding personalization tokens.",
    action: "Apply Suggestions",
    impact: "+8% open rate expected"
  },
  {
    type: "lead_quality",
    priority: "medium", 
    title: "Focus on High-Value Leads",
    description: "23 leads from Fortune 500 companies have been inactive. Consider a premium outreach sequence.",
    action: "Create Sequence",
    impact: "Target $2.3M potential pipeline"
  },
  {
    type: "timing",
    priority: "medium",
    title: "Optimal Send Time",
    description: "Based on response patterns, Tuesday 10 AM shows 34% higher reply rates for your audience.",
    action: "Update Schedule",
    impact: "+34% reply rate"
  },
  {
    type: "content",
    priority: "low",
    title: "Refresh Playbook Content",
    description: "Your SaaS playbook hasn't been updated in 30 days. Industry trends suggest adding AI/automation benefits.",
    action: "Update Playbook", 
    impact: "Stay current with trends"
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "text-destructive";
    case "medium": return "text-warning";
    case "low": return "text-muted-foreground";
    default: return "text-muted-foreground";
  }
};

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "high": return AlertCircle;
    case "medium": return Clock;
    case "low": return Lightbulb;
    default: return Lightbulb;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "active": return "status-success";
    case "planning": return "status-warning";
    case "ready": return "bg-primary/10 text-primary";
    case "monitoring": return "bg-accent text-accent-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

export const AICoPilot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      type: "ai",
      content: "Hello! I'm your AI sales co-pilot. I've been analyzing your campaigns and have some recommendations. How can I help you optimize your sales process today?",
      timestamp: "Just now"
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatHistory([...chatHistory, {
      type: "user",
      content: message,
      timestamp: "Just now"
    }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: "ai", 
        content: "I understand you want to improve your LinkedIn outreach. Based on your current data, I recommend focusing on personalized connection requests with value propositions. Would you like me to draft some templates?",
        timestamp: "Just now"
      }]);
    }, 1500);
    
    setMessage("");
  };

  return (
    <div className="flex-1 p-6 bg-surface">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Co-Pilot</h1>
            <p className="text-muted-foreground">Your intelligent sales automation assistant</p>
          </div>
          <Badge className="bg-primary/10 text-primary">
            <Sparkles className="w-4 h-4 mr-2" />
            4 Active Agents
          </Badge>
        </div>

        {/* AI Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiRoles.map((role) => (
            <Card key={role.id} className="p-4 shadow-soft transition-smooth hover:shadow-medium">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <role.icon className="w-5 h-5 text-primary" />
                </div>
                <Badge className={getStatusColor(role.status)}>
                  {role.status}
                </Badge>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{role.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
              <div className="bg-accent/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground">{role.lastAction}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Suggestions */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">AI Recommendations</h3>
              <Badge variant="outline" className="text-xs">
                {suggestions.length} suggestions
              </Badge>
            </div>
            <ScrollArea className="h-96">
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => {
                  const PriorityIcon = getPriorityIcon(suggestion.priority);
                  return (
                    <div key={index} className="border border-border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          <PriorityIcon className={`w-4 h-4 ${getPriorityColor(suggestion.priority)}`} />
                          <h4 className="font-medium text-sm">{suggestion.title}</h4>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getPriorityColor(suggestion.priority)}`}
                        >
                          {suggestion.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-success">{suggestion.impact}</span>
                        <Button size="sm" variant="outline">
                          {suggestion.action}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </Card>

          {/* Chat Interface */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Chat with AI</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>
            
            <ScrollArea className="h-64 mb-4">
              <div className="space-y-4">
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-xs rounded-lg p-3 ${
                      chat.type === "user" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-accent text-accent-foreground"
                    }`}>
                      <p className="text-sm">{chat.content}</p>
                      <p className="text-xs opacity-70 mt-1">{chat.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex space-x-2">
              <Textarea
                placeholder="Ask your AI co-pilot anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[60px] resize-none"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button onClick={handleSendMessage} className="px-3">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="p-6 shadow-soft">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="font-medium">Analyze Performance</span>
              <span className="text-xs text-muted-foreground">Get campaign insights</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Target className="w-6 h-6 text-primary" />
              <span className="font-medium">Optimize Targeting</span>
              <span className="text-xs text-muted-foreground">Improve lead quality</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              <span className="font-medium">Draft Messages</span>
              <span className="text-xs text-muted-foreground">Generate personalized content</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};