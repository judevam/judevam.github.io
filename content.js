const CONTENT = {

  // ---- Header / Hero ----
  eyebrow: "Project Portfolio",
  name: "Jude Vamenta",
  role: "BS Mechanical Engineering, Minor in Music Engineering",
  tagline: "Tufts University '27.",

  // photo for the homepage.
  photo: "me.JPG",

  status: "Open to internships — Spring 2027",

  // resume — put a PDF
  resumeUrl: "Jude Vamenta Resume Fall 2025.pdf",

  // ---- About ----
  about: `A senior mechanical engineering student working across design, 
  controls, robotics, and mechatronics, with a minor in music engineering 
  focused on electronic instrument desgin.`,

  location: "Somerville, MA",

  // ---- Projects ----
  // Each project's `details` object now supports:
  //   - imagesAfterOverview / imagesAfterApproach / imagesAfterOutcome: arrays of image paths,
  //     each renders as a small photo gallery right after that section. Add as many as you want.
  //   - videos: an array — add as many YouTube/Vimeo links or video filenames as you want.
  //   - images: extra overflow photos that don't belong to a specific section — shown in a
  //     gallery at the very bottom of the page.
  projects: [
    {
      id: "project-one",
      code: "SPEC 01",
      title: "The Chordian",
      year: "2025",
      summary: "An Electronic Accordion. Electronic Musical Instrument Design",
      stack: ["Music", "Sensors", "Electronics", "Manufacturing"],
      thumbnail: "emid/thumb.jpg", // optional: filename (e.g. "project-one-thumb.jpg") or full image URL. Leave "" for no thumbnail.
      externalLink: "https://mma.pages.tufts.edu/emid/", // optional: live demo, GitHub repo, video, etc.
      details: {
        overview: `This project was completed over the fall semester of 2025, through the Electronic Musical Instrument Design course. After spending a few weeks learning about various sensors, software such as MAX MSP & Reason, MIDI, and synthesizers, small groups were formed, each tasked with creating an electronic musical instrument. While the options of what kind of instrument were endless, it was advised to use an arduino to handle sensor reading, MAX to map different sensor values to different MIDI commands, and Reason to handle different synth presets and sounds. The project was split into two parts: the first month to make a prototype and present it to the class to show it’s potential and what could be done to improve it, and the second month to expand and improve on the first prototype (if our professor liked it enough). 
`,
        imagesAfterOverview: ["emid/woodRender.png", "emid/woodButton.jpg",],
        approach: `My group brainstormed and concluded it would be interesting to “extend” or “evolve” an already existing instrument by incorporating electronics to replace mechanisms or how the user would interact with the instrument. We also wanted the user to be able to perform the instrument by themselves, and be able to utilize chords and individual notes at the same time. We proposed the “Chordian”, an electronic accordion. After some early sketches and mock ups, we planned to create our prototype with two main bodies, one responsible for individual notes, and the other for chords. These two bodies would interact with each other through some sort of resistance like a spring to emulate the baffles of a real accordion.

One of the main features of the instrument is the “key box”, a housing that involves 8 metal keys, each with a linear soft potentiometer and a flex sensor. With 8 keys, the user could play every note of a scale, and depending on how hard the push, and where the push on the key, different timbre and expression could be achieved. 


After a month of fabrication and testing, our prototype was ready to present to the class. It worked successfully, but still had many things we wanted to improve. Cleared by our professor, we were allowed to keep on working on it for the rest of the semester, another month to polish and present the final project. 
 
`,
        imagesAfterApproach: ["emid/arduino.JPEG", "emid/jude.JPEG"
        ],
        outcome: "The result — what it achieved, what you learned, or what you'd do differently next time.",
        imagesAfterOutcome: [],
        videos: [],
        images: []
      }
    },
    {
      id: "project-two",
      code: "SPEC 02",
      title: "Two-Player Motorized Tabletop Ball Game",
      year: "2025",
      summary: "Building a game from scratch using microcontrollers and motors",
      stack: ["Design", "Electronics", "Controls", "Sensors"],
      thumbnail: "TableTop/Front.jpg",
      externalLink: "",
      details: {
        overview: `- Build an electromechanical game controlled by a KB2040 microcontroller that uses H-bridges to drive motors 
        - Implements user input (button, knob,sensor, etc.) that talks to the KB2040 microcontroller 
        - It has at least one part that moves, driven by one of the motors in your kit. 
        
        Because of the open ended prompt, I came up with a few of my own goals for this project to narrow down what I wanted to make: 
        - Create a two player game 
        - Use a sensor in a creative way 
        - Make it look nice!
        
        When I was younger, I used to have an air hockey table. I spent countless hours playing against others. Recalling that memory, I let it inspire my project, creating a unique game that combines air hockey, foosball, and pinball! 
        For my game, I brainstormed some non-negotiable features. I first wanted to use pinball-style flippers to hit the ball, with two buttons on each side to determine the direction. I also wanted to use an ultrasonic sensor to track when someone scores. Lastly, I wanted to count the score of the game and represent it using LEDs. 
        Here are a few sketches of the brainstorming process (Note: I initially wanted to use three motors, but I deemed it too ambitious once I began designing)`,
        // TODO: move whichever of the photos below belong right after the Overview into this array.
        imagesAfterOverview: ["TableTop/sketch.jpg", "TableTop/onshapeTable.png", ],

        approach: `I started designing my game in Onshape and at the same time, started thinking about how to track if a ball crosses one of the player's goals.
        Instead of a hockey puck, I decided to use a marble, as it could be easily struck by my pinball flipper design. However, the ultrasonic sensors I chose to use can not receive reliable signals from smaller, spherical objects. Therefore, I needed to come up with a way to turn the marble's momentum into some sort of motion. 
        Through some sketching and testing, I came up with a solution: a "hinge" will flips up in front of the sensor. I designed the hinge to have a small slope, allowing the marble to move to the furthest point of the hinge. When the marble falls through, the hinge will return back to its original position, as the high sloped side is heavier. 
        After laser cutting all of the parts of the table and 3D printing the hinge, it was time to tackle the electronics.
        I used the KB2040 microcontroller to handle all of the logic of the game:
        - Each button corresponds to a direction and a motor
        - One of the LEDs receive power when a goal is scored (and all LEDs light up when a player reaches three goals before their opponent)
        - I set threshold values for the ultrasonic sensors to determine when the hinge is moved. 
        I also used my custom H-Bridge PCB that I designed in KiCad and soldered myself to drive one of the motors (I used a L298N driver for the other motor)`,
        // TODO: move whichever of the photos below belong right after the Approach into this array.
        imagesAfterApproach: ["TableTop/backwire.jpg", "TableTop/front.jpg", "TableTop/hbridge.jpg", "TableTop/top.jpg"],

        outcome: `After all of the wiring and coding was completed, it was time to play! The main issue was that the marble could get stuck in the playing area, outside of the range of a player's flipper. However, I couldn't be happier as all of the LEDs worked and people had fun playing my game.
        If I had more time with this project, I would change a couple things:
        - Add third motor in the middle of the playing area with some sort of agitator/flipper that is not controlled by any player - add randomness into the game
        - Curve the corners of the playing area to prevent the marble from getting stuck `,
        // TODO: move whichever of the photos below belong right after the Outcome into this array.
        // For now, ALL your existing photos are kept here together so nothing was lost —
        // split them into imagesAfterOverview / imagesAfterApproach / imagesAfterOutcome above as you like.
        imagesAfterOutcome: ["TableTop/demo.jpg"],

        videos: ["TableTop/win.mp4","TableTop/Hinge.mp4"], 
        images: []
      }
    },
    {
      id: "project-three",
      code: "SPEC 03",
      title: "Load Lifting Robot",
      year: "2025",
      summary: "Robot design to lift, move, and measure various payloads",
      stack: ["Rasberry Pi", "Circuit Design", "Robotics"],
      thumbnail: "robot/thumb1.jpg",
      externalLink: "",
      details: {
        overview: `
The goal of this project was to build a robot to pick up and move a payload. Ultimately, our robot would work with another group’s robot to each measure our respective payload’s weight and then balance the two payloads on a seesaw. The payloads could be one of three weights, and each group would pick up a randomly selected unknown payload.

The requirements of this project:
- the robot must be able to lift the heaviest payload (~1.1 kg)
- Use a load cell to measure the payload
- The robot must be controlled remotely (through wifi)

The rest was up to us. We were given DC motors, a raspberry pi, a kb2040, a load cell, and a steel bar (to act as the lifting arm). The first order of business was to construct a housing for our robot to attach our wheels, and brains of the machine. A more challenging task, however, was brainstorming an efficient method of lifting the payload using a low-torque, DC motor. 
`,
        imagesAfterOverview: [],
        approach: `The housing of the robot was made out of laser-cut acrylic and aluminum extrusions, to keep the robot as modular as possible during the prototyping process. We designed some 3D-printed housings for the DC motors and attached wooden wheels to the motor shafts. Using the Raspberry pi, I set up a website that connected to the RPi over wifi, allowing us to control the motor directions, and therefore the robot, with the WASD keys. 

After going through many iterations and sketches of what our lifting mechanism should be, we opted for gearing our motor down to use a cam to lift our arm up. Because the DC motor had a high rpm, we needed to decrease the speed a lot, as a 1 kg payload would enact a large moment, and the robot would need a large amount of torque to counteract the weight. 

I had laser cut and 3D printed spur gears before, but I wanted to use this project as a learning experience to try something new. After researching and going through class notes, I determined that a worm gear would most effectively and efficiently gear down our motor to our desired torque range. However, I knew that 3D printing an effective and consistent worm gear (and corresponding worm wheel) would be challenging. 

It took a few iterations, but after finding the sweet spot of interaction between the worm gear and worm wheel, I had managed to get a good enough contact with the mechanism. After many tests using each weight, the mechanism finally worked consistently and felt robust. Using CAD, I could easily change the design to make every line up, and decrease any guesswork

Using an op amp circuit that we built, we could extract useful readings from the load cell. With the KB2040, we attributed certain voltage ranges to the weight class it corresponds to, then a respective LED would turn on. Yellow for the lightest payload, red for the middle, and green for the heaviest. 
`,
        imagesAfterApproach: [],
        outcome: `Putting it all together required a bit of wire management, fine tuning, and troubleshooting. Eventually, the robot was very consistent and acting exactly as we wanted it to. All there was to do was to test!

Although our robot wasn’t the prettiest, it worked extremely well. I am proud of the mechanism of the lifting arm and how solid the robot felt while driving with the payload. However, there are always things to improve on. If I could spend more time on this project, or redo it entirely, I would try to make the robot more compact and durable. I would love to explore a more elegant mechanism to lift the payload with more ease, such as a compact pulley system. Also, I would experiment with the load cell placement, as it could be beneficial to move it closer to the main body of the robot. 
`,
        imagesAfterOutcome: ["robot/thumb.jpg","robot/wiring.JPG"],
        videos: ["robot/worm.MP4","robot/class.MOV","robot/demo.MP4"],
        images: []
      }
    },
    {
      id: "project-four",
      code: "SPEC 04",
      title: "Assistive Dog Treat Dispenser",
      year: "2025",
      summary: "Designing and fabricating a dog treat dispenser that can easily be accessed by a owner in a wheelchair.",
      stack: ["CAD", "3D Printing", "Human interaction", "Design"],
      thumbnail: "dog/final.jpg", // optional: filename (e.g. "project-one-thumb.jpg") or full image URL. Leave "" for no thumbnail.
      externalLink: "", // optional: live demo, GitHub repo, video, etc.
      details: {
        overview: `For the final project of the Engineering Design course, my group was tasked with creating a dog food dispenser. The client, a spinal cord injury survivor, has limited mobility and uses a motorized wheelchair. He enjoys outdoor activities with his service dog, Oliver, but has difficulty managing and dispensing dog treats independently. 
- Current treat storage methods are inconvenient and prone to spills. 
- There is a need for a portable, wheelchair-compatible device that allows Ryan to easily store, carry, and dispense dog treats in a controlled, accessible way.
`,
        imagesAfterOverview: [],
        approach: `To start brainstorming different methods, three low fidelity prototypes were created and tested as proof of concept. Immediately, one prototype stood out from the rest, and paved the way for our medium fidelity prototype. Our medium fidelity prototype was 3D printed, included a mounting slot onto the wheelchair, and successfully dispensed dog treats. However, the dispensing was very inconsistent, and the mechanism often jammed due to the inconsistent geometries of the dog treats. After dissecting the prototyping and determining solutions, we determined that a “shaker” or “anti-jam” mechanism would shuffle the treats enough to get rid of the jam. 

Another medium fidelity prototype was designed, to prove that the anti-jam mechanism would work. This mechanism worked by introducing a “recoil” to the button press. After the button is pressed to line up the dispensing slots, the dog treat storage housing would experience an extra back-and-forth motion.
`,
        imagesAfterApproach: ["dog/low.jpg", "dog/medium1.png","dog/medium.jpg",
        ],
        outcome: `To create a final design, high-fidelity prototype, we polished the final mechanism and made the attachment to the wheelchair more intuitive. Although the final design worked much better than the previous prototypes, the main issue of jamming was still present. If granted more time to improve our design, I would focus on improving form factor, increasing treat storage capacity, and improving hopper geometry to further decrease jams.
`,
        imagesAfterOutcome: ["dog/final.jpg","dog/mech.png"],
        videos: ["dog/Vid.MP4"],
        images: []
      }
    }
  ],

  // ---- Skills ----
  // Group however makes sense for your field
  skills: [
    { category: "Design & CAD", items: ["SolidWorks", "Onshape", "COMSOL"] },
    { category: "Programming", items: ["MATLAB", "C++", "LabVIEW"] },
    { category: "Fabrication", items: ["3D Printers", "Laser Cutting", "Drill Press, Lathe, Mill"] }
  ],

  // ---- Contact ----
  email: "judevamenta@gmail.com",
  links: [
    { label: "GitHub", url: "https://github.com/judevam" },
    { label: "LinkedIn", url: "https://linkedin.com/in/judevamenta/" }
  ],

  // ---- SEO / link previews ----
  // This controls how your site looks when shared on LinkedIn, Slack, iMessage, etc.
  // Note: some of this (below) also needs to be set directly in index.html's <head> —
  // see the comments there — because social media preview bots don't run JavaScript.
  seo: {
    description: "Engineering portfolio showcasing projects, skills, and experience.",
    previewImage: "" // optional: filename or URL of an image shown in link previews (e.g. "preview.jpg")
  }
};
