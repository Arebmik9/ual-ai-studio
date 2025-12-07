
import type React from 'react';

export type RoomId = 'beds' | 'stability' | 'employment' | 'about' | 'donate';

export interface Bed {
  id: number;
  room: string;
  type: 'Bunk - Top' | 'Bunk - Bottom' | 'Single';
  status: 'Available' | 'Occupied';
}

export interface Program {
  title: string;
  description: string;
  icon: React.FC<{className?: string}>;
}

export interface Room {
  id: RoomId;
  title: string;
  description: string;
  content: React.FC;
}
