import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    RAG,
    xebialogo,
    threejs,
    sentiment,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "AIML Intern",
      company_name: "Xebia IT Architects",
      icon: xebialogo,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "Designed and implemented a sentiment analysis model using Long Short-Term Memory (LSTM) networks to classify positive and negative tweets leveraging a dataset of 1.6 million tweets",
        "Performed extensive data preprocessing, including tokenization, stopword removal, stemming, and lemmatization, to enhance model performance.",
        "Achieved 90% accuracy on the test set through hyperparameter tuning and evaluated model performance using confusion matrices and ROC curves.",
        "Utilized Python and libraries such as TensorFlow, Keras, NLTK, and Matplotlib for seamless data processing, model training, and evaluation.",
        "Demonstrated strong expertise in machine learning, natural language processing (NLP), and data visualization through this project.",
      ],
    },
    
  ];
  
  
  const projects = [
  {
    name: "Sentiment Analysis Model",
    description:
      "An LSTM-based sentiment analysis model trained on 1.6M tweets to classify sentiment. Includes preprocessing with NLTK, model tuning, and result visualization using confusion matrix and ROC curves.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
    ],
    image: sentiment, // Replace with your image import
    source_code_link: "https://github.com/nikhilcheryala/Xebia-Internship", // Replace with actual repo link
  },
  {
    name: "AI Advocate (Legal Document Analyzer)",
    description:
      "A RAG-based system built with LangChain and HuggingFace to analyze, summarize, and answer legal queries from uploaded PDFs using vector search and a Groq-hosted DeepSeek LLM.",
    tags: [
      { name: "langchain", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "faiss", color: "pink-text-gradient" },
    ],
    image: RAG, // Replace with your image import
    source_code_link: "https://github.com/nikhilcheryala/AI-Advocate---A-RAG-Based-Legal-Reasoning-System", // Replace with actual repo link
  },
  {
    name: "3D Developer Portfolio",
    description:
      "An immersive 3D portfolio website built with React, Three.js, and React Three Fiber. Includes animated 3D sections, interactive components, and responsive design to showcase projects and skills.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: portfolio, // Replace with your image import
    source_code_link: "https://github.com/nikhilcheryala/3D-Portfolio", // Replace with your actual repo
  },
];

  
  export { services, technologies, experiences, projects };