
import React from 'react';
import type { Room, Bed, Program } from './types';
import { BedAvailabilityView } from './views/BedAvailabilityView';
import { StabilityProgramsView } from './views/StabilityProgramsView';
import { EmploymentProgramsView } from './views/EmploymentProgramsView';
import { AboutUsView } from './views/AboutUsView';
import { DonationsView } from './views/DonationsView';

export const ROOM_DATA: Room[] = [
  {
    id: 'beds',
    title: 'Safe, Stable Housing',
    description: 'Find a safe and comfortable place to rest. See our current bed availability.',
    content: BedAvailabilityView,
  },
  {
    id: 'stability',
    title: 'Stability Programs',
    description: 'Build a strong foundation for your future with our life skills and support programs.',
    content: StabilityProgramsView,
  },
  {
    id: 'employment',
    title: 'Employment Support',
    description: 'Get the tools and support you need to find and maintain meaningful employment.',
    content: EmploymentProgramsView,
  },
  {
    id: 'donate',
    title: 'Donate & Events',
    description: 'Support our mission and join us for upcoming community events.',
    content: DonationsView,
  },
  {
    id: 'about',
    title: 'Our Mission',
    description: 'Learn more about our purpose, our home, and how we support our community.',
    content: AboutUsView,
  }
];

export const BEDS_DATA: Bed[] = [
    { id: 1, room: 'Room 101-A', type: 'Bunk - Top', status: 'Available' },
    { id: 2, room: 'Room 101-A', type: 'Bunk - Bottom', status: 'Occupied' },
    { id: 3, room: 'Room 101-B', type: 'Bunk - Top', status: 'Available' },
    { id: 4, room: 'Room 101-B', type: 'Bunk - Bottom', status: 'Available' },
    { id: 5, room: 'Room 102-A', type: 'Single', status: 'Occupied' },
    { id: 6, room: 'Room 102-B', type: 'Single', status: 'Available' },
    { id: 7, room: 'Room 201-A', type: 'Bunk - Top', status: 'Occupied' },
    { id: 8, room: 'Room 201-A', type: 'Bunk - Bottom', status: 'Occupied' },
    { id: 9, room: 'Room 201-B', type: 'Bunk - Top', status: 'Available' },
    { id: 10, room: 'Room 201-B', type: 'Bunk - Bottom', status: 'Available' },
];

const MoneyIcon: React.FC<{className?: string}> = ({ className }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor"}, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4v1m-4 0a3 3 0 00-3 3v1a3 3 0 003 3h1a3 3 0 003-3v-1a3 3 0 00-3-3h-1z" }))
);
const HeartIcon: React.FC<{className?: string}> = ({ className }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor"}, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }))
);
const ClipboardIcon: React.FC<{className?: string}> = ({ className }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor"}, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" }))
);

const BriefcaseIcon: React.FC<{className?: string}> = ({ className }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor"}, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }))
);

const UserGroupIcon: React.FC<{className?: string}> = ({ className }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor"}, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }))
);

export const STABILITY_PROGRAMS: Program[] = [
    { title: 'Money Management & Budgeting', description: 'Master your money with our tools and workshops on budgeting, saving, and debt management. We provide one-on-one coaching to create a personalized financial plan.', icon: MoneyIcon },
    { title: 'A Supportive Community', description: 'You are not alone. Become part of a respectful and compassionate community where individuals can connect, share experiences, and support one another.', icon: UserGroupIcon },
    { title: 'Mental & Emotional Wellness', description: 'Access to licensed counselors, support groups, and mindfulness practices. We prioritize your well-being as the foundation of stability.', icon: HeartIcon },
];

export const EMPLOYMENT_PROGRAMS: Program[] = [
    { title: 'Resume Building & Job Search', description: 'Receive one-on-one job search assistance. We help you craft the perfect resume, practice for interviews, and learn effective application strategies.', icon: BriefcaseIcon },
    { title: 'Skills & Certification', description: 'We partner with local trade schools and online platforms to provide access to certification programs in high-demand fields like IT, healthcare, and skilled trades.', icon: ClipboardIcon },
    { title: 'Networking & Employer Partnerships', description: 'Connect directly with our network of local employers who are committed to fair-chance hiring. We host regular job fairs and networking events.', icon: UserGroupIcon }
];
