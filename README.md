# Yaana AI Trainer - Full Stack Application

A professional full-stack application for AI model training and management, built with React (Vite) frontend and Express.js backend.

## 🏗️ Architecture

- **Frontend**: React 18 + Vite + Modern JavaScript
- **Backend**: Express.js + Node.js + Professional middleware
- **Communication**: RESTful API with JSON
- **Authentication**: JWT-based authentication
- **Styling**: Custom CSS with utility classes

## 📁 Project Structure

```
yaana-ai-trainer/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── contexts/        # React contexts
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── ...
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── backend/                  # Express.js backend server
│   ├── src/
│   │   ├── routes/         # API routes
│   │   └── server.js       # Main server file
│   ├── package.json
│   ├── env.example
│   └── README.md
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Git

### 1. Clone the Repository

```bash
git clone <repository-url>
cd yaana-ai-trainer
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment file
cp env.example .env

# Start development server
npm run dev
```

The backend will be running on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be running on `http://localhost:5173`

### 4. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 🔧 Development

### Backend Development

```bash
cd backend

# Development mode with auto-reload
npm run dev

# Production mode
npm start

# Run tests
npm test

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Frontend Development

```bash
cd frontend

# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📡 API Endpoints

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/logout` - User logout

### Users
- `GET /api/v1/users/profile` - Get user profile
- `PUT /api/v1/users/profile` - Update user profile
- `GET /api/v1/users` - Get all users (admin)

### Health Check
- `GET /health` - Server health status

## 🎯 Features

### Frontend Features
- **Modern React 18** with hooks and concurrent features
- **Vite** for lightning-fast development
- **React Router** for client-side routing
- **React Query** for server state management
- **React Hook Form** for form handling
- **Responsive Design** with mobile-first approach
- **Professional UI** with modern styling
- **Authentication** with protected routes
- **Toast Notifications** for user feedback

### Backend Features
- **Express.js** with professional middleware
- **Security** with Helmet, CORS, and rate limiting
- **Logging** with Morgan HTTP logger
- **Compression** for response optimization
- **Environment Configuration** with dotenv
- **Error Handling** with global error handler
- **API Versioning** with RESTful design
- **Code Quality** with ESLint

## 🔒 Security

### Backend Security
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API rate limiting
- **Input Validation** - Request validation
- **Error Handling** - Secure error responses

### Frontend Security
- **Protected Routes** - Authentication-based routing
- **Token Management** - Secure JWT token handling
- **Form Validation** - Client-side validation
- **CORS Configuration** - Proper cross-origin setup

## 🎨 UI/UX Features

- **Professional Design** - Modern and clean interface
- **Responsive Layout** - Works on all devices
- **Interactive Elements** - Hover effects and animations
- **Loading States** - User feedback during operations
- **Error Handling** - Graceful error display
- **Accessibility** - Keyboard navigation and screen reader support

## 📱 Pages

### Public Pages
- **Home** - Landing page with features and CTA
- **Login** - User authentication
- **Register** - User registration

### Protected Pages
- **Dashboard** - User dashboard with statistics
- **Profile** - User profile management

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
npm run test:ui
```

## 🚀 Deployment

### Backend Deployment
1. Set environment variables
2. Build the application: `npm start`
3. Deploy to your preferred hosting service (Heroku, Railway, etc.)

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy the `dist` folder to static hosting (Vercel, Netlify, etc.)

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api/v1
```

## 📝 Development Guidelines

### Code Style
- Follow ESLint rules
- Use consistent formatting
- Write meaningful commit messages
- Add comments for complex logic

### Git Workflow
1. Create feature branches
2. Write tests for new features
3. Ensure all tests pass
4. Submit pull requests

### API Design
- Use RESTful conventions
- Implement proper error handling
- Add input validation
- Document endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the documentation in each directory
- Review the API endpoints
- Check the console for errors
- Ensure both servers are running

## 🔮 Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- Real-time features with WebSocket
- File upload functionality
- Advanced analytics dashboard
- Team collaboration features
- Model marketplace
# yaana-ai-trainer
Frontend and Backend Servers for Yaana AI Trainer
