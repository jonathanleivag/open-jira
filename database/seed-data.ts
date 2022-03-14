export interface SeedData {
  entries: SeedEntry[]
}

export interface SeedEntry {
  description: string
  status: string
  createdAt: number
  updatedAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'pendiente: Anim laborum exercitation elit Lorem deserunt sit laboris enim duis.',
      status: 'pending',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      description:
        'pendiente: Anim laborum exercitation elit Lorem deserunt sit laboris enim duis.',
      status: 'pending',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      description:
        'En progreso: Pariatur magna eiusmod veniam laboris sint aute commodo non cupidatat officia.',
      status: 'in-progress',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      description:
        'finalizado: Ipsum aute eu labore minim incididunt occaecat culpa.',
      status: 'finished',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      description:
        'finalizado: Ipsum aute eu labore minim incididunt occaecat culpa.',
      status: 'finished',
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
  ]
}
