import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Brain, Zap, Shield, Users, ArrowRight, Play } from 'lucide-react'

export const Home = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Train Your AI Models with
              <span className="text-blue-600"> Professional Tools</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Yaana AI Trainer provides cutting-edge tools and infrastructure for training, 
              fine-tuning, and deploying AI models at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Link to="/dashboard" className="btn btn-primary text-lg px-8 py-4">
                  Go to Dashboard
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              ) : (
                <>
                  <Link to="/register" className="btn btn-primary text-lg px-8 py-4">
                    Get Started Free
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                  <Link to="/login" className="btn btn-outline text-lg px-8 py-4">
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Yaana AI Trainer?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built by AI researchers and engineers for the modern AI development workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Advanced Model Training
              </h3>
              <p className="text-gray-600">
                State-of-the-art training pipelines with support for multiple frameworks 
                and model architectures.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Lightning Fast Performance
              </h3>
              <p className="text-gray-600">
                Optimized infrastructure that scales with your needs, from small experiments 
                to production workloads.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Bank-level security with data encryption, access controls, and compliance 
                with industry standards.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Built-in collaboration tools for teams to work together on model development 
                and deployment.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Easy Deployment
              </h3>
              <p className="text-gray-600">
                One-click deployment to production with automatic scaling and monitoring 
                capabilities.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Model Marketplace
              </h3>
              <p className="text-gray-600">
                Access to pre-trained models and share your own models with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers and researchers who trust Yaana AI Trainer 
              for their machine learning projects.
            </p>
            {!isAuthenticated && (
              <Link to="/register" className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight size={20} className="ml-2" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 