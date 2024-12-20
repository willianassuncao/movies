"use client";

import './globals.css';
import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavBar from '@/components/NavBar';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Inicialize o QueryClient
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="pt-br">
      <body className="bg-gray-900 text-white">
        <QueryClientProvider client={queryClient}>
          <NavBar />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
