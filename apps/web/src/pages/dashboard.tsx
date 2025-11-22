import Layout from '@/components/Layout'
import { useUser } from '@supabase/auth-helpers-react'

export default function Dashboard() {
    const user = useUser()

    return (
        <Layout>
            <div className="space-y-6">
                <header>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Welcome back, {user?.user_metadata?.full_name || 'Student'}!
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Here is what's on your schedule for today.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Stats Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Due for Review</h3>
                        <div className="text-4xl font-bold text-primary">12</div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Cards ready to study</p>
                        <button className="mt-4 w-full py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
                            Start Review
                        </button>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-200">Studied "Biology Chapter 1"</span>
                                    </div>
                                    <span className="text-sm text-gray-500">2 hours ago</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
