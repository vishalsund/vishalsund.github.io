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

                <span className="project-title font-semibold text-lg">LDOS Project</span>

                <span className="project-duration text-dark-200 text-sm">Oct 2025 - Present</span>

              </div>

              <p className="project-description ml-6 text-dark-200 leading-relaxed">

                This project focused on developing a <strong>Low-Drift Oscilloscope System (LDOS)</strong> for ultra-precise sensor readings in high-stability environments. Key responsibilities included firmware development for the data acquisition unit and implementing real-time signal processing algorithms to minimize temperature-induced drift. The system achieved a <strong>95% reduction</strong> in measurement variance compared to commercial alternatives.

              </p>

            </li>


            <li className="project-item">

              <div className="project-header flex justify-between items-center mb-2">

                <span className="project-title font-semibold text-lg">Scientific Machine Learning (SciML)</span>

                <span className="project-duration text-dark-200 text-sm">Oct 2025 - Present</span>

              </div>

              <p className="project-description ml-6 text-dark-200 leading-relaxed">

                Explored the integration of neural networks with physical models (<strong>Physics-Informed Neural Networks - PINNs</strong>) to solve complex partial differential equations. Worked with high-dimensional datasets and optimized model architectures for computational efficiency on HPC clusters, contributing to faster simulation times for fluid dynamics problems.

              </p>

            </li>


            <li className="project-item">

              <div className="project-header flex justify-between items-center mb-2">

                <span className="project-title font-semibold text-lg">Distributed Systems for ML</span>

                <span className="project-duration text-dark-200 text-sm">Oct 2025 - Present</span>

              </div>

              <p className="project-description ml-6 text-dark-200 leading-relaxed">

                Designed and implemented a scalable, fault-tolerant architecture for training large-scale machine learning models across a cluster of GPUs. Utilized frameworks like <strong>PyTorch Distributed</strong> and <strong>Ray</strong> for parallel data loading and gradient synchronization, successfully training a transformer model with over 10 billion parameters.

              </p>

            </li>


            <li className="project-item">

              <div className="project-header flex justify-between items-center mb-2">

                <span className="project-title font-semibold text-lg">Federated Learning</span>

                <span className="project-duration text-dark-200 text-sm">Oct 2025 - Present</span>

              </div>

              <p className="project-description ml-6 text-dark-200 leading-relaxed">

                Conducted research into privacy-preserving machine learning techniques, specifically focusing on <strong>Federated Averaging (FedAvg)</strong> optimization in non-IID data environments. Developed novel aggregation algorithms to mitigate client drift and improve model convergence rate while maintaining strict data localization requirements.

              </p>

            </li>

          </ul>


        </div>


        <div>

          <h2 className="text-2xl font-semibold text-custom-light-text-primary dark:text-custom-dark-text-primary">Experience</h2>

          <div className="p-6 bg-dark-900 rounded-lg">

            <h3 className="text-2xl font-semibold text-custom-light-text-primary dark:text-custom-dark-text-primary">Software Engineer</h3>

            <p className="text-dark-400 mt-1">Akomi AI • May 2025 - July 2025</p>

            <p className="text-dark-200 mt-4">

              Developed and maintained microservices-based applications.

              Implemented CI/CD pipelines and automated deployment processes.

            </p>

          </div>

        </div>

      </div>

    </div>

  )

} 