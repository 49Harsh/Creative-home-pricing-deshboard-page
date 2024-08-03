import React from 'react';

const navItems = [
  'Projects',
  'Organizations',
  'Account',
  'Preferences',
  'Access Tokens',
  'Security',
  'Audit Logs',
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-6 min-h-screen">
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-300 hover:text-white py-2 block">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8">
        <h2 className="text-sm font-semibold mb-2 text-gray-400 uppercase">Documentation</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-white py-2 block">
              Guides
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white py-2 block">
              API Reference
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <a href="#" className="text-gray-300 hover:text-white py-2 block">
          Log out
        </a>
      </div>
    </aside>
  );
}