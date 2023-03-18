import { RxArchive } from 'react-icons/rx'

interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-4xl font-bold">👋 Hi there!</h1>
        <p className="text-zinc-600 mt-2">This is a starter template for React.JS with Tailwind CSS.</p>

        <p className="font-bold mb-2 mt-4">
          <RxArchive width={16} height={16} className="inline" /> Plugins:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
              React Router
            </a>
          </li>

          <li>
            <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer">
              React Icons
            </a>
          </li>

          <li>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              Tailwind CSS
            </a>
          </li>

          <li>
            <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
              Vite
            </a>
          </li>

          <li>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
              TypeScript
            </a>
          </li>
        </ul>

        <p className='mt-4 text-zinc-400'>
          Copyright &copy; 2023{' '} UaGiZo.Com, All Rights Reserved.
        </p>
      </div>
    </div>
  )
}
