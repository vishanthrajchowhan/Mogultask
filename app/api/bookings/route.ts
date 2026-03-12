import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  sessionType: z.string().min(1, "Session type is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  notes: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = bookingSchema.parse(body)

    // Parse date and time
    const dateTime = new Date(`${validatedData.date}T${validatedData.time}`)

    const booking = await prisma.booking.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        sessionType: validatedData.sessionType,
        date: dateTime,
        time: validatedData.time,
        notes: validatedData.notes,
        status: 'pending',
      },
    })

    // TODO: Send confirmation email
    // TODO: Add to calendar (Calendly integration)

    return NextResponse.json({ success: true, booking }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors },
        { status: 400 }
      )
    }

    console.error('Booking creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}
