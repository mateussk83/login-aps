import {EnvelopeSimple} from 'phosphor-react'
import './styles/global.css'

export function App() {

  return (
    <div className='flex flex-col pt-4'>
      <div id='header' className='flex items-center justify-center flex-col'>
      <img src="../src/assets/Group.png" className='w-[120px]' alt="" />
      <h1 className='font-bold text-3xl text-gray-900 pt-2'>Handoven</h1>
      <h2 className='text-md text-gray-600 mt-[-8px]'>Faça Login e comece a usar!</h2>
      </div>


  
      <form action="" className='flex items-center justify-center flex-col pt-10'>
        <div id='email' className='flex items-start flex-col'>
        <label htmlFor="" className='text-gray-900 font-semibold text-sm '>Endereço de e-mail</label>
        <input type="text" className='border rounded p-3 mt-2 w-[400px]  hover:border-red-500 focus:outline-red-500  ' placeholder={'Digite seu e-mail'} />
        </div>

        <div id='senha' className='flex items-start flex-col pt-4'>
        <label htmlFor="" className='text-gray-900 font-semibold text-sm'>Sua Senha</label>
        <input type="text" className='border rounded p-3 mt-2 w-[400px] hover:border-red-500 focus:outline-red-500 ' placeholder={'**********'} />
        <div className='flex gap-2 pt-4 justify-center items-center'>
        <input id='check' type="checkbox" className='h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500'/>
        <label htmlFor="check" className='cursor-pointer'>Lembrar de mim</label>
        </div>
       </div>

        <button className='border py-3 rounded w-[400px] bg-red-300 font-bold mt-6 hover:bg-red-500 transition-color duration-200'>
          Entrar na plataforma
        </button>      
      </form>

  <div className='flex flex-col text-center items-center pt-6'>
      <a href="" className='text-gray-600 text-xs font-bold hover:text-gray-900 transition-color duration-200'>Esqueceu sua senha?</a>
      <span className='text-gray-600 text-xs pt-3'>Não tem uma conta? <a href="" className='font-bold hover:text-gray-900 transition-color duration-200'>Registre-se!</a></span>
</div>

    </div>
  )
}
