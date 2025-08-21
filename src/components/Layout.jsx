// src/components/Layout.jsx
import Header from './layout/Header'
import Footer from './layout/Footer'

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  )
}
