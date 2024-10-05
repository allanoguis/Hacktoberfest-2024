"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Your GitHub repository details
const owner = "allanoguis"; // Replace with the repository owner
const repo = "Hacktoberfest-2024"; // Replace with the repository name

export default function CollaboratorsPage() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    // Fetch contributors from GitHub API
    const fetchContributors = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contributors`
        );
        if (!res.ok) throw new Error("Failed to fetch contributors");
        const data = await res.json();
        setContributors(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            GitHub Contributors
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-300">
            <Users className="h-6 w-6" />
            <span className="text-xl">{contributors.length} Contributors</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributors.map((contributor) => (
            <Card
              key={contributor.id}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-purple-500/20 text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <Image
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    width={60}
                    height={60}
                    className="rounded-full ring-2 ring-purple-500"
                  />
                  <div>
                    <div className="font-semibold text-xl">{contributor.login}</div>
                    <div className="text-sm text-purple-300">
                      {contributor.contributions} contributions
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2 text-purple-300">
                    <Github className="h-5 w-5" />
                    <span>{contributor.contributions} commits</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-purple-500 text-white hover:bg-purple-600 border-none"
                  >
                    <a
                      href={contributor.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View Profile
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
