import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Download, 
  Plus,
  MapPin,
  Building,
  User,
  Mail,
  Phone,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";

const mockLeads = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    email: "sarah.j@techcorp.com",
    phone: "+1 (555) 123-4567",
    score: 95,
    status: "qualified",
    source: "LinkedIn",
    lastContact: "2 hours ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "VP of Engineering",
    company: "DataFlow Inc",
    location: "New York, NY",
    email: "mchen@dataflow.com",
    phone: "+1 (555) 987-6543",
    score: 78,
    status: "contacted",
    source: "Website",
    lastContact: "1 day ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateLab",
    location: "Austin, TX",
    email: "e.rodriguez@innovatelab.com",
    phone: "+1 (555) 456-7890",
    score: 62,
    status: "new",
    source: "CSV Import",
    lastContact: "Never"
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO",
    company: "ScaleUp Ventures",
    location: "Seattle, WA",
    email: "dpark@scaleup.vc",
    phone: "+1 (555) 321-0987",
    score: 89,
    status: "qualified",
    source: "LinkedIn",
    lastContact: "5 hours ago"
  }
];

const getScoreClass = (score: number) => {
  if (score >= 80) return "score-high";
  if (score >= 60) return "score-medium";
  return "score-low";
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "qualified": return <CheckCircle className="w-4 h-4 text-success" />;
    case "contacted": return <Clock className="w-4 h-4 text-warning" />;
    default: return <XCircle className="w-4 h-4 text-muted-foreground" />;
  }
};

const getStatusBadge = (status: string) => {
  const variants: Record<string, string> = {
    qualified: "status-success",
    contacted: "status-warning", 
    new: "bg-muted text-muted-foreground"
  };
  return variants[status] || "bg-muted text-muted-foreground";
};

export const LeadManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [scoreFilter, setScoreFilter] = useState("all");

  const filteredLeads = mockLeads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesScore = scoreFilter === "all" || 
                        (scoreFilter === "high" && lead.score >= 80) ||
                        (scoreFilter === "medium" && lead.score >= 60 && lead.score < 80) ||
                        (scoreFilter === "low" && lead.score < 60);
    
    return matchesSearch && matchesStatus && matchesScore;
  });

  return (
    <div className="flex-1 space-y-6 p-6 bg-surface">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Lead Management</h1>
          <p className="text-muted-foreground">Manage and qualify your sales leads</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Import Leads
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-6 shadow-soft">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search leads by name, company, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
            </SelectContent>
          </Select>
          <Select value={scoreFilter} onValueChange={setScoreFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Score" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Scores</SelectItem>
              <SelectItem value="high">High (80+)</SelectItem>
              <SelectItem value="medium">Medium (60-79)</SelectItem>
              <SelectItem value="low">Low (&lt;60)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>
      </Card>

      {/* Leads Table */}
      <Card className="shadow-soft">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Lead</TableHead>
              <TableHead>Company & Role</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Last Contact</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.map((lead) => (
              <TableRow key={lead.id} className="hover:bg-accent/50 transition-smooth">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{lead.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{lead.company}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{lead.role}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{lead.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{lead.phone}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{lead.location}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={`${getScoreClass(lead.score)} text-xs font-medium`}>
                    {lead.score}%
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(lead.status)}
                    <Badge className={`${getStatusBadge(lead.status)} text-xs capitalize`}>
                      {lead.status}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs">
                    {lead.source}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-muted-foreground">{lead.lastContact}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                    <Button size="sm" variant="ghost">
                      View
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 shadow-soft">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">{filteredLeads.length}</p>
            <p className="text-sm text-muted-foreground">Total Leads</p>
          </div>
        </Card>
        <Card className="p-4 shadow-soft">
          <div className="text-center">
            <p className="text-2xl font-bold text-success">
              {filteredLeads.filter(l => l.status === "qualified").length}
            </p>
            <p className="text-sm text-muted-foreground">Qualified</p>
          </div>
        </Card>
        <Card className="p-4 shadow-soft">
          <div className="text-center">
            <p className="text-2xl font-bold text-warning">
              {filteredLeads.filter(l => l.status === "contacted").length}
            </p>
            <p className="text-sm text-muted-foreground">Contacted</p>
          </div>
        </Card>
        <Card className="p-4 shadow-soft">
          <div className="text-center">
            <p className="text-2xl font-bold text-muted-foreground">
              {filteredLeads.filter(l => l.status === "new").length}
            </p>
            <p className="text-sm text-muted-foreground">New</p>
          </div>
        </Card>
      </div>
    </div>
  );
};