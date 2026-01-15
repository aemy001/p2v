export const InboundIllustration = () => (
    <svg viewBox="0 0 200 160" className="w-full h-full drop-shadow-lg">
      <path fill="#dbeafe" d="M20,120 L180,120 L180,140 L20,140 Z" /> 
      {/* Pallet */}
      <rect x="60" y="100" width="80" height="20" fill="#bfdbfe" rx="2" />
      <rect x="70" y="105" width="20" height="10" fill="#60a5fa" opacity="0.5" />
      <rect x="110" y="105" width="20" height="10" fill="#60a5fa" opacity="0.5" />
      {/* Box */}
      <rect x="70" y="40" width="60" height="60" fill="#3b82f6" rx="4" />
      <path d="M70,40 L130,40 L115,25 L55,25 Z" fill="#2563eb" /> 
      <path d="M130,40 L130,100 L145,85 L145,25 Z" fill="#1d4ed8" /> 
      {/* Arrow Down */}
      <path d="M100,10 L100,30 M90,20 L100,30 L110,20" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );

 export const StorageIllustration = () => (
    <svg viewBox="0 0 200 160" className="w-full h-full drop-shadow-lg">
      {/* Racks */}
      <rect x="40" y="20" width="10" height="120" fill="#94a3b8" rx="2" />
      <rect x="150" y="20" width="10" height="120" fill="#94a3b8" rx="2" />
      <rect x="40" y="50" width="120" height="8" fill="#cbd5e1" />
      <rect x="40" y="90" width="120" height="8" fill="#cbd5e1" />
      <rect x="40" y="130" width="120" height="8" fill="#cbd5e1" />
      {/* Boxes on shelves */}
      <rect x="55" y="25" width="40" height="25" fill="#60a5fa" />
      <rect x="105" y="25" width="40" height="25" fill="#3b82f6" />
      <rect x="55" y="65" width="30" height="25" fill="#2563eb" />
      <rect x="95" y="65" width="50" height="25" fill="#bfdbfe" />
    </svg>
  );

 export const FulfillmentIllustration = () => (
    <svg viewBox="0 0 200 160" className="w-full h-full drop-shadow-lg">
      {/* Open Box */}
      <path d="M50,80 L150,80 L150,130 L50,130 Z" fill="#3b82f6" /> 
      <path d="M50,80 L80,50 L180,50 L150,80 Z" fill="#1d4ed8" opacity="0.6" /> 
      <path d="M50,80 L30,50 L130,50 L150,80 Z" fill="#60a5fa" />  
      <path d="M150,80 L170,110 L70,110 L50,80 Z" fill="#2563eb" opacity="0.0" /> 
      {/* Item Inside */}
      <circle cx="100" cy="70" r="15" fill="#ffffff" opacity="0.8" />
      {/* Checkmark */}
      <circle cx="160" cy="40" r="20" fill="#10b981" />
      <path d="M150,40 L156,46 L170,32" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

 export const TruckIllustration = () => (
    <svg viewBox="0 0 200 160" className="w-full h-full drop-shadow-lg">
      {/* Road */}
      <rect x="0" y="130" width="200" height="10" fill="#e2e8f0" />
      <rect x="20" y="133" width="40" height="4" fill="#cbd5e1" />
      <rect x="100" y="133" width="40" height="4" fill="#cbd5e1" />
      {/* Truck Body */}
      <rect x="40" y="60" width="100" height="60" fill="#1e3a8a" rx="4" />  
      <rect x="140" y="80" width="40" height="40" fill="#3b82f6" rx="4" />  
      <path d="M160,80 L180,80 L180,100 L160,100 Z" fill="#bfdbfe" />  
      {/* Wheels */}
      <circle cx="70" cy="120" r="12" fill="#1e293b" />
      <circle cx="110" cy="120" r="12" fill="#1e293b" />
      <circle cx="160" cy="120" r="12" fill="#1e293b" />
      {/* Speed Lines */}
      <path d="M20,70 L30,70 M10,80 L35,80 M15,90 L30,90" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );