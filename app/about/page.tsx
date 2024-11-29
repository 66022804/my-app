import Head from 'next/head';

const Resume: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Professional Resume</title>
        <meta name="description" content="Professional Resume Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-pink-400 to-yellow-600 text-gray-900 py-6">
        <h1 className="text-4xl font-bold text-center">FRONT-END DEVELOPER</h1>
        
      </header>

      <main className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {/* Left Column */}
        <aside className="lg:col-span-1 bg-gray-800 p-6 rounded-lg shadow">
          {/* Profile Section */}
          <section className="text-center mb-10">
            <img
              src="/B.jpg"
              alt="Profile Picture"
              className="w-40 h-40 rounded-full mx-auto  m-6 border-4 border-pink-300"
            />
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">PHONSINEE KITCHAAUM</h2>
            <p className="text-gray-400">Passionate </p>
          </section>

          {/* Contact Section */} 
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-pink-400">Contact</h3>
            <p>Email: <a href="mailto:youremail@example.com" className="text-pink-300 underline">66022804@up.ac.th</a></p>
            <p>facebook: <a href="https://www.facebook.com/profile.php?id=100012835871553" className="text-pink-300 underline">Phonsinee Kitchaaum</a></p>
            <p>instagram: <a href="https://www.instagram.com/gift._028/" className="text-pink-300 underline">gift._028</a></p>
            <p>github: <a href="https://github.com/66022804" className="text-pink-200 underline">6622804</a></p>
            
            
          </section>

          {/* Skills Section */}
          <section>
            <h3 className="text-xl font-semibold text-pink-400">Skills</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>HTML</li>
              <li>TailwindCSS</li>
              <li>Next.js</li>
              <li>UI/UX Designer</li>
            </ul>
          </section>
        </aside>

        {/* Right Column */}
        <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow">
          {/* Experience Section */}
          <section className="mb-6">
            <h3 className="text-2xl font-semibold text-sky-300 mb-4">About me</h3>
            <div className="mb-4">
              <h4 className="text-lg font-medium">Hello, my name is Ms. Phonsinee Kitchaaum. My nickname is Gift. I am currently studying at Phayao University, Faculty of Information and Communication Technology, Software Engineering Program, 2nd year.</h4>
              <p className="text-sm text-gray-400">11 November 2024 </p>
              
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-6">
            <h3 className="text-2xl font-semibold text-sky-300 mb-4">Projects</h3>
            <div className="mb-4">
              <h4 className="text-lg font-medium">Coding website </h4>
              <p>
               A website for practicing programming, with an answer checking system, supporting multiple languages, and won first place in the 2nd year project competition within the department. It is a project in the subject of databases and software processes.
                
              </p>
            </div>
            <div>
              
              <h4 className="text-lg font-medium">Feature</h4>
              <p>
                - Can practice doing questions</p>
              <p>- Have ranking of scores in doing questions</p>  
              <p>- Have profile showing doing questions</p>  
              <p>- Can create/edit/delete/view questions</p>  
              <p>- Can create test cases for questions in both random and correct answer types and write code answers</p>  
              <p>- Can manage various topics</p>  
              <p>- Can manage admins (add/delete/edit)</p>  
              <p>- Can send notifications to users (individually/groups/everyone)</p>  
               <p>- Can save questions of interest</p> 

               <p>- Answer checking system supports python 3, python 2, c, c++, c#, golang, php, rust, lua, java, javascript, typescript</p> 
               <p>- Have LLM system (Gemini-1.5-flash) to help check, write prompts to check conditions</p> 
              <p>- Can search for questions to use (lexical + semantic)</p>  
              
            </div>

            <div className="mt-4">
              <p>coding-web-frontend <a href="https://github.com/korarit/coding-web-frontend.git" className="text-yellow-200 underline">LINK</a></p>
              <p>Figma Coding Website Project  <a href="https://www.figma.com/design/cPyGfpF9ZkJYBGb6I80h0O/UX%2FUI-coding-web-project" className="text-yellow-200 underline">LINK</a></p>
            </div>
          </section>

         
        </div>
      </main>

      <footer className="bg-gray-900 text-center p-4">
        <p className="text-gray-500">&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resume;