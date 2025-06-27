# Yaana AI Trainer - Backend

A professional Express.js backend server for the Yaana AI Trainer application.

## 🚀 Features

- **Express.js** - Fast, unopinionated web framework
- **Security** - Helmet, CORS, Rate limiting
- **Logging** - Morgan HTTP request logger
- **Compression** - Response compression
- **Environment Configuration** - Dotenv support
- **Error Handling** - Global error handler
- **API Versioning** - RESTful API with versioning
- **Code Quality** - ESLint configuration

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file with your configuration.

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 📡 API Endpoints

### Health Check
- `GET /health` - Server health status

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/logout` - User logout

### Users
- `GET /api/v1/users/profile` - Get user profile
- `PUT /api/v1/users/profile` - Update user profile
- `GET /api/v1/users` - Get all users (admin)

## 🧪 Testing

```bash
npm test
```

## 🔧 Development

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── routes/
│   │   ├── index.js
│   │   ├── auth.routes.js
│   │   └── user.routes.js
│   └── server.js
├── package.json
├── .eslintrc.js
├── env.example
└── README.md
```

## 🔒 Security Features

- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API rate limiting
- **Input Validation** - Request validation
- **Error Handling** - Secure error responses

## 🌍 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` |
| `CORS_ORIGIN` | CORS origin | `http://localhost:5173` |
| `RATE_LIMIT_WINDOW_MS` | Rate limit window | `900000` |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window | `100` |

## 📝 License

MIT License 