import Image from 'next/image';
import"./header.scss"
export function Header(){
    return(<div className="header">
        <div>
          <h1> Olá! Eu sou Lukas Mota!</h1>
          <h2>Desenvolvedor Full Stack Junior</h2>
        </div>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        </div>
   
    )
}