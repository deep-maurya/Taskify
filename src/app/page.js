'use client';
import Kanbanboard from '@/component/Kanbanboard';

export default function Home() {
  return (
    <main className="min-h-screen flex  justify-center">
      <div className="w-full max-w-6xl pt-10">
        <Kanbanboard />
      </div>
    </main>
  );
}
