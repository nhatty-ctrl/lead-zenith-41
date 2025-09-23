import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Plus, 
  Video, 
  FileText, 
  Play,
  Edit,
  Copy,
  MoreHorizontal
} from "lucide-react";

const mockPlaybooks = [
  {
    id: 1,
    name: "SaaS Cold Outreach",
    description: "Proven templates for software companies",
    phases: 4,
    templates: 12,
    usage: "847 sends",
    conversion: "18.4%",
    lastUpdated: "2 days ago",
    status: "active"
  },
  {
    id: 2,
    name: "LinkedIn Connect Series",
    description: "Professional networking and connection building", 
    phases: 3,
    templates: 8,
    usage: "523 sends",
    conversion: "24.1%",
    lastUpdated: "1 week ago",
    status: "active"
  },
  {
    id: 3,
    name: "E-commerce Outreach",
    description: "Tailored for online retail and e-commerce",
    phases: 5,
    templates: 15,
    usage: "234 sends", 
    conversion: "12.7%",
    lastUpdated: "3 days ago",
    status: "draft"
  }
];

export const Playbooks = () => {
  return (
    <div className="flex-1 space-y-6 p-6 bg-surface">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Playbooks</h1>
          <p className="text-muted-foreground">Create and manage your sales templates</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Video className="w-4 h-4 mr-2" />
            Import from Video
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Playbook
          </Button>
        </div>
      </div>

      {/* Playbooks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPlaybooks.map((playbook) => (
          <Card key={playbook.id} className="p-6 shadow-soft transition-smooth hover:shadow-medium">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <Badge variant={playbook.status === "active" ? "default" : "secondary"}>
                {playbook.status}
              </Badge>
            </div>
            
            <h3 className="font-semibold text-foreground mb-2">{playbook.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{playbook.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Phases:</span>
                <span className="font-medium">{playbook.phases}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Templates:</span>
                <span className="font-medium">{playbook.templates}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Usage:</span>
                <span className="font-medium">{playbook.usage}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Conversion:</span>
                <span className="font-medium text-success">{playbook.conversion}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground">{playbook.lastUpdated}</span>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="ghost">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Copy className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Create Section */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold mb-4">Quick Create</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
            <FileText className="w-8 h-8 text-primary" />
            <span className="font-medium">Text Template</span>
            <span className="text-xs text-muted-foreground">Create from scratch</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
            <Video className="w-8 h-8 text-primary" />
            <span className="font-medium">Video Import</span>
            <span className="text-xs text-muted-foreground">Extract from video content</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};