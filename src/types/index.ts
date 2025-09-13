export interface Issue {
  id: string;
  category: string;
  location: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Open' | 'In Progress' | 'Resolved';
  assignedDept: string;
  date: string;
  description: string;
  images: string[];
  reporter: {
    name: string;
    email: string;
    phone: string;
  };
  activities: Activity[];
}

export interface Activity {
  id: string;
  type: 'status_change' | 'comment' | 'assignment';
  message: string;
  user: string;
  timestamp: string;
}

export interface Department {
  id: string;
  name: string;
  totalIssues: number;
  avgResolutionTime: string;
  staff: number;
  head: string;
}

export interface StatCard {
  title: string;
  value: number;
  trend: number;
  icon: string;
  color: string;
}