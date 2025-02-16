'use client';

import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';

interface ColorBarProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorBar: React.FC<ColorBarProps> = ({ color, onChange }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; 

  return (
    <div className="flex flex-col items-center space-y-2">
      <ChromePicker color={color} onChange={(newColor) => onChange(newColor.hex)} />
    </div>
  );
};

export default ColorBar;
