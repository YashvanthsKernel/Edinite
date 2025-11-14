import GlassPanel from '../GlassPanel';

export default function GlassPanelExample() {
  return (
    <div className="p-8 bg-background">
      <GlassPanel className="p-8">
        <h3 className="text-2xl font-heading font-bold text-foreground">Glass Panel</h3>
        <p className="text-muted-foreground mt-2">Beautiful glassmorphism effect</p>
      </GlassPanel>
    </div>
  );
}
