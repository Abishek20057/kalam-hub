import { AdminShell } from "@/components/admin/admin-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

const stats = [
  { label: "Website Statistics", value: "24.8K", icon: "bar-chart-3" },
  { label: "Projects", value: "18", icon: "folder-kanban" },
  { label: "Workshops", value: "9", icon: "calendar-days" },
  { label: "Gallery", value: "42", icon: "images" },
  { label: "Internships", value: "6", icon: "briefcase" },
  { label: "Users", value: "128", icon: "users" },
];

const activity = [
  { title: "Home page updated", detail: "New hero section draft was saved", time: "12 mins ago" },
  { title: "Project published", detail: "PCB Power Supply project moved to live", time: "1 hour ago" },
  { title: "Media uploaded", detail: "8 new workshop images were added", time: "3 hours ago" },
  { title: "Workshop scheduled", detail: "Embedded systems session queued", time: "Yesterday" },
];

const quickActions = [
  { label: "Add Project", icon: "plus" },
  { label: "Add Workshop", icon: "plus-circle" },
  { label: "Upload Media", icon: "upload" },
  { label: "Manage Home", icon: "home" },
  { label: "Site Settings", icon: "settings" },
];

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Dashboard" subtitle="Welcome back. This premium admin workspace is ready for future CMS modules and placeholder data-driven widgets." breadcrumb={[{ label: "Home", href: "/" }, { label: "Admin" }]}>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)]">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)]">{stat.value}</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                  <Icon name={stat.icon} size={20} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Recent Activity</h2>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Placeholder activity feed for the admin workspace.</p>
              </div>
              <Badge variant="category">Live</Badge>
            </div>
            <div className="space-y-4">
              {activity.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)]/70 p-4">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                    <Icon name="activity" size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{item.detail}</p>
                    <p className="mt-2 text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-text-secondary)]">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Quick Actions</h2>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Starter shortcuts for content management workflows.</p>
            </div>
            <div className="grid gap-3">
              {quickActions.map((action) => (
                <Button key={action.label} type="button" variant="secondary" className="justify-start">
                  <Icon name={action.icon} size={16} />
                  {action.label}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AdminShell>
  );
}
