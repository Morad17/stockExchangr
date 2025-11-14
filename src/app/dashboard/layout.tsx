"use client";

import SideNavbar from "@/components/navigation/sideNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <SideNavbar />
      <main className="dashboard-content">{children}</main>
    </div>
  );
}
