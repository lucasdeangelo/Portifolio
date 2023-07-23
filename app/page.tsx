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
            <h2 className='text-5xl text-center font-extrabold relative bottom-30'>Sobre Mim</h2>
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
            
            <div className='text-white bg-amarelo hover:bg-amarelohover inline-flex p-3 px-8 rounded-2xl ml-[45.7%] relative bottom-[420px] '><a href="Lucas_de_Angelo-web-designer.pdf" download={"Lucas_de_Angelo-web-designer.pdf"}>Veja meu CV</a></div>
        </div>
      </div>

      <div className="skills">
        <div>
          <h2 className='text-5xl text-center font-extrabold relative bottom-30'>Skills</h2>
          <div className="cards">
            <div className="card1">
              <div className='bg-white flex-collumn gap-[35px] w-[300px] h-[300px] p-5 rounded-2xl relative left-[450px] top-[100px]'>
                <Image src="/../public/image/design.png" width={300} height={100} alt=''/>
                <Image className='relative top-[10px]' src="/../public/icons/varinha.png" width={38} height={38} alt=''/>
                <h3 className='relative left-[60px] bottom-[40px] pt-3 text-2xl font-bold'>Design</h3>
                <div className='relative left-[60px] bottom-[35px]'>
                  <p>UX & UI</p>
                  <p>Figma</p>
                  <p>Photoshop</p>
                  <p>Copywritting</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="card2">
              <div className='bg-white flex-collumn gap-[35px] w-[300px] h-[300px] p-5 rounded-2xl relative left-[800px] bottom-[200px]'>
                <Image src="/../public/image/front-end.png" width={300} height={100} alt=''/>
                <Image className='relative top-[10px]' src="/../public/icons/chave.png" width={38} height={38} alt=''/>
                <h3 className='relative left-[60px] bottom-[40px] pt-3 text-2xl font-bold'>Front End</h3>
                <div className='relative left-[60px] bottom-[35px]'>
                  <p>HTML & CSS</p>
                  <p>ReactJS & React Native</p>
                  <p>Tailwind CSS</p>
                  <p>Wordpress</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="card3">
              <div className='bg-white flex-collumn gap-[35px] w-[300px] h-[300px] p-5 rounded-2xl relative left-[1150px] bottom-[500px]'>
                <Image src="/../public/image/back-end.png" width={300} height={100} alt=''/>
                <Image className='relative top-[10px]' src="/../public/icons/server.png" width={38} height={38} alt=''/>
                <h3 className='relative left-[60px] bottom-[40px] pt-3 text-2xl font-bold'>Back End</h3>
                <div className='relative left-[60px] bottom-[35px]'>
                  <p>Lógica</p>
                  <p>Python</p>
                  <p>NodeJS</p>
                  <p>MySQL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="card4">
              <div className='bg-white flex-collumn gap-[35px] w-[300px] h-[300px] p-5 rounded-2xl relative left-[630px] bottom-[460px]'>
                <Image src="/../public/image/cybersecurity.png" width={300} height={100} alt=''/>
                <Image className='relative top-[10px]' src="/../public/icons/escudo.png" width={38} height={38} alt=''/>
                <h3 className='relative left-[60px] bottom-[40px] pt-3 text-2xl font-bold'>Cybersecurity</h3>
                <div className='relative left-[60px] bottom-[35px]'>
                  <p>SOC</p>
                  <p>Pentesting</p>
                  <p>Risk Analisis</p>
                  <p>Data Security</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="card5">
              <div className='bg-white flex-collumn gap-[35px] w-[300px] h-[300px] p-5 rounded-2xl relative left-[980px] bottom-[760px]'>
                <Image src="/../public/image/ingles.png" width={300} height={100} alt=''/>
                <Image className='relative top-[10px]' src="/../public/icons/chat.png" width={38} height={38} alt=''/>
                <h3 className='relative left-[60px] bottom-[40px] pt-3 text-2xl font-bold'>Inglês</h3>
                <div className='relative left-[60px] bottom-[35px]'>
                  <p>Grande Compreensão</p>
                  <p>Boa Pronúncia</p>
                  <p>Boa Escrita</p>
                  <p>Conversação Média</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="qualificacao">
        <div>
          <div className="relative bottom-[320px]">

          <h2 className='text-5xl text-center font-extrabold relative bottom-30'>Qualificações</h2>
          <div className="flex justify-center items-center pt-[150px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="576" viewBox="0 0 6 576" fill="none">
            <path d="M3 573L3 2.99999" stroke="#1E1E1E" stroke-width="5" stroke-linecap="round"/>
          </svg>
            </div>
            <Image className='relative left-[48.7%] bottom-[600px]' src="/../public/circulo.png" width={50} height={50} alt=''/>
            <Image className='relative left-[48.7%] bottom-[530px]' src="/../public/circulo.png" width={50} height={50} alt=''/>
            <Image className='relative left-[48.7%] bottom-[450px]' src="/../public/circulo.png" width={50} height={50} alt=''/>
            <Image className='relative left-[48.7%] bottom-[365px]' src="/../public/circulo.png" width={50} height={50} alt=''/>
            <Image className='relative left-[48.7%] bottom-[280px]' src="/../public/circulo.png" width={50} height={50} alt=''/>

            <div className='item1'>
              <h4 className='relative left-[30%] bottom-[840px] font-medium text-2xl pb-2'>Ensino Médio</h4>
              <p className='relative left-[30%] bottom-[840px]'>Escola Estadual Maria Auxiliadora</p>
              <Image className='relative left-[30%] bottom-[830px]' src={"/../public/icons/book.png"} width={20} height={20} alt=''/>
              <p className='relative left-[31.5%] bottom-[852px]'>2020 - 2022</p>
            </div>
            <div className="item2">
              <h4 className='relative left-[53%] bottom-[830px] font-medium text-2xl pb-2'>Desenvolvimento de Sistemas</h4>
              <p className='relative left-[53%] bottom-[830px]'>Etec de Embu</p>
              <Image className='relative left-[53%] bottom-[820px]' src={"/../public/icons/book.png"} width={20} height={20} alt=''/>
              <p className='relative left-[54.5%] bottom-[843px]'>2020 - 2022</p>
            </div>
            <div className="item3">
              <h4 className='relative left-[30%] bottom-[810px] font-medium text-2xl pb-2'>Curso de Inglês</h4>
              <p className='relative left-[30%] bottom-[810px]'>Enjoy Cursos Profissionalizantes</p>
              <Image className='relative left-[30%] bottom-[800px]' src={"/../public/icons/book.png"} width={20} height={20} alt=''/>
              <p className='relative left-[31.5%] bottom-[822px]'>2022 - 2024</p>
            </div>
            <div className="item3">
              <h4 className='relative left-[53%] bottom-[790px] font-medium text-2xl pb-2'>Curso de Informática</h4>
              <p className='relative left-[53%] bottom-[790px]'>CTI Educar Embu das Artes</p>
              <Image className='relative left-[53%] bottom-[780px]' src={"/../public/icons/book.png"} width={20} height={20} alt=''/>
              <p className='relative left-[54.5%] bottom-[803px]'>2018 - 2019</p>
            </div>
            <div className="item4">
              <h4 className='relative left-[30%] bottom-[760px] font-medium text-2xl pb-2'>Treinamento de <br />Marketing</h4>
              <p className='relative left-[30%] bottom-[760px]'>V4 Company</p>
              <Image className='relative left-[30%] bottom-[750px]' src={"/../public/icons/book.png"} width={20} height={20} alt=''/>
              <p className='relative left-[31.5%] bottom-[772px]'>2023 - 2024</p>
            </div>         
          </div>
        </div>
      </div>
    </main>
  )
}
