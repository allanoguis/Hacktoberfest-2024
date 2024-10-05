'use client'
import Image from 'next/image'
import { Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Placeholder data for contributors
const contributors = [
  { id: 1, name: 'Alice Johnson', username: 'alice_dev', avatar: '/placeholder.svg?height=100&width=100', contributions: 127 },
  { id: 2, name: 'Bob Smith', username: 'bob_coder', avatar: '/placeholder.svg?height=100&width=100', contributions: 89 },
  { id: 3, name: 'Carol Williams', username: 'carol_programmer', avatar: '/placeholder.svg?height=100&width=100', contributions: 203 },
  { id: 4, name: 'David Brown', username: 'david_engineer', avatar: '/placeholder.svg?height=100&width=100', contributions: 156 },
  { id: 5, name: 'Eva Davis', username: 'eva_techie', avatar: '/placeholder.svg?height=100&width=100', contributions: 178 },
  { id: 6, name: 'Frank Miller', username: 'frank_developer', avatar: '/placeholder.svg?height=100&width=100', contributions: 92 },
]

export default function ContributorsSection() {
  return (
    (<div className="min-h-fit bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl text-center font-bold">GitHub Contributors</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {contributors.map((contributor) => (
            <Card key={contributor.id} className="w-[350px] h-[200px] flex flex-col">
              <CardHeader className="flex-grow">
                <CardTitle className="flex items-center gap-2">
                  <Image
                    src={contributor.avatar}
                    alt={contributor.name}
                    width={40}
                    height={40}
                    className="rounded-full" />
                  <div>
                    <div className="font-semibold">{contributor.name}</div>
                    <div className="text-sm text-muted-foreground">@{contributor.username}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    <span>{contributor.contributions} contributions</span>
                  </div>
                  <Button variant="outline" size="sm">View Profile</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>)
  );
}