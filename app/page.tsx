// app/page.tsx
export const metadata = {
  title: "Test Pipeline",
  description: "Demo site to test GitHub → Vercel → Azure pipelines",
};

export default function Home() {
  return (
    <main className="p-10 font-sans text-center">
      <h1 className="text-4xl font-bold mb-6">🚀 Test Pipeline</h1>
      <p className="text-lg mb-4">
        This site demonstrates CI/CD from <strong>GitHub</strong> →{" "}
        <strong>Vercel</strong> → <strong>Azure App Service</strong>.
      </p>
      <p className="text-gray-600">
        Edit <code>app/page.tsx</code>, push to GitHub, and watch the site
        redeploy automatically.
      </p>
      <a
        className="inline-block mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        href="/about"
      >
        Go to About Page
      </a>
    </main>
  );
}
