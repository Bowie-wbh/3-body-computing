import React from 'react';
import { RouterProvider } from 'react-router';
import { AppProvider } from './contexts/AppContext';
import { ContentProvider } from './contexts/ContentContext';
import { router } from './routes';

export default function App() {
  return (
    <AppProvider>
      <ContentProvider>
        <RouterProvider router={router} />
      </ContentProvider>
    </AppProvider>
  );
}