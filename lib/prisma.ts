type PrismaClientType = import('@prisma/client').PrismaClient

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientType | undefined
}

export async function getPrismaClient() {
  if (!globalForPrisma.prisma) {
    const { PrismaClient } = await import('@prisma/client')
    globalForPrisma.prisma = new PrismaClient()
  }

  return globalForPrisma.prisma
}
