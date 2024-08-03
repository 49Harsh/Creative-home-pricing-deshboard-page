import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewProjectModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 p-8 rounded-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-4">Create a new project</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-2">Organization</label>
                <select className="w-full bg-gray-700 text-white p-2 rounded">
                  <option>49Harsh's Org</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-2">Project name</label>
                <input type="text" className="w-full bg-gray-700 text-white p-2 rounded" placeholder="Project name" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-2">Database Password</label>
                <input type="password" className="w-full bg-gray-700 text-white p-2 rounded" placeholder="Type in a strong password" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-2">Region</label>
                <select className="w-full bg-gray-700 text-white p-2 rounded">
                  <option>Southeast Asia (Singapore)</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={onClose} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2">
                  Cancel
                </button>
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                  Create new project
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}