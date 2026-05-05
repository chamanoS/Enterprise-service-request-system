export type RequestStatus = "Pending" | "In Progress" | "Resolved" | "Rejected";

export type ServiceRequest = {
  id: number;
  title: string;
  description: string;
  category: string;
  status: RequestStatus;
  createdAt: string;
};