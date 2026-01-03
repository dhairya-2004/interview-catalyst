# Interview Catalyst 🚀

A peer-driven interview preparation platform that surfaces top-voted, instructor-approved solutions through crowdsourced Q&A. Built to help students and job seekers prepare for technical interviews collaboratively.

**[Live Demo](https://interview-catalyst.vercel.app)**

## Overview

Interview Catalyst transforms the interview preparation experience by leveraging the power of crowdsourcing. Instead of relying on static question banks, users contribute, vote on, and refine answers collectively, ensuring the best solutions rise to the top. Instructors can approve high-quality responses, creating a curated knowledge base that grows smarter over time.

## Features

- **Crowdsourced Q&A** - Post questions, submit answers, and let the community vote on the best solutions
- **Instructor Approval System** - Verified instructors can approve top answers, adding credibility
- **Real-time Updates** - Live synchronization across cohorts for seamless collaboration
- **Upvoting & Ranking** - Best answers surface through community voting
- **User Authentication** - Secure login system with role-based access (students, instructors, admins)
- **Search & Filter** - Quickly find questions by topic, tags, or difficulty
- **Responsive Design** - Optimized for desktop and mobile devices

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js, CSS3, HTML5 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Deployment** | Vercel (Frontend), CI/CD Pipelines |
| **Methodology** | Agile Development |



## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhairya-2004/interview-catalyst.git
   cd interview-catalyst
   ```

2. **Set up the backend**
   ```bash
   cd Node_Server
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the `Node_Server` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Set up the frontend**
   ```bash
   cd ../React
   npm install
   ```

5. **Run the application**

   Start the backend server:
   ```bash
   cd Node_Server
   npm start
   ```

   In a new terminal, start the frontend:
   ```bash
   cd React
   npm start
   ```

6. **Access the application**
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | User login |
| `GET` | `/api/questions` | Fetch all questions |
| `POST` | `/api/questions` | Create a new question |
| `POST` | `/api/answers` | Submit an answer |
| `PUT` | `/api/answers/:id/upvote` | Upvote an answer |
| `PUT` | `/api/answers/:id/approve` | Instructor approval |

## Key Achievements

- 🎯 **750+ active users** across multiple cohorts
- 📉 Reduced redundant questions through intelligent search and community moderation
- ⚡ Rapid feature deployment via automated CI/CD pipelines
- 🔄 Real-time Q&A resolution enabling instant collaboration

