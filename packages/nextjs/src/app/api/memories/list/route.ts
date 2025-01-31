import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const memories = await prisma.memories.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(memories)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch memories' }, { status: 500 })
  }
}
