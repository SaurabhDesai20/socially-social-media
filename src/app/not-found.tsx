import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white rounded-lg dark:bg-black border border-gray-400 dark:border-gray-800 shadow-sm dark:shadow-none flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center p-8">
        {/* 404 */}
        <div className="relative mb-8">
          <h1 className="text-8xl font-bold text-gray-800 dark:text-white">
            404
          </h1>
        </div>

        {/* Main message */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
            Oops! This post went missing
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            The content you're looking for might have been deleted, moved, or never existed.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Don't worry, there's plenty more to discover!
          </p>
        </div>

        {/* Return Home button */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
          >
            <Home size={20} />
            Return Home
            <ArrowLeft size={16} />
          </Link>
        </div>

        {/* Fun suggestion */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            💡 <span className="font-medium">Pro tip:</span> Try searching for something trending or check out who's online!
          </p>
        </div>
      </div>
    </div>
  )
}