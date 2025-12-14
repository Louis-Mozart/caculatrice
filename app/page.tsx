import Calculator from './components/Calculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Calculator
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
        <Calculator />
      </div>
    </main>
  );
}
