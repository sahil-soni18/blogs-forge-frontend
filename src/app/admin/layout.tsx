// Correct: Export a React component as default
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      {/* Your admin layout structure */}
      {children}
    </div>
  );
}
