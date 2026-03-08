const TangledWorkflow = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Tangled connecting lines - chaotic, overlapping, messy */}
    {/* BD Team → Ops (loops back) */}
    <path d="M130 120 C200 80, 280 160, 350 130" stroke="hsl(0 100% 71%)" strokeWidth="1.5" opacity="0.7" />
    <path d="M130 120 C80 200, 200 250, 150 300" stroke="hsl(220 15% 45%)" strokeWidth="1.5" opacity="0.5" />
    {/* BD Team → Templates */}
    <path d="M130 120 C160 200, 100 280, 120 380" stroke="hsl(0 100% 71%)" strokeWidth="1.5" opacity="0.6" />
    {/* Ops → Science */}
    <path d="M350 130 C400 200, 320 250, 370 310" stroke="hsl(220 15% 45%)" strokeWidth="1.5" opacity="0.5" />
    {/* Ops → Spreadsheets (messy curve) */}
    <path d="M350 130 C420 180, 200 220, 280 380" stroke="hsl(0 100% 71%)" strokeWidth="1.5" opacity="0.5" />
    {/* Science → Email Chains */}
    <path d="M370 310 C300 350, 350 400, 390 420" stroke="hsl(0 100% 71%)" strokeWidth="1.5" opacity="0.7" />
    {/* Templates → Spreadsheets */}
    <path d="M120 380 C180 420, 220 360, 280 380" stroke="hsl(220 15% 45%)" strokeWidth="1.5" opacity="0.5" />
    {/* Spreadsheets → BD Team (loop back!) */}
    <path d="M280 380 C220 300, 100 280, 130 120" stroke="hsl(0 100% 71%)" strokeWidth="1.2" opacity="0.35" strokeDasharray="6 4" />
    {/* Email Chains → Ops (loop back!) */}
    <path d="M390 420 C450 350, 450 200, 350 130" stroke="hsl(220 15% 45%)" strokeWidth="1.2" opacity="0.35" strokeDasharray="6 4" />
    {/* Cross-connections creating chaos */}
    <path d="M150 300 C250 280, 300 200, 350 130" stroke="hsl(0 100% 71%)" strokeWidth="1.5" opacity="0.4" />
    <path d="M120 380 C200 300, 350 350, 370 310" stroke="hsl(0 100% 71%)" strokeWidth="1.5" opacity="0.45" />
    <path d="M150 300 C200 380, 250 350, 280 380" stroke="hsl(220 15% 45%)" strokeWidth="1.5" opacity="0.5" />
    <path d="M370 310 C300 280, 200 200, 130 120" stroke="hsl(220 15% 45%)" strokeWidth="1.2" opacity="0.3" />
    {/* Dead-end lines */}
    <path d="M150 300 C180 260, 220 240, 240 230" stroke="hsl(0 100% 71%)" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
    <path d="M280 380 C310 340, 340 350, 350 340" stroke="hsl(220 15% 45%)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
    <path d="M370 310 C400 280, 420 290, 440 270" stroke="hsl(0 100% 71%)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
    {/* Extra tangle in the middle */}
    <path d="M200 200 C250 180, 300 220, 280 260 C260 300, 200 280, 220 240" stroke="hsl(0 100% 71%)" strokeWidth="1.2" opacity="0.3" />
    <path d="M250 300 C280 260, 320 280, 300 320 C280 360, 240 340, 260 300" stroke="hsl(220 15% 45%)" strokeWidth="1.2" opacity="0.25" />

    {/* Nodes */}
    {/* BD Team */}
    <circle cx="130" cy="120" r="36" fill="hsl(222 30% 14%)" stroke="hsl(222 20% 22%)" strokeWidth="1.5" />
    <text x="130" y="116" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">BD</text>
    <text x="130" y="130" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Team</text>

    {/* Ops */}
    <circle cx="350" cy="130" r="32" fill="hsl(222 30% 14%)" stroke="hsl(222 20% 22%)" strokeWidth="1.5" />
    <text x="350" y="134" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Ops</text>

    {/* Review */}
    <circle cx="150" cy="300" r="30" fill="hsl(222 30% 14%)" stroke="hsl(222 20% 22%)" strokeWidth="1.5" />
    <text x="150" y="304" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Review</text>

    {/* Science */}
    <circle cx="370" cy="310" r="34" fill="hsl(222 30% 14%)" stroke="hsl(222 20% 22%)" strokeWidth="1.5" />
    <text x="370" y="314" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Science</text>

    {/* Templates */}
    <circle cx="120" cy="380" r="30" fill="hsl(222 30% 14%)" stroke="hsl(222 20% 22%)" strokeWidth="1.5" />
    <text x="120" y="376" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="9.5" fontFamily="Inter, sans-serif" fontWeight="500">Temp-</text>
    <text x="120" y="388" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="9.5" fontFamily="Inter, sans-serif" fontWeight="500">lates</text>

    {/* Spreadsheets */}
    <circle cx="280" cy="380" r="34" fill="hsl(222 30% 14%)" stroke="hsl(222 20% 22%)" strokeWidth="1.5" />
    <text x="280" y="376" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500">Spread-</text>
    <text x="280" y="388" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500">sheets</text>

    {/* Email Chains */}
    <circle cx="390" cy="420" r="30" fill="hsl(222 30% 14%)" stroke="hsl(222 20% 22%)" strokeWidth="1.5" />
    <text x="390" y="416" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500">Email</text>
    <text x="390" y="428" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500">Chains</text>

    {/* Pricing */}
    <circle cx="240" cy="200" r="26" fill="hsl(222 30% 14%)" stroke="hsl(222 20% 22%)" strokeWidth="1.5" />
    <text x="240" y="204" textAnchor="middle" fill="hsl(220 15% 70%)" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">Pricing</text>
  </svg>
);

export default TangledWorkflow;
