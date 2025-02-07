import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { EmptyGoal } from './components/empty-goal'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'
import { useState } from 'react'
export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })

  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoal />}

      <CreateGoal />
    </Dialog>
  )
}
