import { CreateGoal } from '@/components/create-goal'
import { Summary } from '@/components/summary'
import { EmptyGoal } from '@/components/empty-goal'
import { Dialog } from '@/components/ui/dialog'

export default function Home() {
  return (
    <Dialog>
      {/* <EmptyGoal /> */}
      <Summary />
      <CreateGoal />
    </Dialog>
  )
}
