import ProfilePic from "../assets/pic2.jpg"

const Hero = () => {
  return (
   <div className="pb-4 lg:mb-36">
     <div className="flex flex-wrap lg:flex-row-reverse">
      <div className="w-full lg:w-1/2">
         <div className= "flex justify-center lg:p-8">
            <img src= {ProfilePic}  alt="Nishat Jahan" className="border border-stone-900 rounded-3xl"/>

         </div>
      </div>
      <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
             <h2 className="pb-2 text-4xl tracking-tighter
             lg:text-8xl"> Nishat Jahan</h2>
             <span className="bg-gradient-to-r from-stone-300
             to-stone-600 bg-clip-text text-3xl tracking-tight
             text-transparent">Full Stack Developer</span>
             <p className="my-2 max-w-lg py-6 text-xl leading-relaxed
             tracking-tighter">
                Currently pursuing a Master’s in Data-Driven IT Management, 
                I’m building expertise in translating data insights 
                into actionable strategies to drive IT innovation and efficiency.
                 With a foundation in software development, complemented by a 
                 Bachelor’s degree and hands-on experience at IKEA IT, 
                 I bring a blend of technical skills and practical industry 
                 know-how. My journey has equipped me with a strong problem-solving 
                 mindset and a deep interest in aligning IT solutions with business 
                 needs. Ready to make an impact, I’m eager to contribute to a forward- thinking 
                 trainee program where I can apply my data-driven approach and collaborative spirit.

             </p>
             <a href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white rounded-full p-4 text-sm
                text-stone-800 mb-10">
                    Download Resume
                </a>

          </div>
      </div>
     </div>

   </div>
  )
}

export default Hero