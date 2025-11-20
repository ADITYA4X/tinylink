import { useRouter } from "next/router";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const STATIC_DATA = [
  {
    code: "abc123",
    url: "https://google.com",
    clicks: 10,
    createdAt: "2025-01-01",
    lastClicked: "2025-01-05",
  },
  {
    code: "xyz789",
    url: "https://github.com",
    clicks: 22,
    createdAt: "2025-01-10",
    lastClicked: "2025-01-15",
  },
];

export default function StatsPage() {
  const router = useRouter();
  const { code } = router.query;

  const data =
    typeof code === "string"
      ? STATIC_DATA.find((item) => item.code === code)
      : null;

  const notFound = typeof code === "string" && !data;

  if (notFound) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <Card>
          <h1 className="text-xl font-bold mb-4">Link Not Found</h1>
          <Button onClick={() => router.push("/")}>Go Back</Button>
        </Card>
      </div>
    );
  }

  if (!data) {
    return null; // remaining - router.query
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-stone-600 text-center">
          Link Stats
        </h1>

        <Card>
          <h2 className="text-xl font-semibold mb-4 text-stone-500">
            Short Link Details
          </h2>

          <div className="space-y-2 text-sm text-stone-500">
            <p>
              <strong>Short Code:</strong> {data.code}
            </p>
            <p>
              <strong>Target URL:</strong> {data.url}
            </p>
            <p>
              <strong>Total Clicks:</strong> {data.clicks}
            </p>
            <p>
              <strong>Created At:</strong> {data.createdAt}
            </p>
            <p>
              <strong>Last Clicked:</strong> {data.lastClicked}
            </p>
          </div>

          <div className="mt-4 flex gap-2 text-stone-600">
            <Button
              className="mr-2 px-4 py-1 rounded border cursor-pointer bg-stone-200 hover:bg-stone-300 border-stone-600"
              onClick={() =>
                navigator.clipboard.writeText(
                  `${window.location.origin}/${data.code}`
                )
              }
            >
              Copy Short URL
            </Button>

            <Button
              className="mr-2 px-4  py-1 rounded border cursor-pointer bg-stone-200 hover:bg-stone-300 border-stone-600"
              onClick={() => window.open(data.url, "_blank")}
            >
              Open URL
            </Button>

            <Button
              className="mr-2 px-4  py-1 rounded border cursor-pointer bg-stone-200 hover:bg-stone-300 border-stone-600"
              onClick={() => router.push("/")}
            >
              Back
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
