import Layout from '@/components/Layout'
import { Plus } from 'lucide-react'

export default function Subjects() {
    return (
        <Layout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Subjects</h1>
                    <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
                        <Plus className="w-5 h-5 mr-2" />
                        New Subject
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors cursor-pointer">
                            <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                                Subject Cover
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Subject {i}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">12 Chapters • 45 Resources</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
