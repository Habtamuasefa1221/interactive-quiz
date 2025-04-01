
const quizData = {
    mathematics: [
        {
            question: "What is the value of pi?",
            choices: ["3.14", "2.71", "1.61", "4.0"],
            correctAnswer: "3.14"
        },
        {
            question: "Solve for x: 2x + 5 = 11",
            choices: ["2", "3", "4", "5"],
            correctAnswer: "3"
        }
        // Add more mathematics questions
    ],
    english: [
        {
            question: "Tree is to Leaf as Flower is to:",
            choices: ["Petal", "Stem", "Root", "Trunk"],
            correctAnswer: "Petal"
        },
        {
            question: "Ocean is to Wave as Desert is to:",
            choices: ["Heat", "Sand", "Dune", "Mirage"],
            correctAnswer: "Sand"
        },
        {
            question: "Actor is to Film as Painter is to:",
            choices: ["Canvas", "Gallery", "Photography", "Sculpture"],
            correctAnswer: "Canvas"
        },
        {
            question: "Bird is to Nest as Bear is to:",
            choices: ["Cave", "Tree", "Sea", "Den"],
            correctAnswer: "Den"
        },
        {
            question: "Teacher is to Classroom as Doctor is to:",
            choices: ["Patient", "Hospital", "Medicine", "School"],
            correctAnswer: "Hospital"
        },
        {
            question: "Fire is to Flame as Water is to:",
            choices: ["Ice", "Flow", "Vapor", "Fountain"],
            correctAnswer: "Vapor"
        },
        {
            question: "Foot is to Stride as Hand is to:",
            choices: ["Grip", "Finger", "Wave", "Palm"],
            correctAnswer: "Grip"
        },
        {
            question: "Book is to Read as Music is to:",
            choices: ["Listen", "Play", "Dance", "Sing"],
            correctAnswer: "Listen"
        },
        {
            question: "Cat is to Feline as Dog is to:",
            choices: ["Canine", "Mammal", "Pet", "Animal"],
            correctAnswer: "Canine"
        },
        {
            question: "Engine is to Car as Heart is to:",
            choices: ["Blood", "Body", "Pump", "Life"],
            correctAnswer: "Body"
        },
        {
            question: "King is to Crown as Queen is to:",
            choices: ["King", "Scepter", "Throne", "Diadem"],
            correctAnswer: "Diadem"
        },
        {
            question: "Sun is to Day as Moon is to:",
            choices: ["Night", "Sky", "Darkness", "Star"],
            correctAnswer: "Night"
        },
        {
            question: "Window is to House as Door is to:",
            choices: ["Wall", "Building", "Room", "Entrance"],
            correctAnswer: "Entrance"
        },
        {
            question: "Pencil is to Write as Eraser is to:",
            choices: ["Delete", "Correct", "Scribble", "Text"],
            correctAnswer: "Correct"
        },
        {
            question: "Mountain is to Peak as River is to:",
            choices: ["Flow", "Bank", "Source", "Delta"],
            correctAnswer: "Delta"
        }
        
    ],
    biology: [
        {
            question: "What is the combination of biology and technology called?",
            choices: ["Biotechnology", "Biochemistry", "Biophysics", "Bioinformatics"],
            correctAnswer: "Biotechnology"
        },
        {
            question: "What is the function of a digital thermometer?",
            choices: ["Measures body fat", "Measures body temperature", "Detects HIV", "Measures blood sugar level"],
            correctAnswer: "Measures body temperature"
        },
        {
            question: "Which of the following is an example of a technology that imitates nature?",
            choices: ["Bullet train design", "Building design", "Robotic arm", "All of the above"],
            correctAnswer: "All of the above"
        },
        {
            question: "What is a negative impact of technology on the environment?",
            choices: ["Industrial emissions polluting air and water", "Increased food security", "Improved health and longevity", "Better supply of energy and clean water"],
            correctAnswer: "Industrial emissions polluting air and water"
        },
        {
            question: "What is an ethical issue in biology?",
            choices: ["Using biological discoveries for human well-being", "The impacts of technology on society", "The impacts of biology on society", "Studying the uses of technological tools"],
            correctAnswer: "The impacts of biology on society"
        },
        {
            question: "What is the study of the distribution of species along with geographic ecosystems through geological periods?",
            choices: ["Bioinformatics", "Biogeographical information", "Biomedical studies", "Biophysical studies"],
            correctAnswer: "Biogeographical information"
        },
        {
            question: "What does the ethical treatment of animals in experiments involve?",
            choices: ["Harming animals for scientific research", "Exposing animals to rigorous experiments that may cause injury", "Reducing the number of animals used, refining experiments to reduce suffering, and replacing animals with alternative techniques", "Ignoring the pain and stress experienced by animals"],
            correctAnswer: "Reducing the number of animals used, refining experiments to reduce suffering, and replacing animals with alternative techniques"
        },
        {
            question: "What is the purpose of Informed Consent?",
            choices: ["To ensure patients are aware of the potential risks and benefits of a treatment", "To allow researchers to conduct experiments without patient knowledge", "To commercialize human organs", "To manipulate basic biological organ systems"],
            correctAnswer: "To ensure patients are aware of the potential risks and benefits of a treatment"
        },
        {
            question: "What are the characteristics of animals?",
            choices: ["Eukaryotic, multicellular, and heterotrophic", "Autotrophic and unicellular", "Prokaryotic and multicellular", "Heterotrophic and unicellular"],
            correctAnswer: "Eukaryotic, multicellular, and heterotrophic"
        },
        {
            question: "What are the two major groups that animals can be categorized into?",
            choices: ["Homeothermic and poikilothermic", "Warm-blooded and cold-blooded", "Vertebrates and invertebrates", "Mammals and birds"],
            correctAnswer: "Vertebrates and invertebrates"
        },
        {
            question: "What is the process that regulates the osmotic pressure of fluids and electrolytic balance in organisms?",
            choices: ["Thermoregulation", "Osmoregulation", "Blood sugar regulation", "Homeostasis"],
            correctAnswer: "Osmoregulation"
        },
        {
            question: "What are the types of responses or operant behavior identified by Skinner?",
            choices: ["Neutral operants, reinforcers, and punishers", "Positive and negative reinforcement", "Sensitization and habituation", "Insight learning"],
            correctAnswer: "Neutral operants, reinforcers, and punishers"
        },
        {
            question: "What is a monohybrid cross?",
            choices: ["A cross between two parents to study the inheritance of a single character from each parent.", "A cross involving two genes", "A cross that yields a 9:3:3:1 phenotypic ratio", "A cross between two parents to study multiple traits"],
            correctAnswer: "A cross between two parents to study the inheritance of a single character from each parent."
        },
        {
            question: "What is the cause of Down syndrome?",
            choices: ["Autosomal dominant", "Autosomal recessive", "Trisomy 21", "Sex-linked inheritance"],
            correctAnswer: "Trisomy 21"
        },
        {
            question: "What is bioinformatics?",
            choices: ["A technology that uses biological systems to develop useful products", "The use of physical devices to gather biological information", "A scientific discipline involving computer technology to collect, store, analyze, and disseminate biological data", "The study of the distribution of species along with geographic ecosystems"],
            correctAnswer: "A scientific discipline involving computer technology to collect, store, analyze, and disseminate biological data"
        }
                
    ],
  physics: [
    {
        question: "What is the concept of heat?",
        choices: ["A form of energy", "A measure of temperature", "The degree of hotness", "The movement of molecules"],
        correctAnswer: "A form of energy"
    },
    {
        question: "Which of the following is NOT a mechanism of heat transfer?",
        choices: ["Conduction", "Convection", "Radiation", "Induction"],
        correctAnswer: "Induction"
    },
    {
        question: "What is the heat required to change a unit mass of a substance from solid to liquid called?",
        choices: ["Specific heat", "Latent heat of fusion", "Latent heat of vaporization", "Thermal capacity"],
        correctAnswer: "Latent heat of fusion"
    },
    {
        question: "What is the process of measuring the quantity of heat exchanged between substances?",
        choices: ["Thermometry", "Calorimetry", "Heat transfer", "Thermodynamics"],
        correctAnswer: "Calorimetry"
    },
    {
        question: "What is the term for heat absorbed to convert a unit mass of a substance from solid to liquid, leaving the temperature of the system unaltered?",
        choices: ["Latent heat of vaporization", "Latent heat of fusion", "Specific heat", "Heat capacity"],
        correctAnswer: "Latent heat of fusion"
    },
    {
        question: "What is a phase diagram?",
        choices: ["A graph showing temperature changes during heating", "A chart of specific heat capacities", "A graphical representation of the physical states of a substance under different conditions", "A device used to measure heat"],
        correctAnswer: "A graphical representation of the physical states of a substance under different conditions"
    },
    {
        question: "What is the significance of the triple point in a phase diagram?",
        choices: ["It represents the critical temperature.", "It indicates the boiling point.", "It shows the point where all phases of matter coexist at equilibrium.", "It marks the freezing point."],
        correctAnswer: "It shows the point where all phases of matter coexist at equilibrium."
    },
    {
        question: "What happens at the critical point in a phase diagram?",
        choices: ["Solid and liquid phases are in equilibrium.", "Liquid and gas phases merge into a single phase.", "All three phases coexist.", "The substance transitions directly from solid to gas."],
        correctAnswer: "Liquid and gas phases merge into a single phase."
    },
    {
        question: "What is the law of calorimetry for an isolated system?",
        choices: ["Heat gained equals heat lost.", "Heat always flows from cold to hot.", "Total heat remains constant.", "No heat is exchanged."],
        correctAnswer: "Heat gained equals heat lost."
    },
    {
        question: "Which of the following is a device used to measure specific heat capacity?",
        choices: ["Thermometer", "Barometer", "Calorimeter", "Voltmeter"],
        correctAnswer: "Calorimeter"
    },
    {
        question: "What is the condition for net heat flow between two places?",
        choices: ["They must be in thermal equilibrium.", "There must be a temperature difference.", "A heat-conducting material must be present.", "The objects must be in direct contact."],
        correctAnswer: "There must be a temperature difference."
    },
    {
        question: "In which direction does heat spontaneously flow?",
        choices: ["From cold to hot", "From hot to cold", "From areas of low pressure to high pressure", "From high density to low density"],
        correctAnswer: "From hot to cold"
    },
    {
        question: "What is the relationship between temperature and internal energy in a confined gas?",
        choices: ["Internal energy is independent of temperature.", "Internal energy decreases as temperature increases.", "Internal energy is solely dependent on temperature.", "Internal energy increases as temperature decreases."],
        correctAnswer: "Internal energy is solely dependent on temperature."
    },
    {
        question: "What is latent heat of vaporization?",
        choices: ["The heat required to melt a solid.", "The heat required to change a liquid to a gas.", "The heat required to raise the temperature of a liquid.", "The heat released when a gas condenses to a liquid."],
        correctAnswer: "The heat required to change a liquid to a gas."
    },
    {
        question: "What is the term for the amount of heat absorbed to change a unit mass of liquid to gas?",
        choices: ["Latent heat of fusion", "Specific heat capacity", "Latent heat of vaporization", "Thermal expansion coefficient"],
        correctAnswer: "Latent heat of vaporization"
    }
        
  ],
  chemistry: [
    {
        question: "What is the study of the rates and mechanisms of chemical reactions called?",
        choices: ["Chemical equilibrium", "Thermodynamics", "Chemical kinetics", "Organic chemistry"],
        correctAnswer: "Chemical kinetics"
    },
    {
        question: "What must atoms, molecules, or ions undergo for a chemical reaction to occur?",
        choices: ["Heating", "Effective collisions", "Cooling", "Neutralization"],
        correctAnswer: "Effective collisions"
    },
    {
        question: "How does higher activation energy affect the rate of a chemical reaction?",
        choices: ["Increases the reaction rate", "Decreases the reaction rate", "Has no effect on the reaction rate", "Stabilizes the reaction"],
        correctAnswer: "Decreases the reaction rate"
    },
    {
        question: "What generally happens to reaction rates as temperature increases?",
        choices: ["Reaction rates decrease", "Reaction rates remain constant", "Reaction rates increase", "Reaction rates fluctuate"],
        correctAnswer: "Reaction rates increase"
    },
    {
        question: "How is reaction rate expressed?",
        choices: ["As the total change in reactants or products", "As the change in concentration of a reactant or product per unit time", "As the initial concentration of reactants", "As the final concentration of products"],
        correctAnswer: "As the change in concentration of a reactant or product per unit time"
    },
    {
        question: "How are reaction rates typically determined?",
        choices: ["Theoretically", "Experimentally", "By using balanced equations", "By calculating reactant masses"],
        correctAnswer: "Experimentally"
    },
    {
        question: "Which of the following factors influences reaction rates?",
        choices: ["Concentration of reactants", "Temperature", "Catalysts", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the rate expression for the reaction I⁻(aq) + OCl⁻(aq) → Cl⁻(aq) + OI⁻(aq)?",
        choices: ["Rate = Δ[I⁻]/Δt", "Rate = -Δ[OCl⁻]/Δt", "Rate = Δ[Cl⁻]/Δt", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the effect of increasing the amount of air used in the burning of charcoal?",
        choices: ["Decreases the burning rate", "Increases the burning rate", "Does not affect the burning rate", "Stops the burning"],
        correctAnswer: "Increases the burning rate"
    },
    {
        question: "How does increasing temperature affect the dissolution of sugar crystals in water?",
        choices: ["Sugar crystals dissolve more easily in cold water", "Sugar crystals dissolve more easily in hot water", "Temperature has no effect on dissolution", "Sugar crystals do not dissolve"],
        correctAnswer: "Sugar crystals dissolve more easily in hot water"
    },
    {
        question: "Why does powdered sugar dissolve more easily than sugar crystals?",
        choices: ["Powdered sugar has less surface area", "Powdered sugar has more surface area", "The crystal form affects the solubility", "The type of sugar changes"],
        correctAnswer: "Powdered sugar has more surface area"
    },
    {
        question: "What is a substance that can catalyze a reaction?",
        choices: ["It speeds up the reaction", "It has no effect on the reaction", "It slows down the reaction", "It can either speed up or slow down the reaction"],
        correctAnswer: "It speeds up the reaction"
    },
    {
        question: "What are biochemical catalysts called?",
        choices: ["Enzymes", "Inhibitors", "Acids", "Bases"],
        correctAnswer: "Enzymes"
    },
    {
        question: "Which type of catalyst exists in a different state from the reactants?",
        choices: ["Homogeneous catalyst", "Heterogeneous catalyst", "Enzyme catalyst", "Biochemical catalyst"],
        correctAnswer: "Heterogeneous catalyst"
    },
    {
        question: "What is the role of a catalyst in a chemical reaction?",
        choices: ["It increases the activation energy", "It lowers the activation energy", "It changes the equilibrium of the reaction", "It increases the reaction enthalpy"],
        correctAnswer: "It lowers the activation energy"
    }
    
  ],
  webdev: [
    {
        question: "What is the importance of using strong passwords and changing them regularly?",
        choices: ["To make it easier to remember passwords", "To enhance the speed of typing", "To protect against unauthorized access", "To simplify online activities"],
        correctAnswer: "To protect against unauthorized access"
    },
    {
        question: "What is the benefit of using two-factor authentication (2FA)?",
        choices: ["It speeds up the login process.", "It adds an extra layer of security.", "It reduces the need for passwords.", "It automatically fills in passwords."],
        correctAnswer: "It adds an extra layer of security."
    },
    {
        question: "Why are regular data backups important for data protection?",
        choices: ["To increase storage space", "To organize files", "To recover data in case of loss or damage", "To share data more easily"],
        correctAnswer: "To recover data in case of loss or damage"
    },
    {
        question: "What is a key practice for protecting personal information on social media?",
        choices: ["Sharing personal details widely", "Posting frequently without considering privacy", "Adjusting privacy settings to control who sees your information", "Accepting friend requests from unknown people"],
        correctAnswer: "Adjusting privacy settings to control who sees your information"
    },
    {
        question: "What do regular updates fix in software?",
        choices: ["Only improve software performance", "Security vulnerabilities", "Change the user interface", "Add more features"],
        correctAnswer: "Security vulnerabilities"
    },
    {
        question: "What does privacy involve regarding personal information and data?",
        choices: ["Sharing it with everyone", "Controlling who has access to it and how it is used", "Making it publicly available", "Selling it for profit"],
        correctAnswer: "Controlling who has access to it and how it is used"
    },
    {
        question: "What are key components of information that needs protection?",
        choices: ["Only usernames", "Usernames and account credentials", "Personal information (e.g., name, contact details)", "Only account credentials"],
        correctAnswer: "Personal information (e.g., name, contact details)"
    },
    {
        question: "What is malware?",
        choices: ["Software that improves computer performance", "Malicious software designed to damage files or steal information", "Any software downloaded from the internet", "Software used for playing games"],
        correctAnswer: "Malicious software designed to damage files or steal information"
    },
    {
        question: "How does a virus spread?",
        choices: ["Automatically through networks", "By self-replicating", "Requires user action to spread", "By improving computer operations"],
        correctAnswer: "Requires user action to spread"
    },
    {
        question: "What is the primary characteristic of a worm?",
        choices: ["It infects computer files.", "It requires user action to spread.", "It is self-replicating", "It steals personal information."],
        correctAnswer: "It is self-replicating"
    },
    {
        question: "What does phishing involve?",
        choices: ["Legitimate emails requesting sensitive information", "Fraudulent emails appearing to come from legitimate sources, requesting sensitive information", "Emails that offer discounts and promotions", "Emails that warn about computer viruses"],
        correctAnswer: "Fraudulent emails appearing to come from legitimate sources, requesting sensitive information"
    },
    {
        question: "How can you recognize phishing emails?",
        choices: ["By their professional appearance", "By checking for suspicious links and spelling errors", "By the sender's name", "By the urgency of the message"],
        correctAnswer: "By checking for suspicious links and spelling errors"
    },
    {
        question: "What is the purpose of using strong passwords?",
        choices: ["To make them easy to guess", "To enhance typing speed", "To protect against unauthorized access", "To simplify online activities"],
        correctAnswer: "To protect against unauthorized access"
    },
    {
        question: "What is the role of regular data backups in data protection?",
        choices: ["To increase storage space", "To organize files", "To enable data recovery in case of loss", "To facilitate easier data sharing"],
        correctAnswer: "To enable data recovery in case of loss"
    },
    {
        question: "What is a key recommendation for protecting personal information on social media?",
        choices: ["Freely sharing personal details", "Frequently posting without privacy considerations", "Adjusting privacy settings to manage information visibility", "Accepting friend requests from unknown individuals"],
        correctAnswer: "Adjusting privacy settings to manage information visibility"
    }
        
  ],
  agriculture: [
    {
        question: "What is a key factor in dairy farm management?",
        choices: ["Soil fertility", "Feed supply", "Water availability", "Market prices"],
        correctAnswer: "Feed supply"
    },
    {
        question: "Why is feeding management important in dairy cattle production?",
        choices: ["It determines the color of milk.", "It influences the health and productivity of dairy cattle.", "It has no impact on milk production costs.", "It only affects the size of the cattle."],
        correctAnswer: "It influences the health and productivity of dairy cattle."
    },
    {
        question: "What percentage of milk production cost does feed constitute?",
        choices: ["20-30%", "40-50%", "60-70%", "80-90%"],
        correctAnswer: "60-70%"
    },
    {
        question: "What are the two main types of feed for dairy cattle?",
        choices: ["Grains and legumes", "Roughage and concentrates", "Vitamins and minerals", "Fresh grass and silage"],
        correctAnswer: "Roughage and concentrates"
    },
    {
        question: "Which of the following is an example of roughage?",
        choices: ["Hay", "Corn", "Soybean meal", "Molasses"],
        correctAnswer: "Hay"
    },
    {
        question: "What do concentrates primarily contain?",
        choices: ["High fiber", "Low energy", "High-energy feeds and protein", "Only vitamins"],
        correctAnswer: "High-energy feeds and protein"
    },
    {
        question: "Which of the following is NOT a characteristic used for dairy cow selection?",
        choices: ["Physical characteristics", "Performance records", "Disease freedom", "Coat color preference"],
        correctAnswer: "Coat color preference"
    },
    {
        question: "What do performance records for dairy cattle include?",
        choices: ["Milk yield", "Milk composition", "Feeding efficiency", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Which of the following diseases is NOT a contagious reproductive disease in cattle?",
        choices: ["Tuberculosis", "Brucellosis", "Mastitis", "Bloat"],
        correctAnswer: "Bloat"
    },
    {
        question: "What is essential for maximizing economic returns in dairy farming?",
        choices: ["High milk prices", "Minimizing disease problems", "Large farm size", "Government subsidies"],
        correctAnswer: "Minimizing disease problems"
    },
    {
        question: "Which of the following is NOT a common reproductive disease in dairy cattle?",
        choices: ["Dystocia", "Retention of placenta", "Vaginal prolapses", "Acidosis"],
        correctAnswer: "Acidosis"
    },
    {
        question: "How can many diseases in dairy cattle be prevented?",
        choices: ["Good herd management", "Proper nutrition", "Housing and vaccinations", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the primary focus of dairy cattle housing management?",
        choices: ["Maximizing space utilization", "Ensuring animal comfort and health", "Minimizing labor costs", "Using locally available materials"],
        correctAnswer: "Ensuring animal comfort and health"
    },
    {
        question: "What should an adequate ventilation system in a farm animal house achieve?",
        choices: ["Maintain high humidity", "Remove noxious and toxic gases", "Increase temperature", "Reduce light exposure"],
        correctAnswer: "Remove noxious and toxic gases"
    },
    {
        question: "What is the minimum recommended height for a farm animal house to allow sufficient air movement?",
        choices: ["2 meters", "3 meters", "4 meters", "5 meters"],
        correctAnswer: "3 meters"
    }
    
  ],
  ict: [
      {
          question: "What does ICT stand for?",
          choices: ["Information and Communication Technology", "Internet and Computer Technology", "Integrated Circuit Technology", "International Communication Technology"],
          correctAnswer: "Information and Communication Technology"
      },
      {
          question: "What is a computer program that can replicate itself and spread to other computers?",
          choices: ["Virus", "Worm", "Trojan horse", "Spyware"],
          correctAnswer: "Virus"
      }
  ]
    // Add more subjects and questions
  };
  
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const nextBtn = document.getElementById("next-btn");
  const resultsEl = document.getElementById("results");
  const subjectButtons = document.querySelectorAll(".subject-card");
  const modal = document.getElementById("quizModal");
  const closeBtn = document.querySelector(".close");
  
  let currentQuestion = 0;
  let score = 0;
  let selectedSubject = null;
  let questionNumber = 1; // Initialize question number
  
  function loadQuestion() {
      if (!selectedSubject) {
          questionEl.innerText = "Please select a subject.";
          choicesEl.innerHTML = "";
          nextBtn.style.display = "none";
          return;
      }
  
      const questionData = quizData[selectedSubject][currentQuestion];
      questionEl.innerText = `Question ${questionNumber}: ${questionData.question}`; //Add question number
  
      choicesEl.innerHTML = "";
      const choiceLetters = ["A", "B", "C", "D"];  // Array of choice letters
      questionData.choices.forEach((choice, index) => {
          const button = document.createElement("button");
          button.innerText = `${choiceLetters[index]}. ${choice}`; // Add choice letter
          button.addEventListener("click", checkAnswer);
          choicesEl.appendChild(button);
      });
      nextBtn.style.display = "inline-block";
  }
  
  function checkAnswer(e) {
      const selectedAnswer = e.target.innerText.substring(3); // Extract the answer text
      const correctAnswer = quizData[selectedSubject][currentQuestion].correctAnswer;
  
      if (selectedAnswer === correctAnswer) {
          score++;
          e.target.classList.add("correct");
      } else {
          e.target.classList.add("incorrect");
      }
      disableChoices();
  }
  
  function disableChoices() {
      const buttons = document.querySelectorAll("#choices button");
      buttons.forEach(button => {
          button.disabled = true;
      });
  }
  
  function loadNextQuestion() {
      currentQuestion++;
      questionNumber++;  // Increment question number
  
      if (currentQuestion < quizData[selectedSubject].length) {
          loadQuestion();
      } else {
          showResults();
      }
  }
  
  function showResults() {
      const quizEl = document.getElementById("quiz");
      quizEl.style.display = "none";
      nextBtn.style.display = "none";
      resultsEl.innerText = `You scored ${score} out of ${quizData[selectedSubject].length} in ${selectedSubject}!`;
      resultsEl.style.display = "block";
      questionNumber = 1; // Reset for next quiz
  }
  
  // Event Listeners for Subject Buttons
  subjectButtons.forEach(button => {
      button.addEventListener("click", function() {
          selectedSubject = this.dataset.subject;
          currentQuestion = 0;
          score = 0;
          questionNumber = 1; // Reset question number for new subject
          loadQuestion();
          resultsEl.style.display = "none"; // Hide results
          document.getElementById("quiz").style.display = "block"; // Show quiz
          document.getElementById("next-btn").style.display = "block";
          modal.style.display = "block"; // Show the modal
      });
  });
  
  // Event Listener for Next button
  nextBtn.addEventListener("click", loadNextQuestion);
  
  // Event Listener for Close button
  closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
  });
  
  // Event Listener for closing the modal by clicking outside
  window.addEventListener("click", function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });
  
  // Initialization
  loadQuestion();
  