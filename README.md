# PrepWise - AI-Powered Mock Interview Platform

<div align="center">
  <br />
    <a href="https://prepwise.vercel.app" target="_blank">
      <img src="https://github.com/user-attachments/assets/1c0131c7-9f2d-4e3b-b47c-9679e76d8f9a" alt="Project Banner">
    </a>
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
  </div>

  <h3 align="center">PrepWise: A job interview preparation platform powered by Vapi AI Voice agents</h3>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## 🤖 Introduction

PrepWise is an AI-powered mock interview platform built with Next.js, Firebase, and Vapi AI. It helps users practice job interviews with AI voice agents, providing real-time feedback and personalized interview experiences.

## ⚙️ Tech Stack

- Next.js
- Firebase
- Tailwind CSS
- Vapi AI
- shadcn/ui
- Zod

## 🔋 Features

👉 **Authentication**: Secure sign-up and sign-in with Firebase authentication

👉 **AI Voice Interviews**: Practice interviews with Vapi AI voice agents

👉 **Real-time Feedback**: Get instant AI-powered feedback on your responses

👉 **Modern UI/UX**: Clean and responsive design with Tailwind CSS

👉 **Interview Management**: Track and manage your practice interviews

## 🤸 Quick Start

Follow these steps to set up the project locally:

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/prepwise.git
cd prepwise
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

4. **Start the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.


