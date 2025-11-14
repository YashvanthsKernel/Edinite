import StatsCard from '../StatsCard';

export default function StatsCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-xs">
        <StatsCard value="50+" label="Successful Projects" />
      </div>
    </div>
  );
}
