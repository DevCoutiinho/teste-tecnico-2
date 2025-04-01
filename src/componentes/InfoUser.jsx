import React from 'react'

const InfoUser = ({dados}) => {
  return (
    <div className='mt-7 bg-[#D9D9D9] py-4 px-6 rounded-[15px] w-[700px]'>
      {dados?.id ? (
        <div className='flex items-center gap-2'>
          <div className='w-[200px] h-[180px]'>
            <img src={dados.avatar_url} alt={dados.name} className='w-full rounded-full border-2 border-[#005CFF] object-contain'/>
          </div>
          <div className='flex flex-col gap-4 w-full max-w-[480px] px-6'>
            <span className='text-[#005CFF] text-xl font-bold'>{dados.name}</span>
            <p className='text-[#000000] text-sm font-light break-words'>
              {dados.bio}
            </p>
          </div>
        </div>
      ) : (
        <div className='pl-16 text-center w-full'>
          <p className='text-[#FF0000] text-lg font-normal w-[500px]'>
            Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente
          </p>
        </div>
      )}
    </div>
  )
}

export default InfoUser
