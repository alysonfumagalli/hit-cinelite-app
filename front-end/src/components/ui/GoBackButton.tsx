import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'

export function GoBackButton() {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate('/')}
      className="text-paragraph hover:text-title transition-colors flex items-center gap-2 hover:scale-105"
    >
      <ArrowLeftIcon className="size-6 md:size-8 lg:size-9 transition-colors" />
      <span className="md:text-xl lg:text-2xl">Voltar</span>
    </button>
  )
}
