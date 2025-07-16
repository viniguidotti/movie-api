# 🎬 Movies API

A Node.js API using TypeScript that consumes data from [The Movie Database (TMDb)](https://www.themoviedb.org/), allowing users to retrieve popular movies through simple endpoints, with a clean architecture and automated testing.

## 🚀 Technologies Used

- **Node.js** + **Express** – Lightweight and fast web server  
- **TypeScript** – Static typing and code organization  
- **Axios** – HTTP client for API requests  
- **dotenv** – Environment variable management  
- **Jest** – Unit testing framework  
- **Supertest** – HTTP integration testing  
- **Nodemon** – Auto-reloading for development  
- **ts-node** – Run TypeScript without compiling

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movies-api.git
   cd movies-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file and rename it to `.env`
   - Fill in the values as instructed in the example file

4. Run in development mode:
   ```bash
   npm run dev
   ```

5. Build and run in production:
   ```bash
   npm run build
   npm start
   ```

## ✅ Testing

Run all tests with:
```bash
npm test
```

View test coverage report:
```bash
npm run test:coverage
```

## 📂 Project Structure

```
src/
├── controllers/
├── services/
├── routes/
├── index.ts
mocks/
.env
```

## 🔐 Environment Variables

Sensitive settings are stored in the `.env` file. Never expose it publicly. Use the `.env.example` file as a template.

---

🧪 Project developed for educational purposes using external APIs. Feel free to contribute!
