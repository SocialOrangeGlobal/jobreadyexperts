import { Megaphone } from "lucide-react";

export default function Topbar() {
  return (
    <div className="topbar">
      <span className="topbar-inner">
        <Megaphone size={14} strokeWidth={2} />
        Australia&apos;s JRP Placement Specialists
        <span className="topbar-dot">·</span>
        Connecting trade graduates with verified TRA-compliant employers
        <span className="topbar-dot">·</span>
        Enquire today
      </span>
    </div>
  );
}
