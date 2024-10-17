import React from 'react'
import Image from 'next/image';

const NFTCard = () => {
  return (
    <div>
      <div className="w-[350px] h-[596px] card-bg-color rounded-lg flex flex-col items-center font-outfit" >
      <div className="relative w-[278px] h-[278px] mt-7 mb-2">
    {/* Image */}
    <Image
      className="rounded-lg"
      src="/frontend-mentor-nft-preview-card-component/images/image-equilibrium.jpg"
      alt="NFT image"
      width={278}
      height={278}
    />

    {/* Color Overlay (Visible on hover) */}
    <div className="absolute inset-0 bg-cyan-500 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg z-10 flex items-center justify-center">
      <Image src="/frontend-mentor-nft-preview-card-component/images/icon-view.svg" alt="View Icon" width={40} height={40} /></div>

  </div>
          
          
          
          <div className="w-[278px]">
            <p className="text-white text-2xl mt-4 mb-6 font-normal"><a className="hover:text-[#00FFF8]" href='#'> Equilibrium #3429</a></p>
 

              <p className="text-[#8BACD9] text-l font-extralight mb-6">Our Equilibrium collection promotes balance and calm.</p>
              <div className="flex w-full">
              <div className="flex w-full justify-start items-center">
                  <Image className='mr-2' src='/frontend-mentor-nft-preview-card-component/public/images/icon-ethereum.svg' width={11} height={18} alt='ethereum icon'/>
                  <div className="flex text-[#00FFF8] w-full"><p>0.041 ETH</p>
              </div>
              <div className="flex w-full justify-end items-center">
              <Image className='mr-2' src='/frontend-mentor-nft-preview-card-component/public/images/icon-clock.svg' width={17} height={4} alt='clock icon' />
              <p className="text-[#8BACD9] font-extralight">3 days left</p>
              </div>
              </div>
              </div>
              <div>
              <hr className="border-t-2 border-gray-700 my-6" />

              </div>
              <div className="flex items-center">
              <div className="border border-white rounded-full mr-4">
              <Image src='/frontend-mentor-nft-preview-card-component/public/images/image-avatar.png' width={33} height={33} alt='avatar image' />
              </div>
              <p className="text-[#8BACD9] font-extralight mr-1">Creation of</p><p className="text-white font-extralight"><a className="hover:text-[#00FFF8]" href='#'>Jules Wyvern</a></p>
              </div>
  </div>
  </div>

  <div className="mt-3">
    <p className="text-[#8BACD9]">Challenge by <a  href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p>
    <p className="text-[#8BACD9]">Coded by <a className='text-white' href="https://github.com/Ropenfold">Stuart Roper</a>.</p>
  </div>
  </div>
  )
}

export default NFTCard;