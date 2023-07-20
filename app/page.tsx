import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="menu">
        <div className='justify-start items-start gap-[35px] inline-flex relative'>
          <div className='text-white bg-roxo p-4 flex flex-row rounded-r-3xl fixed top-0'>
            <div className='pr-5 pl-[366px]'><a href="#hero">Início</a></div>
            <div className='pr-5'><a href="">Sobre</a></div>
            <div className='pr-5'><a href="">Skills</a></div>
            <div className='pr-5'><a href="">Quaficações</a></div>
            <div className='pr-5'><a href="">Trabalhos</a></div>
            <div className='pr-5'><a href="">Contato</a></div>
          </div>
        </div>
      </div>
    </main>
  )
}
