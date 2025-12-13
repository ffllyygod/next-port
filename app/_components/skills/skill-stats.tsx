export default function SkillStats() {
  return (
    <div className="stats-card mt-16">
      <h3 className="stats-title">debug_stats</h3>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-9 text-center">
        <Stat value="9999+" label="segfaults survived" />
        <Stat value="∞" label="stack overflow visits" />
        <Stat value="12" label="double cups/day" />
        {/* <Stat value="0" label="regrets about rust" /> */}
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-item">
      <div className="stat-number">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
