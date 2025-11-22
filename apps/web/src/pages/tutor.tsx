import Layout from '@/components/Layout'
import { MessageSquare } from 'lucide-react'

export default function Tutor() {
    return (
        <Layout>
            <div className="space-y-6 h-full flex flex-col">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Tutor</h1>

                <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6">
                        <MessageSquare className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Chat with DUB5</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
                        I'm your personal AI tutor. I can help you understand complex topics, summarize notes, or quiz you on your subjects.
                    </p>
                    <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
                        Start Conversation
                    </button>
                    <p className="mt-4 text-xs text-gray-400">Powered by DUB5 AI</p>
                </div>
            </div>
        </Layout>
    )
}
