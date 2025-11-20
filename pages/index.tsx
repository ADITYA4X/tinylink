import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Search } from "@/components/ui/Search";
import { Table } from "@/components/ui/Table";

type LinkItem = {
  code: string;
  url: string;
  clicks: number;
  lastClicked?: string;
};

export default function Home() {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [search, setSearch] = useState("");

  const [links, setLinks] = useState<LinkItem[]>([
    {
      code: "abc123",
      url: "https://google.com",
      clicks: 10,
      lastClicked: "2025-01-01",
    },
    {
      code: "xyz789",
      url: "https://github.com",
      clicks: 22,
      lastClicked: "2025-01-10",
    },
  ]);

  const filteredLinks = links.filter(
    (item) =>
      item.code.toLowerCase().includes(search.toLowerCase()) ||
      item.url.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) return alert("URL is required");

    const newCode = code || Math.random().toString(36).substring(2, 8);

    const newLink: LinkItem = {
      code: newCode,
      url,
      clicks: 0,
      lastClicked: "Never",
    };

    setLinks([...links, newLink]);

    setUrl("");
    setCode("");
  };

  const handleDelete = (removeCode: string) => {
    setLinks(links.filter((item) => item.code !== removeCode));
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-800">
            Tiny Link
          </h1>
          <Card>
            <h2 className="text-xl font-semibold mb-4 text-stone-500">
              Create Short Link
            </h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <Input
                placeholder="enter Full URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />

              <Button
                type="submit"
                className="w-full bg-stone-600 hover:bg-stone-700"
              >
                Create Short Link
              </Button>
            </form>
          </Card>

          <Search
            value={search}
            onChange={(val) => setSearch(val)}
            placeholder="Search links..."
          />

          <Card>
            <h2 className="text-xl font-semibold mb-4 text-stone-500">
              All Links
            </h2>

            <Table headers={["Code", "URL", "Clicks", "Last Click", "Actions"]}>
              {filteredLinks.map((item) => (
                <tr key={item.code} className="border-b">
                  <td className="px-4 py-2 whitespace-nowrap">{item.code}</td>
                  <td className="px-4 py-2 break-all">{item.url}</td>
                  <td className="px-4 py-2">{item.clicks}</td>
                  <td className="px-4 py-2">{item.lastClicked}</td>
                  <td className="px-4 py-2 space-x-2">
                    <Button
                      className="text-red-600"
                      onClick={() => handleDelete(item.code)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </Table>
          </Card>
        </div>
      </div>
    </main>
  );
}
