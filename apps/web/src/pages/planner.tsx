import Layout from '@/components/Layout'
import { Calendar as CalendarIcon, Wand2 } from 'lucide-react'

export default function Planner() {
    return (
        <Layout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Study Planner</h1>
                    <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        <Wand2 className="w-5 h-5 mr-2" />
                        Generate AI Plan
                    </button>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                    <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                        <CalendarIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Active Plan</h3>
                    <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
                        You haven't set up a study plan yet. Let our AI create a personalized schedule for you based on your exam dates.
                    </p>
                    <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Create New Plan
                    </button>
                </div>
            </div>
        </Layout>
    )
}
