'use client';

import { VersionControl } from '@/components/VersionControl';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Version System',
  description: 'Manage and track content changes with version history',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Content Version System
          </h1>
          <p className="text-gray-600 mt-2">
            Manage and track content changes with version history
          </p>
        </header>

        <main>
          <VersionControl />
        </main>

        <footer className="mt-16 py-4 border-t text-center text-sm text-gray-500">
          <p>
            Built with{' '}
            <a 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Next.js
            </a>
            {' '}and{' '}
            <a 
              href="https://workers.cloudflare.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Cloudflare Workers
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}