import React from 'react';

export interface IdeModule {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType;
}

export interface Tab {
  id: string;
  title: string;
}