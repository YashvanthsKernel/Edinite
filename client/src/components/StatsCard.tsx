import GlassPanel from "./GlassPanel";

interface StatsCardProps {
  value: string;
  label: string;
}

export default function StatsCard({ value, label }: StatsCardProps) {
  return (
    <GlassPanel className="p-6 text-center">
      <div className="text-4xl font-heading font-bold text-primary mb-2" data-testid={`text-stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {value}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </GlassPanel>
  );
}
