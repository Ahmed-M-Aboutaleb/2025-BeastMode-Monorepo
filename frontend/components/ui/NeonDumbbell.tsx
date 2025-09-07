// export default function NeonDumbbell() {
//   return (
//     <div className="absolute z-30 flex items-center justify-center h-screen bg-transparent">
//       {/* Dumbbell Wrapper */}
//       <div className="flex items-center justify-center space-x-6">
        
//         {/* Left Plates */}
//         <div className="flex space-x-2 items-center">
//           <div className="w-3 h-12 rounded-full bg-yellow-400 shadow-[0_0_15px_#facc15,0_0_40px_#facc15]" />
//           <div className="w-3 h-16 rounded-full bg-yellow-400 shadow-[0_0_15px_#facc15,0_0_40px_#facc15]" />
//           <div className="w-3 h-20 rounded-full bg-yellow-400 shadow-[0_0_15px_#facc15,0_0_40px_#facc15]" />
//         </div>

//         {/* Bar */}
//         <div className="w-32 h-6 bg-yellow-400 rounded-md shadow-[0_0_15px_#facc15,0_0_40px_#facc15]" />

//         {/* Right Plates */}
//         <div className="flex space-x-2 items-center">
//           <div className="w-10 border-yellow-400 h-20 rounded-md bg-transparent shadow-[0_0_15px_#facc15,0_0_40px_#facc15]" />
//           <div className="w-3 h-16 rounded-full bg-yellow-400 shadow-[0_0_15px_#facc15,0_0_40px_#facc15]" />
//           <div className="w-3 h-12 rounded-full bg-yellow-400 shadow-[0_0_15px_#facc15,0_0_40px_#facc15]" />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
export default function NeonDumbbell() {
  return (
    <div className="absolute z-30 flex items-center justify-center h-screen w-full bg-transparent">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        className="w-72 h-40"
      >
        {/* Left Plates */}
        <rect
          x="10"
          y="20"
          width="10"
          height="60"
          rx="2"
          className="stroke-yellow-400 fill-transparent"
          strokeWidth="4"
          style={{
            filter: "drop-shadow(0 0 8px #facc15) drop-shadow(0 0 20px #facc15)",
          }}
        />
        <rect
          x="22"
          y="15"
          width="10"
          height="70"
          rx="2"
          className="stroke-yellow-400 fill-transparent"
          strokeWidth="4"
          style={{
            filter: "drop-shadow(0 0 8px #facc15) drop-shadow(0 0 20px #facc15)",
          }}
        />
        <rect
          x="34"
          y="10"
          width="10"
          height="80"
          rx="2"
          className="stroke-yellow-400 fill-transparent"
          strokeWidth="4"
          style={{
            filter: "drop-shadow(0 0 8px #facc15) drop-shadow(0 0 20px #facc15)",
          }}
        />

        {/* Bar */}
        <rect
          x="46"
          y="40"
          width="108"
          height="20"
          rx="3"
          className="stroke-yellow-400 fill-transparent"
          strokeWidth="4"
          style={{
            filter: "drop-shadow(0 0 8px #facc15) drop-shadow(0 0 20px #facc15)",
          }}
        />

        {/* Right Plates */}
        <rect
          x="156"
          y="10"
          width="10"
          height="80"
          rx="2"
          className="stroke-yellow-400 fill-transparent"
          strokeWidth="4"
          style={{
            filter: "drop-shadow(0 0 8px #facc15) drop-shadow(0 0 20px #facc15)",
          }}
        />
        <rect
          x="168"
          y="15"
          width="10"
          height="70"
          rx="2"
          className="stroke-yellow-400 fill-transparent"
          strokeWidth="4"
          style={{
            filter: "drop-shadow(0 0 8px #facc15) drop-shadow(0 0 20px #facc15)",
          }}
        />
        <rect
          x="180"
          y="20"
          width="10"
          height="60"
          rx="2"
          className="stroke-yellow-400 fill-transparent"
          strokeWidth="4"
          style={{
            filter: "drop-shadow(0 0 8px #facc15) drop-shadow(0 0 20px #facc15)",
          }}
        />
      </svg>
    </div>
  );
}
