import Image from 'next/image';
export function Header(){
    return(<div className="header">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <div>
          <h1> Olá! Eu sou Lukas Mota!</h1>
          <h2>Desenvolvedor Full Stack Junior</h2>
        </div>
        </div>
   
    )
}