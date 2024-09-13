import { PlusIcon } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { useQuery } from '@tanstack/react-query'
import { getPendingGoals } from '@/http/get-pending-goals'
import { createGoalCompletion } from '@/http/create-goal-completion'
import { queryClient } from '@/lib/query-client'

export function PendingGoals() {
  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: async () => await getPendingGoals(),
  })

  const hasData = data && data

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {hasData &&
        data.map(goal => {
          const isGoalChecked =
            goal.completionCount >= goal.desiredWeekFrequency

          return (
            <OutlineButton
              key={goal.id}
              disabled={isGoalChecked}
              onClick={() => handleCompleteGoal(goal.id)}
            >
              <PlusIcon className="size-4 text-zinc-600" />
              {goal.title}
            </OutlineButton>
          )
        })}
    </div>
  )
}
