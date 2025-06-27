# Yaana AI Trainer - Frontend

A modern React frontend application for the Yaana AI Trainer platform, built with Vite and industry-standard tools.

## 🚀 Features

- **React 18** - Latest React with concurrent features
- **Vite** - Lightning fast build tool and dev server
- **React Router** - Client-side routing
- **React Query** - Server state management
- **React Hook Form** - Form handling and validation
- **Lucide React** - Beautiful icons
- **Hot Toast** - Elegant notifications
- **Modern CSS** - Custom utility classes with responsive design
- **ESLint** - Code quality and consistency

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm or yarn

## 🛠️ Installation

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   └── ProtectedRoute.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── Profile.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── .eslintrc.cjs
└── README.md
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm test` - Run tests
- `npm run test:ui` - Run tests with UI

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

### Vite Configuration

The Vite configuration includes:
- React plugin
- Development server on port 5173
- Production build optimization
- Manual chunk splitting for better caching

## 🎯 Key Components

### Authentication
- **AuthContext** - Global authentication state management
- **ProtectedRoute** - Route protection for authenticated users
- **Login/Register** - User authentication forms

### Layout
- **Layout** - Main application layout with header and footer
- **Navigation** - Responsive navigation with user menu

### Pages
- **Home** - Landing page with features and CTA
- **Dashboard** - User dashboard with statistics and quick actions
- **Profile** - User profile management with tabs

## 🔌 API Integration

The frontend integrates with the backend API through:
- **Axios** - HTTP client with interceptors
- **React Query** - Server state management
- **Authentication** - JWT token handling

### API Services
- `authAPI` - Authentication endpoints
- `userAPI` - User management endpoints
- `healthAPI` - Health check endpoint

## 🎨 Styling

The application uses custom CSS with utility classes similar to Tailwind CSS:
- Responsive design
- Modern color palette
- Consistent spacing and typography
- Interactive states and animations

## 🔒 Security Features

- **Protected Routes** - Authentication-based routing
- **Token Management** - Secure JWT token handling
- **Form Validation** - Client-side validation with error handling
- **CORS Configuration** - Proper cross-origin setup

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🧪 Testing

The project includes:
- **Vitest** - Fast unit testing
- **Testing UI** - Visual test runner
- **Component testing** - Isolated component testing

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel/Netlify
The build output in the `dist` folder can be deployed to any static hosting service.

## 📝 Development Guidelines

1. **Code Style** - Follow ESLint rules and use consistent formatting
2. **Component Structure** - Use functional components with hooks
3. **State Management** - Use React Query for server state, Context for global state
4. **Error Handling** - Implement proper error boundaries and user feedback
5. **Performance** - Optimize bundle size and implement lazy loading

## 🤝 Contributing

1. Follow the existing code style
2. Add tests for new features
3. Update documentation as needed
4. Ensure all tests pass before submitting

## 📄 License

MIT License 