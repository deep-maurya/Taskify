'use client';
import Kanbanboard from '@/component/Kanbanboard';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Kanbanboard />
      </div>
    </main>
  );
}
