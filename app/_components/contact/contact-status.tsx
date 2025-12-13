export default function ContactStatus() {
  return (
    <div className="status-card slide-in">
      <h3 className="status-title">current_status</h3>

      <div className="space-y-4 text-gray-300">
        <StatusItem text="Available for new opportunities" />
        <StatusItem text="Open to Full Stack / SDE / DevOps Roles" />
        <StatusItem text="Interested in CyberSec & Security collaborations" />
      </div>

      <div className="status-footer">
        <p className="status-footer-text">
          Response time: usually within 24 hours
        </p>
        <p className="status-footer-subtext">
          unless I’m deep in a debugging session…
        </p>
      </div>
    </div>
  );
}

function StatusItem({ text }: { text: string }) {
  return (
    <div className="status-item">
      <span className="status-dot" />
      <span>{text}</span>
    </div>
  );
}
