import './App.css'

function App() {
  return (
    <div className='min-h-[100lvh] w-full max-w-[100vw] overflow-hidden 
     font-main bg-pale-gray flex flex-col items-center justify-center'>
      <div className='max-w-[1200px] md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-8 md:px-8 flex flex-col items-center gap-8 py-12'>
        <div className='md:col-span-2 lg:col-start-2 md:w-full flex flex-col items-center justify-center w-[340px] rounded-lg px-6 lg:px-10 py-10 lg:py-12 bg-purple-500'>
          <h1 className='text-5xl lg:text-6xl text-center font-medium text-white mb-6'>Social Media <span className=' text-yellow-500'>10x</span> <span className='italic'>Faster</span> with AI</h1>
          <img className='w-48 mb-2' src="/illustration-five-stars.webp" alt="" />
          <p className='text-lg text-yellow-100'>Over 4,000 5-star reviews</p>
        </div>
        <div className='md:col-span-1 lg:col-start-2 md:w-full md:h-full md:overflow-hidden flex flex-col items-center justify-center w-[340px] rounded-lg px-4 lg:px-6 pt-3 pb-4 bg-white'>
          <div className='mb-4 lg:translate-x-14 lg:w-[320px]'>
            <img className='w-full drop-shadow-md' src="/illustration-multiple-platforms.webp" alt="" />
          </div>
          <h2 className='text-black font-medium leading-6 lg:leading-7 tracking-tight text-2xl lg:text-3xl'>Manage multiple accounts and platforms.</h2>
        </div>
        <div className='md:col-span-1 lg:col-start-3 md:w-full flex flex-col w-[340px] overflow-hidden rounded-lg px-4 pt-4 bg-yellow-500'>
          <h2 className='text-black text-2xl lg:text-3xl font-medium leading-6 lg:leading-6 tracking-tight mb-3 lg:mb-0'>Maintain a consistent posting schedule.</h2>
          <div className='w-[220px] lg:translate-y-4 lg:w-[210px]'>
            <img className='w-full lg:translate-x-2 -mb-12' src="/illustration-consistent-schedule.webp" alt="" />
          </div>
        </div>
        <div className='overflow-hidden md:col-span-1 md:col-start-3 lg:col-start-4 md:row-start-1 md:row-span-2 md:w-full md:h-full flex flex-col w-[340px] rounded-lg px-4 lg:px-0 lg:pl-6 py-8 lg:py-10 bg-purple-100'>
          <h2 className='text-black font-medium text-center lg:text-left text-2xl lg:text-3xl tracking-tighter lg:leading-6 mb-5 lg:pr-6'>Schedule to social media.</h2>
          <div className='mb-6 lg:w-[370px]'>
            <img className='w-full ' src="/illustration-schedule-posts.webp" alt="" />
          </div>
          <p className='text-black text-xl font-medium text-center lg:text-left leading-6 lg:leading-5 tracking-tight'>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>
        <div className='md:col-span-2 md:col-start-2 lg:col-start-3 md:w-full flex flex-col md:flex-row items-center justify-center w-[340px] rounded-lg px-6 py-6 bg-purple-500'>
          <img className='w-[230px]  mb-10 md:mb-0' src="/illustration-grow-followers.webp" alt="" />
          <h2 className='text-3xl lg:text-4xl text-center lg:text-left font-medium leading-7 tracking-tight text-white px-6 lg:px-0'>Grow followers with non-stop content.</h2>
        </div>
        <div className='md:col-start-1 lg:col-start-2 md:row-start-3 md:w-full md:h-full flex flex-col w-[340px] rounded-lg px-6 lg:pl-6 lg:pr-4 pt-8 pb-6 bg-white'>
          <h2 className='text-5xl font-medium leading-7 tracking-tight text-black mb-4'>{'>'}56%</h2>
          <h3 className='text-black text-lg lg:text-xl mb-6'>faster audience growth</h3>
          <img className='w-[180px]' src="/illustration-audience-growth.webp" alt="" />
        </div>
        <div className='md:col-span-full lg:row-span-full lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:row-end-4 w-full h-full flex flex-col justify-center md:justify-normal items-center md:flex-row lg:flex-col gap-8'>
          <div className='md:col-span-1 lg:col-start-1 lg:row-start-1 md:w-2/4 md:h-full lg:w-full flex flex-col md:justify-center w-[340px] rounded-lg px-6 lg:px-8 pt-8 pb-6 bg-yellow-100'>
            <h2 className='text-3xl lg:text-4xl font-medium leading-7 lg:leading-8 tracking-tight text-black mb-4'>Create and schedule content <span className='text-purple-500 italic'>quicker.</span></h2>
            <img className='w-[150px]' src="/illustration-create-post.webp" alt="" />
          </div>
          <div className='md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-1 lg:row-end-4 md:w-full lg:h-full flex flex-col md:flex-row lg:flex-col md:items-center md:justify-around w-[340px] overflow-hidden rounded-lg px-6 py-6 lg:pb-10 bg-yellow-500'>
            <h2 className='text-black text-3xl lg:text-4xl font-medium leading-6 lg:leading-8 tracking-tight mb-4 md:mb-0 lg:mb-12 md:mr-4 lg:mr-0 md:text-center lg:text-left md:max-w-64'>Write your content using AI.</h2>
            <div className='w-[220px] lg:w-[250px] lg:pl-5 lg:pr-2'>
              <img className='w-full' src="/illustration-ai-content.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="attribution w-full md:col-span-full">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/JuanMiranda1998">Juan Miranda</a>.
      </div>
    </div>
  )
}

export default App
