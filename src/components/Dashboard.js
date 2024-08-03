// import React, { useEffect, useState } from 'react';

// import { gsap } from 'gsap';
// import Sidebar from './Sidebar';
import NewProjectModal from './NewProjectModal';

// export default function Dashboard() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     gsap.from('.dashboard-element', {
//       opacity: 0,
//       y: 20,
//       stagger: 0.1,
//       duration: 0.5,
//       ease: 'power2.out'
//     });
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-gray-100">
//       <Sidebar />
//       <main className="flex-1 p-6 md:p-10">
//         <div className="dashboard-element flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//           <h1 className="text-2xl font-semibold mb-4 md:mb-0">Dashboard</h1>
//           <div className="flex space-x-2">
//             <button
//               className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
//               onClick={() => setIsModalOpen(true)}
//             >
//               New project
//             </button>
//             <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm">
//               New organization
//             </button>
//           </div>
//         </div>
//         <div className="dashboard-element bg-gray-800 rounded-lg p-8 text-center">
//           <h2 className="text-xl mb-2">No projects</h2>
//           <p className="text-gray-400 mb-4">Get started by creating a new project.</p>
//           <button
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
//             onClick={() => setIsModalOpen(true)}
//           >
//             New Project
//           </button>
//         </div>
//       </main>
//       <NewProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// }



import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-xl mb-2">No projects</h2>
          <p className="text-gray-400 mb-4">Get started by creating a new project.</p>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
            onClick={() => setIsModalOpen(true)}
          >
            New Project
          </button>
        </div>
      </main>
      <NewProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}