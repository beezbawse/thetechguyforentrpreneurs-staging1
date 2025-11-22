import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface TestimonialItem {
  content: string;
  author: string;
  role: string;
  location: string;
}

export enum BusinessSize {
  SMALL = "1-10",
  MEDIUM = "11-25",
  LARGE = "26-50"
}