import { useAuth } from '../contexts/AuthContext'
import { BarChart3, Brain, Users, Zap, Plus, Play, Settings, Download } from 'lucide-react'

export const Dashboard = () => {
  const { user } = useAuth()

  const stats = [
    {
      title: 'Active Models',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: Brain,
      color: 'blue',
    },
    {
      title: 'Training Jobs',
      value: '8',
      change: '+3',
      changeType: 'positive',
      icon: Zap,
      color: 'green',
    },
    {
      title: 'Team Members',
      value: '5',
      change: '+1',
      changeType: 'positive',
      icon: Users,
      color: 'purple',
    },
    {
      title: 'API Calls',
      value: '2.4M',
      change: '+12%',
      changeType: 'positive',
      icon: BarChart3,
      color: 'orange',
    },
  ]

  const recentModels = [
    {
      id: 1,
      name: 'GPT-4 Fine-tuned Model',
      status: 'Training',
      progress: 75,
      lastUpdated: '2 hours ago',
    },
    {
      id: 2,
      name: 'BERT Classification Model',
      status: 'Completed',
      progress: 100,
      lastUpdated: '1 day ago',
    },
    {
      id: 3,
      name: 'Custom NLP Model',
      status: 'Failed',
      progress: 45,
      lastUpdated: '3 days ago',
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Training':
        return 'text-blue-600 bg-blue-100'
      case 'Completed':
        return 'text-green-600 bg-green-100'
      case 'Failed':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="py-8">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your AI models today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(stat.color)}`}>
                    <Icon size={24} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Models */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Models</h2>
                <button className="btn btn-primary text-sm">
                  <Plus size={16} className="mr-2" />
                  New Model
                </button>
              </div>
              <div className="space-y-4">
                {recentModels.map((model) => (
                  <div key={model.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{model.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                          {model.status}
                        </span>
                        <span className="text-sm text-gray-500">{model.lastUpdated}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {model.status === 'Training' && (
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${model.progress}%` }}
                          ></div>
                        </div>
                      )}
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Settings size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full btn btn-primary">
                  <Play size={16} className="mr-2" />
                  Start Training
                </button>
                <button className="w-full btn btn-outline">
                  <Download size={16} className="mr-2" />
                  Export Model
                </button>
                <button className="w-full btn btn-outline">
                  <Users size={16} className="mr-2" />
                  Invite Team Member
                </button>
                <button className="w-full btn btn-outline">
                  <BarChart3 size={16} className="mr-2" />
                  View Analytics
                </button>
              </div>
            </div>

            {/* System Status */}
            <div className="card mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API Status</span>
                  <span className="text-sm text-green-600 font-medium">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">GPU Availability</span>
                  <span className="text-sm text-green-600 font-medium">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Storage</span>
                  <span className="text-sm text-yellow-600 font-medium">72%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Backup</span>
                  <span className="text-sm text-gray-600">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 