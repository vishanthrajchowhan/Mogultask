import { NextResponse } from 'next/server'
import { getPrismaClient } from '@/lib/prisma'
import { z } from 'zod'

const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  source: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const prisma = await getPrismaClient()
    const body = await request.json()
    const validatedData = leadSchema.parse(body)

    const lead = await prisma.lead.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        source: validatedData.source || 'website',
      },
    })

    // TODO: Add email notification or integration with email service

    return NextResponse.json({ success: true, lead }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors },
        { status: 400 }
      )
    }

    console.error('Lead creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create lead' },
      { status: 500 }
    )
  }
}
