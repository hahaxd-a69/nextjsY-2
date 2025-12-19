export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-blue-200">{children}</section>;
}
