import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="menu">
        <div className='justify-start items-start gap-[35px] inline-flex'>
          <div className='text-white bg-roxo p-4 flex flex-row rounded-r-3xl sticky top-0 '>
            <div className='pr-5 pl-[366px]'><a href="#hero">Início</a></div>
            <div className='pr-5'><a href="">Sobre</a></div>
            <div className='pr-5'><a href="">Skills</a></div>
            <div className='pr-5'><a href="">Quaficações</a></div>
            <div className='pr-5'><a href="">Trabalhos</a></div>
            <div className='pr-5'><a href="">Contato</a></div>
          </div>
        </div>
      </div>

      <div className="hero">
        <div>
          <div className="ml-36">
            <h1 className='text-preto text-7xl font-extrabold pl-60 pt-52'>Muito prazer, <br />sou o Lucas!</h1>
            <p className='text-lg pl-60 pt-4'>Sou um Desenvolvedor Full Stack com foco <br /> em UX Design. Me conheça melhor a partir do <br /> conteúdo sobre mim que eu preparei <br /> especialmente para você!</p>
            <div className='text-white bg-amarelo hover:bg-amarelohover inline-flex p-3 rounded-2xl ml-60 mt-4'><a href="">Vamos Conversar!</a></div>
            
            <div className="flex flex-row relative bottom-11 left-96 pl-7">
              <a href="https://github.com/lucasdeangelo?tab=repositories" className='pr-2'><Image src="/../public/icons/github.png" width={40} height={40} alt="GitHub Icone"/></a>
              <a href="https://instagram.com/lucasdeangelo23?igshid=ZDdkNTZiNTM="className='pr-2'><Image src="/../public/icons/instagram.png" width={40} height={40} alt="Instagram Icone"/></a>
              <a href="mailto:lucasdangelo343@gmail.com?" className=' pr-2'><Image src="/../public/icons/envelope.png" width={50} height={50} alt="Envelope Icone"/></a>
              <a href="https://www.linkedin.com/in/lucas-de-angelo-b90946220/" className='pr-2'><Image src="/../public/icons/linkedIn.png" width={40} height={40} alt="LinkedIn Icone"/></a>
            </div>
          </div>
          <Image src="/../public/eu.png" width={400} height={600} alt="GitHub Icone" className='relative left-[1000px] bottom-[430px]'/>
        </div>        
      </div>

      <div className="sobremim">
        <div>          
            <h2 className='text-5xl text-center font-extrabold sticky bottom-40'>Sobre Mim</h2>
            <div className="flex justify-center items-center pt-[150px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="5" height="568" viewBox="0 0 5 568" fill="none">
                <path d="M2.5 565L2.5 3" stroke="#1E1E1E" stroke-width="5" stroke-linecap="round"/>
              </svg>
            </div>
            <Image className='relative left-[48.7%] bottom-[600px]' src="/../public/circulo.png" width={50} height={50} alt=''/>
            <Image className='relative left-[48.7%] bottom-[450px]' src="/../public/circulo.png" width={50} height={50} alt=''/>
            <Image className='relative left-[48.7%] bottom-[240px]' src="/../public/circulo.png" width={50} height={50} alt=''/>

            <p className='relative left-[30%] bottom-[740px]'>Me chamo Lucas, tenho 18 anos, moro em <br /> Embu das Artes e sou um grande entusiasta <br /> da tecnologia desde criança e como destino, <br /> segui carreira nessa área.</p>

            <p className='relative left-[53%] bottom-[640px]'>Como me apresentei antes, trabalho com o <br /> desenvolvimento completo de aplicações <br /> diversas, com experiência em Web Design em <br /> HTML, CSS, React, Tailwind, Wordpress, UX e Design em Geral.</p>

            <p className='relative left-[30%] bottom-[470px]'>Tenho como principal foco trazer soluções <br /> práticas no mundo real que façam a diferença <br /> de verdade na vida das pessoas, desde a <br /> segurança, UX e fucionalidade diante aos <br /> problemas existentes. </p>
            
        </div>
      </div>
    </main>
  )
}
