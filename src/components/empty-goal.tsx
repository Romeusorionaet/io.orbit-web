import Image from 'next/image'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export function EmptyGoal() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <Image
        width={200}
        height={200}
        src="/images/in.orbit.svg"
        alt="logo io.orbit"
        className="w-32 h-32"
      />

      <Image
        width={200}
        height={200}
        src="/images/lets-start.svg"
        alt="logo io.orbit"
        className="w-80 h-80"
      />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
