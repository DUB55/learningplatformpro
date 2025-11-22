import Layout from '@/components/Layout'
import { BrainCircuit, PenTool, CheckSquare, FileText } from 'lucide-react'

export default function Study() {
    const modes = [
        { name: 'Flashcards', icon: BrainCircuit, desc: 'Standard SRS review' },
        { name: 'Write Mode', icon: PenTool, desc: 'Type the exact answer' },
        { name: 'Multiple Choice', icon: CheckSquare, desc: 'Select the correct definition' },
        { name: 'Test Mode', icon: FileText, desc: 'Simulate an exam' },
    ]

    return (
        <Layout>
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Study Modes</h1>
                <p className="text-gray-600 dark:text-gray-400">Select a mode to start learning.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {modes.map((mode) => (
                        <div key={mode.name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors cursor-pointer group">
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <mode.icon className="w-6 h-6" />
                                </div>
                                <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">{mode.name}</h3>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">{mode.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
