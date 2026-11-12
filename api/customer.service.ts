import prisma from './prisma.ts';

interface CustomerOptions {
  id: number;
  name: string;
  email: string;
}

export async function findCustomersOptions(): Promise<
  CustomerOptions[]
> {
  return await prisma.customer.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
    orderBy: { name: 'asc' },
  });
}
