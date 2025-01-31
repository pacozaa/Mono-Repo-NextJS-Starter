import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { prisma } from '@/lib/prisma'
import { Memory } from "@/types/memory"

export const metadata: Metadata = {
  title: "Memories List",
  description: "View all stored memories",
}

async function getMemories() {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/memories/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
  
    if (!response.ok) {
      throw new Error("Failed to fetch memories")
    }
  
    const memories: Memory[] = await response.json()
    return memories
  }catch(error){
    return []
  }
  
}

export default async function MemoriesPage() {
  const memories = await getMemories()

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Memories</h1>
          <p className="text-muted-foreground">
            A list of all stored memories in the system.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory) => (
            <Card key={memory.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge>{memory.category}</Badge>
                  <Badge variant="outline">Priority: {memory.priority}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {memory.content}
                </p>
                <p className="text-xs text-muted-foreground mt-4">
                  Created: {new Date(memory.createdAt).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
