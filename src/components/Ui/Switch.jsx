// This is a mock component for Switch from shadcn/ui.
import React from 'react';

export function Switch({ id, checked, onCheckedChange }) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={e => onCheckedChange(e.target.checked)}
      className="h-5 w-9 rounded-full bg-gray-300 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 checked:bg-blue-600"
    />
  );
}
