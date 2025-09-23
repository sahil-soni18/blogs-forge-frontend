import { IBlog } from "./types";

export const dummyBlogs: IBlog[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14: A Comprehensive Guide",
    slug: "getting-started-with-nextjs-14",
    description:
      "Next.js has revolutionized the way we build React applications. With the release of Next.js 14, the framework has become even more powerful with new features like the App Router, Server Components, and enhanced performance.",
    content: `
# Getting Started with Next.js 14: A Comprehensive Guide

![Next.js Banner](https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop)

Next.js has revolutionized the way we build React applications. With the release of **Next.js 14**, the framework has become even more powerful with new features like the App Router, Server Components, and enhanced performance.

## What's New in Next.js 14?

### 1. App Router Stability
The App Router is now stable and recommended for all new projects. It offers:

- **Improved Performance**: Better caching and faster page loads
- **Nested Layouts**: Easier to create complex UI structures
- **Server Components**: Reduced client-side JavaScript

### 2. Enhanced Image Optimization

\`\`\`javascript
// Next.js Image component example
import Image from 'next/image';

export default function Profile() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile picture"
      width={500}
      height={300}
      priority
    />
  );
}
\`\`\`

### 3. Middleware Improvements
Middleware now has better TypeScript support and enhanced configuration options.

## Setting Up Your First Next.js 14 Project

### Installation

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

### Project Structure

\`\`\`
my-app/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
└── package.json
\`\`\`

![Project Structure](https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=300&fit=crop)

## Key Features to Master

### Server-Side Rendering (SSR)

\`\`\`javascript
// app/posts/page.js
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  
  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}
\`\`\`

### Static Site Generation (SSG)

\`\`\`javascript
// This page will be statically generated at build time
export default function About() {
  return <div>About Us</div>;
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}
\`\`\`

![Code Example](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop)

## Best Practices

### 1. **Use the Image Component**
Always use Next.js Image component for optimized images:

\`\`\`javascript
import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      placeholder="blur"
    />
  );
}
\`\`\`

### 2. **Leverage Server Components**
Move data fetching to server components whenever possible:

\`\`\`javascript
// Server Component
async function UserProfile({ userId }) {
  const user = await getUser(userId);
  
  return (
    <div>
      <h1>{user.name}</h1>
      <ClientComponent user={user} />
    </div>
  );
}
\`\`\`

### 3. **Optimize Fonts**
Use next/font for optimized font loading:

\`\`\`javascript
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
\`\`\`

## Performance Tips

| Feature | Impact | Usage |
|---------|--------|-------|
| **Image Optimization** | High | Always use next/image |
| **Font Optimization** | High | Use next/font |
| **Code Splitting** | High | Automatic with App Router |
| **Caching** | Medium | Configure properly |

![Performance Chart](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop)

## Common Pitfalls to Avoid

1. **❌ Not using the App Router** - Stick with the new App Router for better features
2. **❌ Client-side data fetching when unnecessary** - Use Server Components
3. **❌ Ignoring image optimization** - Always use next/image
4. **❌ Not using TypeScript** - Next.js has excellent TypeScript support

## Real-World Example: Blog Application

Let's build a simple blog with Next.js 14:

\`\`\`javascript
// app/blog/[slug]/page.js
export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
\`\`\`

![Blog Example](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop)

## Conclusion

Next.js 14 represents a significant step forward in React framework development. With its focus on performance, developer experience, and new features like the App Router, it's the perfect choice for your next project.

> **Pro Tip**: Start with the App Router and Server Components to take full advantage of what Next.js 14 has to offer.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
- [Next.js Learn Course](https://nextjs.org/learn)

---

*Happy coding! 🚀*
    `,
    date_of_publish: "2024-01-15",
    author: "John Doe",
    author_avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    technologies: ["Next.js", "React", "TypeScript", "Web Development"],
    read_time: 8,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Mastering React Hooks in 2024",
    slug: "mastering-react-hooks-2024",
    description:
      "Deep dive into advanced React Hooks patterns and best practices for modern web development.",
    content: `
# Mastering React Hooks in 2024

![React Hooks](https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop)

React Hooks have completely transformed how we write React components. Let's explore the advanced patterns and best practices.

## Understanding useEffect Deeply

\`\`\`javascript
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(\`/api/users/\${userId}\`);
      const userData = await response.json();
      
      if (!ignore) {
        setUser(userData);
        setLoading(false);
      }
    }

    fetchUser();

    return () => {
      ignore = true;
    };
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
\`\`\`
    `,
    date_of_publish: "2024-01-10",
    author: "Jane Smith",
    author_avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    technologies: ["React", "JavaScript", "Hooks"],
    read_time: 6,
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "TypeScript for React Developers",
    slug: "typescript-for-react-developers",
    description:
      "Complete guide to using TypeScript effectively in React projects with practical examples.",
    content: `
# TypeScript for React Developers

![TypeScript](https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop)

TypeScript brings type safety to your React applications. Learn how to use it effectively.

## Typing Components and Props

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  isAdmin?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, isAdmin = false }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {isAdmin && <button onClick={() => onEdit(user)}>Edit</button>}
    </div>
  );
};
\`\`\`
    `,
    date_of_publish: "2024-01-05",
    author: "Mike Johnson",
    author_avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    technologies: ["TypeScript", "React", "Development"],
    read_time: 10,
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
  },
];
