# Yaana AI Trainer


## 🏗️ Architecture

- **Frontend**: React 18 + Vite + Modern JavaScript
- **Backend**: Express.js + Node.js
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
- **Backend API**: http://localhost:8848
- **Health Check**: http://localhost:8848/health

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
VITE_API_URL=http://localhost:8848/api/v1
```







