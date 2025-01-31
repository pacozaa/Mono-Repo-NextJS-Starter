import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  
  try {
    if (!req.body) {
      return NextResponse.json(
        { error: 'Request body is required' },
        { status: 400 }
      )
    }
    const body = await req.json()
    
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body format' },
        { status: 400 }
      )
    }

    const memory = await prisma.memories.create({
      // parse body.priority to number
      data: {
        category: body.category,
        priority: Number(body.priority),
        content: body.content
      }
    })
    return NextResponse.json(memory)
  } catch (error: unknown) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to create memory' }, { status: 500 })
  }
}