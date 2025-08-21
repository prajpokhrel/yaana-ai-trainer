// Home.jsx
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Brain, Zap, Shield, Users, ArrowRight, Play } from 'lucide-react'
import '../styles/Home.css'

export const Home = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-blue-50 py-20 text-center">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Empower Your AI Journey with
            <span className="text-blue-600"> Yaana AI Chatbot Trainer</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Build, train, and deploy intelligent chatbot solutions with ease using our advanced AI training infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link to="/dashboard" className="btn btn-primary">
                Go to Dashboard <ArrowRight size={20} className="ml-2 inline" />
              </Link>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary">
                  Get Started Free <ArrowRight size={20} className="ml-2 inline" />
                </Link>
                <Link to="/login" className="btn btn-outline">
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Yaana?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide the essential tools and infrastructure to supercharge your chatbot and AI model training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={<Brain size={32} className="text-blue-600" />} title="Advanced Model Training" text="Train state-of-the-art models using powerful frameworks with robust infrastructure." bg="blue" />
            <FeatureCard icon={<Zap size={32} className="text-green-600" />} title="Lightning Fast Performance" text="Experience high-speed training and evaluation with GPU-accelerated systems." bg="green" />
            <FeatureCard icon={<Shield size={32} className="text-purple-600" />} title="Enterprise Security" text="Enjoy bank-grade encryption, secure access, and full compliance with regulations." bg="purple" />
            <FeatureCard icon={<Users size={32} className="text-orange-600" />} title="Collaboration Ready" text="Enable teamwork with shared projects, roles, and version control." bg="orange" />
            <FeatureCard icon={<Play size={32} className="text-red-600" />} title="Deploy in One Click" text="Go live instantly with integrated deployment pipelines and monitoring tools." bg="red" />
            <FeatureCard icon={<Brain size={32} className="text-indigo-600" />} title="Model Marketplace" text="Access community-built models or showcase your own creations." bg="indigo" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-blue-600 text-white py-16">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get Started with Yaana Today</h2>
          <p className="mb-6 text-lg">
            Join thousands of developers and researchers building intelligent assistants and chatbots that transform user experiences.
          </p>
          {!isAuthenticated && (
            <Link to="/register" className="btn-white-blue">
              Start Free Trial <ArrowRight size={20} className="ml-2 inline" />
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}

const FeatureCard = ({ icon, title, text, bg }) => (
  <div className={`card bg-${bg}-50 p-6 rounded-xl shadow-md text-center`}>
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
)
