'use client'

import { CreateGoal } from '@/components/create-goal'
import { Summary } from '@/components/summary'
import { EmptyGoal } from '@/components/empty-goal'
import { Dialog } from '@/components/ui/dialog'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '@/http/get-summary'

export default function Home() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: async () => await getSummary(),
  })

  const hasSummary = data && data.total > 0

  return (
    <Dialog>
      {hasSummary ? <Summary /> : <EmptyGoal />}

      <CreateGoal />
    </Dialog>
  )
}
