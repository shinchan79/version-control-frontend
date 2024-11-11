import { config, buildUrl, formatEndpoint } from '@/config';
import { Version } from '@/types/version';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getVersion(id: string): Promise<Version> {
  try {
    const endpoint = formatEndpoint(config.ENDPOINTS.GET_VERSION, {
      id: config.DEFAULT_CONTENT_ID,
      versionId: id
    });
    
    const response = await fetch(buildUrl(endpoint), {
      headers: config.DEFAULT_HEADERS,
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      }
      const errorText = await response.text();
      throw new Error(`Failed to fetch version: ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching version:', error);
    throw error;
  }
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PreviewPage({ params }: PageProps) {
  // Await params trước khi sử dụng
  const { id } = await params;
  const version = await getVersion(id);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Rest of your JSX remains the same */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Preview Version {version.id}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {version.message}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-2 py-0.5 text-xs rounded-full ${
              version.status === 'published' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {version.status}
            </span>
            {version.publishedAt && (
              <p className="text-xs text-gray-400">
                Published by {version.publishedBy} at {new Date(version.publishedAt).toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded">
            {version.content}
          </pre>
        </div>
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>
              Version {version.id} • {new Date(version.timestamp).toLocaleString()}
            </div>
            <div>
              Content Version System
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}