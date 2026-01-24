export type blogsInfoType = {
    id: number;
    title: string;
    name: string;
    bio: string;
    types: string[];
    createdAt: string
    description: string;
    image: string;
    overview: {
      [key:string]: string[];
    };
  };
  export const blogsInfo: blogsInfoType[] = [
    {
      id: 1,
      title: "Who am i?",
      name: "life",
      bio: "Resume AI: Enhance resumes using AI",
      types: ["Life","Personal" ],
      createdAt:"December 29, 2025",
      description:
        "A Personal Journey Built Around Coding Challenges, Gaming Passion, and the Strength I Draw from Family as I Grow and Evolve.",
      image: "/blogs/personal.png",
  
      overview: {
        "Personal Life": [
        "My name is Kunal Kumar Soni, and I live in Bokaro, Jharkhand. I come from a small and supportive family consisting of my mother, my elder sister, and me.",
         
        "Since childhood, I have been deeply passionate about gaming, which first sparked my curiosity about computers and technology. Being a good student, I always balanced my studies with my interests. This early exposure to gaming eventually evolved into a professional dream: to become a software developer.",

        "Today, I am consistently learning and working hard to build a successful career in tech. With the support of my family and my maternal grandfather (Nana ji), I am focused on my goals and ready to make them proud through patience and consistency."],

        "Coding Journey": 
          ["From the beginning, I have always been very interested in mobile phones and computers. In late 2021, I started working in photo editing and design, which helped me gain practical experience and confidence. With the money I earned, I bought my own PC.",
          
          "After some time, I realized that while design was good, I wanted something more challenging and meaningful for my career. While researching different options, I discovered full-stack development, and it immediately caught my interest. That day, I made a clear decision — I wanted to become a developer.",
          
          "My coding journey officially started in 2023, and it is still ongoing. Every day, I continue to learn, improve, and grow in this field. My goal is to build something impactful and achieve something meaningful in the world of technology."],

        "Gaming": 
          ["Gaming has always been a very important part of my life. Since childhood, I have played many computer and mobile games, and I truly enjoyed every moment of it. Games were not just entertainment for me; they were something I was deeply connected to.",
            
          "In 2018, when PUBG Mobile was released, it became a major turning point in my gaming journey. I became completely dedicated to the game. I practiced daily for 2–3 hours, played competitive matches, and constantly tried to improve my skills. During the lockdown period, I spent a lot of time gaming and seriously wanted to do well in this field.",

          "In 2019, I received a POCO F1, which was a very powerful phone at that time. It helped me play better, and I enjoyed gaming even more. However, as time passed, family responsibilities and issues increased. Slowly, I stopped seeing a future in gaming, and in 2021, I made the difficult decision to step away from it. I still play occasionally, but my path eventually led me in a different direction.",

          "Interestingly, I am still using the same POCO F1 today — a small reminder of how important gaming once was in shaping my journey."
        
        ],
      },
      
    },
    {
      id: 2,
      title: "How i learn new tools?",
      name: "learning",
      bio: "ShopKaro: Simple and fast online shopping",
      types: ["Learning","Growth"],
      createdAt:"January 22, 2026",
      description:
        "My Thoughtful and Practical Approach to Learning, Understanding, and Mastering New Tools Over Time.",
  
        image: "/blogs/newtools.png",
        overview: {
          "Build basics fast": [
            "I begin with one or two simple tutorials to quickly understand the fundamentals. Instead of spending time on long courses, I move forward once the core concepts are clear."
          ],
        
          "Shift early to real projects": [
            "After grasping the basics, I focus on building real-world projects. This hands-on approach helps me learn faster and understand how things work in practical scenarios."
          ],
        
          "Trust official documentation": [
            "I rely heavily on official documentation because it provides the most accurate and up-to-date information, and helps me develop strong reading and research habits."
          ],
        
          "Repeat to gain mastery": [
            "I practice the same tool or concept multiple times—often 10 to 15 times—across different projects. I avoid overusing AI so I can strengthen my own problem-solving skills."
          ],
        
          "Learn by implementation": [
            "My learning rule is simple: if I can implement something confidently in a real project, I know I’ve truly learned it."
          ]
        }
     
    },
  ];
  