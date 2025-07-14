// app/test/page.tsx
import { auth } from "@/auth";

export default async function TestPage() {
  const session = await auth();
  
  console.log("Test page session:", session);
  
  return (
    <div className="p-4">
      <h1>Test Page</h1>
      <pre className="bg-gray-100 p-4 rounded">
        Session: {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}