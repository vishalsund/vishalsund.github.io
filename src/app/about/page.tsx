 import fs from 'fs';       // <-- ADD THIS

import path from 'path';   // <-- ADD THIS


import PhotoCarousel from "@/components/photo-carousel";


// ---

// This function runs on the server to read your folder

// ---

function getPhotoPaths(): string[] {

  try {

    // 1. Get the full path to your public/img/photography folder

    const photoDirectory = path.join(process.cwd(), 'public/img/photography');

   

    // 2. Read all filenames in that folder

    const filenames = fs.readdirSync(photoDirectory);


    // 3. Filter for image files (optional, but good practice)

    const imageFiles = filenames.filter(file =>

      /\.(jpg|jpeg|png|gif|JPG)$/.test(file)

    );


    // 4. Create the public URL path for each image

    return imageFiles.map(filename => `/img/photography/${filename}`);


  } catch (error) {

    console.error("Error reading photo directory:", error);

    return []; // Return an empty array if the folder doesn't exist

  }

}



export default function About() {

  // ---

  // 5. Call the function here. This runs on the server.

  // ---

  const imagePaths = getPhotoPaths(); // <-- ADD THIS


  return (

    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8 text-dark-50">About Me</h1>


      <div className="prose prose-invert max-w-none">

        {/* ... other content ... */}


        <div className="mb-12 text-dark-200 space-y-6">

          <p className="text-xl text-dark-200 leading-relaxed max-w-2xl">

            Hi, I'm Vishal, a Turing Scholar studying CS + Math at UT Austin. I'm interested in machine learning

          </p>

          <h2 className="text-2xl font-semibold text-custom-light-text-primary dark:text-custom-dark-text-primary">
            Photography
          </h2>

         

          {/* ---

            6. Pass the 'imagePaths' array as a prop

          --- */}

          <PhotoCarousel images={imagePaths} /> {/* <-- EDIT THIS LINE */}


          <h2 className="text-2xl font-semibold text-custom-light-text-primary dark:text-custom-dark-text-primary">

            Current Work

          </h2>

          <ul className="project-list space-y-6">

            {/* ... rest of your list items ... */}

            <li className="project-item">

              <div className="project-header flex justify-between items-center mb-2">

                <span className="project-title font-semibold text-lg">Distributed Systems for ML</span>

                <span className="project-duration text-dark-200 text-sm">Sept 2025 - Present</span>

              </div>

              <p className="project-description ml-6 text-dark-200 leading-relaxed">

                Exploring methods to train machine learning models across various, spatially separated and hetergenous nodes, with a focus on low communication distributed training. Expanding work from Google DeepMind's <a href = "https://arxiv.org/abs/2501.18512">Streaming DiLoCo</a> paper to explore heterogenous compute power of nodes to allow for better use of older GPUs.
              </p>

            </li>

            <li className="project-item">

              <div className="project-header flex justify-between items-center mb-2">

                <span className="project-title font-semibold text-lg">LDOS Project</span>

                <span className="project-duration text-dark-200 text-sm">Oct 2025 - Present</span>

              </div>

              <p className="project-description ml-6 text-dark-200 leading-relaxed">

                Developing diffusion models to generate synthetic systems traces for training <a href = "https://ldos.utexas.edu/">Learning Directed Operating Systems</a> (LDOS Project). Improved training and inference efficiency of existing models by utilizing latent diffusion techniques. Working with PhD Donghyun Kim under program Director Aditya Akella on the Synthetic Data Generation research thrust

              </p>

            </li>


            <li className="project-item">

              <div className="project-header flex justify-between items-center mb-2">

                <span className="project-title font-semibold text-lg">Scientific Machine Learning (SciML)</span>

                <span className="project-duration text-dark-200 text-sm">Sept 2025 - Present</span>

              </div>

              <p className="project-description ml-6 text-dark-200 leading-relaxed">

                Working on the Data Assimilation problem with PhDs at the Oden Institute. Comparing various techniques for data assimilation of partial differential equations (PDEs). Some methods include Physics Informed Neural Networks (PINNs), Fourier Neural Operators (FNOs), and Diffusive models (including latent diffusion).

              </p>

            </li>


            <li className="project-item">

              <div className="project-header flex justify-between items-center mb-2">

                <span className="project-title font-semibold text-lg">Federated Learning</span>

                <span className="project-duration text-dark-200 text-sm">Aug 2025 - Present</span>

              </div>

              <p className="project-description ml-6 text-dark-200 leading-relaxed">

                Individually working on implementing many of the ideas from Distributed Low Computing to the Federated Learning space to add a layers of privacy in the distributed training proccess.

              </p>

            </li>

          </ul>


        </div>


        <div>

          <h2 className="text-2xl font-semibold text-custom-light-text-primary dark:text-custom-dark-text-primary">Experience</h2>

          <div className="p-6 bg-dark-900 rounded-lg">

            <h3 className="text-2xl font-semibold text-custom-light-text-primary dark:text-custom-dark-text-primary">Software Engineering Intern</h3>

            <p className="text-dark-400 mt-1">Akomi AI • May 2025 - Aug 2025</p>

            <p className=" ml-6 text-dark-200 mt-4">

              • Collaborated with engineers on the development of AI Agents to automate prior-authorization for clinics
            <br/>• Expanded the scope of a proprietary UI Automation software to integrate with Aetna claims system
            <br/>• Integrated the client’s legacy EMR system to the existing Middleware Layer, primarily using Python
            <br/>• Owned end-to-end feature implementation on the company website using ReactJS, HTML, and CS

            </p>

          </div>

        </div>

      </div>

    </div>

  )

} 