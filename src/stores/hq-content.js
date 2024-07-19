import { defineStore } from "pinia";

export const useHq = defineStore("hq", {
  state: () => ({
    overview: [
      {
        id: "kick-off-meeting",
        day: 1,
        title: "Kick-off Meeting",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Meeting",
            url: "https://www.google.com/url?q=https://us06web.zoom.us/j/87181181183?pwd%3DgkmQgFW8uTwMyRIvwaPZDq6KAhVbMy.1&sa=D&source=calendar&ust=1702497294134063&usg=AOvVaw1texXIGy16bHprj3B3G86V",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "09:00",
        end: "10:40",
        active: false,
      },
      {
        id: "challenge-selection",
        day: 1,
        title: "Challenge Selection",
        phase: "understand",
        color: "#17BC61",
        label: { label: "", color: "" },
        btns: [],
        start: "9.40",
        end: "10.00",
        active: false,
      },
      {
        id: "discover-activity",
        day: 1,
        title: "Discover Activity",
        phase: "understand",
        color: "#17BC61",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "10.00",
        end: "10.45",
        active: false,
      },
      {
        id: "research-preparation-activity",
        day: 1,
        title: "Research Preparation Activity",
        phase: "understand",
        color: "#17BC61",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "10.45",
        end: "11.45",
        active: false,
      },
      {
        id: "communicate-research-action",
        day: 1,
        title: "Communicate Research Action",
        phase: "understand",
        color: "#17BC61",
        tools: [
          {
            label: "google form",
            color: "",
            icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fgoogleforms-white.svg?alt=media&token=c2e11f38-a379-46af-aa9c-44208b48f961",
          },
        ],
        label: { label: "check-in", color: "#3B3355" },
        btns: [
          {
            icon: "",
            label: "Fill in Form",
            url: "https://forms.gle/qFMZzKcdk3vVNQGQA",
            bgColor: "",
            textColor: "",
          },
        ],
        start: "11.45",
        end: "12.00",
        active: false,
      },
      {
        id: "lunch-break-day-1",
        day: 1,
        title: "Lunch Break",
        phase: "lunch",
        color: "#3b3355",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "12.00",
        end: "13.00",
        active: false,
      },
      {
        id: "research-activity",
        day: 1,
        title: "Research Activity",
        phase: "understand",
        color: "#17BC61",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Expert and User Meeting",
            url: "https://www.google.com/url?q=https://us06web.zoom.us/j/82238591210?pwd%3D4V1SR1lK01Bj4UqpmQGFRILhZigPY2.1&sa=D&source=calendar&ust=1702497294134063&usg=AOvVaw3RXkeMC0q9DLOmyKBIl0Ue",
            bgColor: "",
            textColor: "",
          },
        ],
        start: "13.00",
        end: "13.45",
        active: false,
      },
      {
        id: "define-activity",
        day: 1,
        title: "Define Activity",
        phase: "define",
        color: "#FF6C11",
        tools: [],
        label: { label: "", color: "" },
        btns: [],
        start: "13.45",
        end: "15.15",
        active: false,
      },
      {
        id: "share-how-might-we-questions",
        day: 1,
        title: "Share How Might We Questions",
        phase: "define",
        color: "#FF6C11",
        tools: [
          {
            label: "google forms",
            color: "",
            icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fgoogleforms-white.svg?alt=media&token=c2e11f38-a379-46af-aa9c-44208b48f961",
          },
        ],
        label: { label: "check-in", color: "#3b3355" },
        btns: [{ icon: "", label: "Fill in Form", url: "https://forms.gle/xTg8V7sn7eP3mPAT9", bgColor: "", textColor: "" }, {icon: "", label:"Feedback Form", url: "https://forms.gle/vSG14FhJe2Xm2KyJ7", bgColor:"", textColor:""}],
        start: "15.15",
        end: "15.40",
        active: false,
      },
      {
        id: "wrap-up-day-1",
        day: 1,
        title: "Wrap-up Day 1",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Meeting",
            url: "https://us06web.zoom.us/j/89132899515?pwd=XZMxT2VETaJBAbfTLFcDtQEACeQcyy.1",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "15.40",
        end: "16.00",
        active: false,
      },
      {
        id: "welcome-meeting",
        day: 2,
        title: "Welcome Meeting",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Meeting",
            url: "https://us06web.zoom.us/j/81077140513?pwd=daThjpsioMf6Dx8rbhqpDMCcAWHaqa.1",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "09.00",
        end: "09.15",
        active: false,
      },
      {
        id: "brainstorm",
        day: 2,
        title: "Brainstorm",
        phase: "ideate",
        color: "#FFB01F",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
          { label: "miro", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fmiro-white.svg?alt=media&token=0a3d35ef-6c26-4ee1-b5a8-e377082459bf" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Workspace",
            url: "",
            bgColor: "",
            textColor: "",
          },
          {
            icon: "",
            label: "Join Meeting",
            url: "https://us06web.zoom.us/j/85616224067?pwd=bXCbu5A1PZDoHcoOsOeyEtl9sExvFB.1",
            bgColor: "",
            textColor: "",
          },
        ],
        start: "09.15",
        end: "10.00",
        active: false,
      },
      {
        id: "idea-selection",
        day: 2,
        title: "Idea Selection",
        phase: "ideate",
        color: "#FFB01F",
        tools: [],
        label: { label: "", color: "" },
        btns: [],
        start: "10.00",
        end: "10.15",
        active: false,
      },
      {
        id: "prototyping",
        day: 2,
        title: "Prototyping",
        phase: "make",
        color: "#00B8F3",
        tools: [],
        label: { label: "", color: "" },
        btns: [],
        start: "10.15",
        end: "12.00",
        active: false,
      },
      {
        id: "lunch-break-day-2",
        day: 2,
        title: "Lunch Break",
        phase: "lunch",
        color: "#3b3355",
        tools: [],
        label: {},
        btns: [],
        start: "12.00",
        end: "13.00",
        active: false,
      },
      {
        id: "prototyping-p2",
        day: 2,
        title: "Prototyping",
        phase: "make",
        color: "#00B8F3",
        tools: [],
        label: { label: "", color: "" },
        btns: [],
        start: "13.00",
        end: "13.30",
        active: false,
      },
      {
        id: "pitch-prep",
        day: 2,
        title: "Prepare Pitch",
        phase: "make",
        color: "#00B8F3",
        tools: [],
        label: { label: "", color: "" },
        btns: [],
        start: "13.30",
        end: "14.30",
        active: false,
      },
      {
        id: "submit-pitch",
        day: 2,
        title: "Submit Pitch",
        phase: "make",
        color: "#00B8F3",
        tools: [],
        label: { label: "check-in", color: "#3B3355" },
        btns: [{ icon: "", label: "Submit Pitch", url: "", bgColor: "", textColor: "" }],
        start: "14.30",
        end: "14.45",
        active: false,
      },

      {
        id: "pitch-ceremony",
        day: 2,
        title: "Pitch Ceremony",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Ceremony",
            url: "https://us06web.zoom.us/j/89393259137?pwd=M9gLTd2vCk2nXZqGb7p8qZecaLj4Xl.1",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "14.45",
        end: "16.00",
        active: false,
      },
    ],
    steps: [
      {
        id: "kick-off-meeting",
        day: 1,
        title: "Kick-off Meeting",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Meeting",
            url: "https://www.google.com/url?q=https://us06web.zoom.us/j/87181181183?pwd%3DgkmQgFW8uTwMyRIvwaPZDq6KAhVbMy.1&sa=D&source=calendar&ust=1702497294134063&usg=AOvVaw1texXIGy16bHprj3B3G86V",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "09:00",
        end: "09:40",
        what: [
          "Welcome word of the organisers",
          "Do a program rundown",
          "Present the challenges",
          "Answer your questions",
        ],
        why: [
          "Create alignment, increase the stakes & start in an inspiring way",
        ],
        steps: [
          {
            title: "Welcome Word",
            duration: "5",
            instructions: [
              "Story about food challenges in the world",
              "Endgoal: build or visualise a solutions for a food-related challenge",
              "Jury members will judge the quality of your curiosity",
            ],
            annex: [],
          },
          {
            title: "Program Rundown",
            duration: "15",
            instructions: [
              "Share HQ page & support tools",
              "Share Double Diamond process",
              "Share shedule day 1",
            ],
            annex: [
              {
                label: "presentation double diamond",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-doublediamond.jpg?alt=media&token=fc84b81e-13bc-485e-b629-a8711f42ae3e",
                url: "https://docs.google.com/presentation/d/1xivuKR0GYRGkoPGWtlQ3qM0SFGaJU9mLG318Q6VQ26w/edit?usp=sharing",
                type: "slides",
              },
            ],
          },
          {
            title: "Present Challenges",
            duration: '15',
            instructions: [
              "Introduce score-card idea (I like, I can, I care)",
              "Introduction & movies of the challenges",
              "Present the challenge posters",
              "Download the document attached to get an overview of all the challenges."
            ],
            annex: [
              {
                label: "score card",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-scorecard.jpg?alt=media&token=784cacd7-39c1-4a4d-a8dd-85b48358e829",
                url: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-scorecard.jpg?alt=media&token=784cacd7-39c1-4a4d-a8dd-85b48358e829",
                type: "file",
              },
              {
                label: "Challenge Overview",
                img: "",
                url: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/EFH%20Challenges%20Overview.pdf?alt=media&token=1cad5228-5afe-4521-b803-923a5480ac7e",
                type: "file"
              }
            ]
          },
          {
            title: "Review all Pitched Challenges",
            duration: "x",
            instructions: [
              "Review all pitched challenges",
            ],
            annex: [
              {
                label: "O-Live-You",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-challenge-duynie.jpg?alt=media&token=92a01c1f-788a-49a6-ad18-58f9ea466681",
                url: "https://drive.google.com/file/d/1glDbwrZpO1gBalLAEq_vnAeUaI3y4CCn/view?usp=sharing",
                type: "video",
              },
              {
                label: "Chickens for All",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-chickensforall.jpeg?alt=media&token=4d78fc42-8948-4f52-b5ec-6496412db9a8",
                url: "https://drive.google.com/file/d/1nZko7iHit3e4FeqIedNh8K4YgFY2h-rV/view?usp=sharing",
                type: "video"
              },
              {
                label: "Goodbye Trash",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-challenge-packaging.jpg?alt=media&token=830c300b-bf8b-4d30-8479-0e5a82028a03",
                url: "https://drive.google.com/file/d/1P6fA9L9m443yRaf_6fEXbg7l_aHwyUYe/view?usp=sharing",
                type: "video"
              },
              {
                label: "The Bees",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-challenge-bees.jpg?alt=media&token=2fef6e17-f920-4303-8fb4-5aa2f71dfa55",
                url: "https://drive.google.com/file/d/18J7PtUMcGAyLobPHOqgUAG222CM6X0zl/view?usp=sharing",
                type: "video",
              },
              {
                label: "Our Tree",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-ourtree.jpeg?alt=media&token=cb277489-2c24-435e-9100-9dfdba1f7830",
                url: "https://drive.google.com/file/d/1ZIsyD_7NJOwVzaZpohTb_c0YfO45SCAj/view?usp=sharing",
                type: "video"
              },
              {
                label: "Be Smart In The Kitchen",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-smartkitchen.jpeg?alt=media&token=4b5524c7-3eb3-4ad6-8249-785cb8bd3eda",
                url: "https://drive.google.com/file/d/1JKjNjX1cjubMUSiJ1ULZWKLnnEqkgJhQ/view?usp=sharing",
                type: "video"
              },
              {
                label: "Food Against Cancer",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-foodagainstcancer.jpeg?alt=media&token=f712e48e-0893-4721-ac79-c087e6330608",
                url: "https://www.loom.com/share/0ffdebe3b5b2409c877e1ca40f759610?sid=1ac1cf60-f8bb-4764-863d-36b1280c5067",
                type: "video"
              },
            ],
          },
        ],
      },
      {
        id: "challenge-selection",
        day: 1,
        title: "Challenge Selection",
        phase: "understand",
        color: "#17BC61",
        label: { label: "", color: "" },
        btns: [],
        start: "9.40",
        end: "10.00",
        what: [
          "Out of the available challenges, choose the one our team wants to solve",
          "If we have extra time, quickly gather lots of ideas and save them for later. When we finally get to solving the challenge, this will help us think of more ideas.",
        ],
        why: [
          "To pick a challenge that our team finds important and wants to solve",
          "To share and save our initial ideas, to help us move beyond those first ideas.",
        ],
        steps: [
          {
            title: "Choose a Challenge",
            duration: "10",
            instructions: [
              "Watch the Challenge pitches. You can rewatch them below.",
              "If you’re having trouble picking a Challenge, rate each of them with a score from 1 to 5 based on the following questions: <br/>I Can: Do you think you have the skills to help with this challenge?<br/>I Like: Do you think you will have fun while solving this challenge?<br/>I Care: Do you want to help solve this challenge?",
              "See what Challenge scores the highest for your team and pick one.",
              "Get access to all challenge maps and pitches through the download below."
            ],
            annex: [
              {
                label: "score card",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-scorecard.png?alt=media&token=fd6ba849-4458-443b-b319-7bbaaa1f1605",
                url: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-scorecard.png?alt=media&token=fd6ba849-4458-443b-b319-7bbaaa1f1605",
                type: "file",
              },
              {
                label: "All Challenge Info",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-challenge-map.jpg?alt=media&token=a62b39c7-503e-49ac-9ba7-bdf2c712c8c4",
                url: "https://drive.google.com/drive/folders/1w-2hetkztmucuRjiDlP2VnRpGPap1gaj?usp=sharing",
                type: "file",
              },
            ],
          },
          {
            title: "Share your first ideas and let go",
            duration: "10",
            instructions: [
              "Before we start, let’s share the possible solutions that immediately come to mind",
              "Write all of your ideas on Post It notes (one Post It per idea) and stick them on a piece of paper.",
              "Put the piece of paper with all of your ideas somewhere all of you can see. You can hang it on the wall or hang it on a wire.",
              "Quickly share your ideas with each other. Listen to what everyone has to say, it might inspire you!",
              "If you think of additional solutions after hearing someone else’s, write them down too.",
              "For now, let go of the ideas. When we have a better understanding of the problem, we will come back to them. Perhaps we can find an interesting combination or think of completely new solutions!",
            ],
            annex: [
            ],
          },
        ],
      },
      {
        id: "discover-activity",
        day: 1,
        title: "Discover Activity",
        phase: "understand",
        color: "#17BC61",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "10.00",
        end: "10.45",
        what: [
          "We’re going to be reading information to learn more about our challenge.",
        ],
        why: [
          "If we know more about our challenge, we can understand what’s going on and find the best possible solution.",
          "Knowing and understanding our challenge also helps to guide us in our decision making.",
        ],
        steps: [
          {
            title: "Map your questions",
            duration: "10",
            instructions: [
              "Think about what you want to learn during this step. What questions about the challenge do you have? What information do you want to discover?",
              "Share some questions in your group or write them down.",
            ],
            annex: [],
          },
          {
            title: "Read the Challenge Maps",
            duration: "20",
            instructions: [
              "Get started on gathering information reading the impact gaps canvas of your challenge. You can find it in printed or digital format.",
              "An impact gaps canvas maps (or challenge maps) the current problem, exisitng solutions and highlights elements that are missing in the words of the challenge owner.",
              "Find all impact gaps canvasses in the attachment below."
            ],
            annex: [
              {
                label: "All Challenge Info",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-challenge-map.jpg?alt=media&token=a62b39c7-503e-49ac-9ba7-bdf2c712c8c4",
                url: "https://drive.google.com/drive/folders/1w-2hetkztmucuRjiDlP2VnRpGPap1gaj?usp=sharing",
                type: "file",
              },
            ],
          },
          {
            title: "Choose a focus",
            duration: "15",
            instructions: [
              "You can't solve every sub-challenge presented on the canvas, now is the time to reflect and select what part of the challenge you really want to tackle.",
              "Annotate or highlight elements on the impact canvas your group wants to focus on.",
              "Talk to each other so everyone is aligned on what specific aspect of your challenge you want to explore more in-depth.",
            ],
            annex: [],
          },
        ],
      },
      {
        id: "research-preparation-activity",
        day: 1,
        title: "Research Preparation Activity",
        phase: "understand",
        color: "#17BC61",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "10.45",
        end: "11.45",
        what: [
          "We’re going to be preparing our research activities. We have two choices: user research and desk research.",
        ],
        why: [
          "Doing research, we do the most important thing in the #edufoodhack, which is to learn from others and learn about our challenge. In designing a product or solution, it is crucial to always remember the customer or end-user, as they are the people that we do this for. ",
          "By interviewing experts and customers/end-users, we gain clues and insights in the things they find important and what problems they might run into. And also what they need, to do what they want to do.",
          "By conducting desk research we learn more about the problem, and discover that there is much more to a problem than you might think."
        ],
        steps: [
          {
            title: "Desk and User Research",
            duration: "5",
            instructions: [
              "First, you need to understand what these types of research mean. Let me explain.",
              "DESK RESEARCH: Using the internet is one of the fastest ways to learn more about a problem.",
              "USER RESEARCH: Talking to people will give you a real understanding of what solutions people need.",
              "Now, pick one or both types of research and divide the tasks by splitting the team in two."
            ],
            annex: []
          },
          {
            title: "Desk Research Prep",
            duration: "45",
            instructions: [
              "First, watch the two tutorial videos on how to conduct desk research. The first one is about doing desk research using google. The second one is about doing desk research using artificial intelligence tools. Click the videos below.",
              "Next, start preparing or conducting desk research with your team. Keep track of your notes and findings on post-its on in a google/word document."
            ],
            annex: [
              {
                label: "Desk Research with Google",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-deskresearch.jpeg?alt=media&token=eb508802-ecac-4e95-9182-9eefb87c18d5",
                url: "https://www.loom.com/share/3e5e56d2871b4f9b9ea80965bdf8fefb?sid=273b5af6-fd08-4a72-9c46-fbdc03fc85fc",
                type: "video",
              },
              {
                label: "Desk Research with AI",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-deskresearchai.jpeg?alt=media&token=5f9b3116-24fc-44fc-ade6-5663abbe1856",
                url: "https://www.loom.com/share/b4d38dd6d3364b6db0feeef89169eeb2?sid=0d703edb-12fb-438b-bd75-76697f6a0054",
                type: "video",
              },
            ]
          },
          {
            title: "User Research Prep",
            duration: "45",
            instructions: [
              "First, watch the tutorial video on how to conduct and prepare for an interview.",
              "Next, start preparing or conducting user research with your team. Keep track of your notes and findings on post-its on in a google/word document.",
              "Discover who you can interview online between 13 and 14 hours. We have experts and users availble online for you. Click on the attachment below to discover the list."
            ],
            annex: [
              {
                label: "User Research video",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-userresearch.jpeg?alt=media&token=b8e569f6-5526-41a8-b05f-3ed84ec42037",
                url: "https://www.loom.com/share/05e245e9b9164b2f919b53183a62e0d5?sid=6ca9f7de-9e51-4444-aaeb-5389b23130b1",
                type: "video"
              },
              {
                label: "User Research List",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-interviewkit.jpg?alt=media&token=0f27a199-135d-4b8d-abde-4a7568c32b19",
                url: "https://docs.google.com/presentation/d/1li9T9YanRbdvbTNACCszROc-0NkPGTKAWWfSCPQKvF4/edit?usp=sharing",
                type: "file"
              }
            ]

          },
          {
            title: "Hint: Start Building Your Research Wall",
            duration: "x",
            instructions: [
              "Keep track of your findings and already start building your research wall. Watch the tutorial below on how to just do that.",
              "Note: you can find more information of this step under the define phase."
            ],
            annex: [
              {
                label: "Research wall",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-researchwall.jpeg?alt=media&token=03608058-0f2e-4872-bd10-6eb1e0301b64",
                url: "https://www.loom.com/share/f84c15b19f81455bb4495930e34c531f?sid=71009565-5501-4734-925d-cf09a9794bd7",
                type: "video",
              },
            ],
          },
          {
            title: "Check",
            duration: "x",
            instructions: [
              "Do a final check to see if everyone is on board with the planning of the research actions. Who do you wan to interview? Who will do desk research?",
            ],
            annex: [],
          },
        ],
      },
      {
        id: "research-preparation-activity-p2",
        day: 1,
        title: "Research Preparation Activity",
        phase: "understand",
        color: "#17BC61",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "10.45",
        end: "11.45",
        what: [
          "We’re going to be preparing our research activities. We have two choices: user research and desk research.",
        ],
        why: [
          "Doing research, we do the most important thing in the #edufoodhack, which is to learn from others and learn about our challenge. In designing a product or solution, it is crucial to always remember the customer or end-user, as they are the people that we do this for. ",
          "By interviewing experts and customers/end-users, we gain clues and insights in the things they find important and what problems they might run into. And also what they need, to do what they want to do.",
          "By conducting desk research we learn more about the problem, and discover that there is much more to a problem than you might think."
        ],
        steps: [
          {
            title: "Desk and User Research",
            duration: "5",
            instructions: [
              "First, you need to understand what these types of research mean. Let me explain.",
              "DESK RESEARCH: Using the internet is one of the fastest ways to learn more about a problem.",
              "USER RESEARCH: Talking to people will give you a real understanding of what solutions people need.",
              "Now, pick one or both types of research and divide the tasks by splitting the team in two."
            ],
            annex: []
          },
          {
            title: "Desk Research Prep",
            duration: "45",
            instructions: [
              "First, watch the two tutorial videos on how to conduct desk research. The first one is about doing desk research using google. The second one is about doing desk research using artificial intelligence tools. Click the videos below.",
              "Next, start preparing or conducting desk research with your team. Keep track of your notes and findings on post-its on in a google/word document."
            ],
            annex: [
              {
                label: "Desk Research with Google",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-deskresearch.jpeg?alt=media&token=eb508802-ecac-4e95-9182-9eefb87c18d5",
                url: "https://www.loom.com/share/3e5e56d2871b4f9b9ea80965bdf8fefb?sid=273b5af6-fd08-4a72-9c46-fbdc03fc85fc",
                type: "video",
              },
              {
                label: "Desk Research with AI",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-deskresearchai.jpeg?alt=media&token=5f9b3116-24fc-44fc-ade6-5663abbe1856",
                url: "https://www.loom.com/share/b4d38dd6d3364b6db0feeef89169eeb2?sid=0d703edb-12fb-438b-bd75-76697f6a0054",
                type: "video",
              },
            ]
          },
          {
            title: "User Research Prep",
            duration: "45",
            instructions: [
              "First, watch the tutorial video on how to conduct and prepare for an interview.",
              "Next, start preparing or conducting user research with your team. Keep track of your notes and findings on post-its on in a google/word document.",
              "Discover who you can interview online between 13 and 14 hours. We have experts and users availble online for you. Click on the attachment below to discover the list."
            ],
            annex: [
              {
                label: "User Research video",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-userresearch.jpeg?alt=media&token=b8e569f6-5526-41a8-b05f-3ed84ec42037",
                url: "https://www.loom.com/share/05e245e9b9164b2f919b53183a62e0d5?sid=6ca9f7de-9e51-4444-aaeb-5389b23130b1",
                type: "video"
              },
              {
                label: "User Research List",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-interviewkit.jpg?alt=media&token=0f27a199-135d-4b8d-abde-4a7568c32b19",
                url: "https://docs.google.com/presentation/d/1li9T9YanRbdvbTNACCszROc-0NkPGTKAWWfSCPQKvF4/edit?usp=sharing",
                type: "file"
              }
            ]

          },
          {
            title: "Hint: Start Building Your Research Wall",
            duration: "x",
            instructions: [
              "Keep track of your findings and already start building your research wall. Watch the tutorial below on how to just do that.",
              "Note: you can find more information of this step under the define phase."
            ],
            annex: [
              {
                label: "Research wall",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-researchwall.jpeg?alt=media&token=03608058-0f2e-4872-bd10-6eb1e0301b64",
                url: "https://www.loom.com/share/f84c15b19f81455bb4495930e34c531f?sid=71009565-5501-4734-925d-cf09a9794bd7",
                type: "video",
              },
            ],
          },
          {
            title: "Check",
            duration: "x",
            instructions: [
              "Do a final check to see if everyone is on board with the planning of the research actions. Who do you wan to interview? Who will do desk research?",
            ],
            annex: [],
          },
        ],
      },
      {
        id: "communicate-research-action",
        day: 1,
        title: "Communicate Research Action",
        phase: "understand",
        color: "#17BC61",
        tools: [""],
        label: { label: "", color: "" },
        btns: [{ icon: "", label: "", url: "", bgColor: "", textColor: "" }],
        start: "11.45",
        end: "12.00",
        what: [
          "We’re going to let the organisers know who you want to interview, so that the users and experts can prepare their session. ",
          "If you decided to speak to an expert, please submit your top 3 most important questions in this Google Form. The expert will use this to get prepared for your meeting.",
        ],
        why: [
          "We’re doing this to make sure the research activity runs smoothly.",
        ],
        steps: [
          {
            title: "Fill in the Google Form",
            duration: "15",
            instructions: [
              "Please follow the link below and fill in the google form.",
            ],
            annex: [
              {
                label: "Google Form",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-researchselection.jpg?alt=media&token=0ceadedb-db42-4b13-88b7-7ff92e3a5aca",
                url: "https://forms.gle/qFMZzKcdk3vVNQGQA",
                type: "url",
              },
            ],
          },
        ],
      },
      {
        id: "lunch-break-day-1",
        day: 1,
        title: "Lunch Break",
        phase: "lunch",
        color: "#3b3355",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "12.00",
        end: "13.00",
        what: [],
        why: [],
        steps: [
          {
            title: "",
            duration: "",
            instructions: ["", "", ""],
            annex: [],
          },
        ],
      },
      {
        id: "research-activity",
        day: 1,
        title: "Research Activity",
        phase: "understand",
        color: "#17BC61",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "", color: "" },
        btns: [
          {
            icon: "",
            label: "Join Expert and User Meeting",
            url: "https://us06web.zoom.us/j/82238591210?pwd=4V1SR1lK01Bj4UqpmQGFRILhZigPY2.1",
            bgColor: "",
            textColor: "",
          },
        ],
        start: "13.00",
        end: "13.45",
        what: [
          "Each team conducts their selected research activities. Join a meeting with your expert or user, or go find your interview candidates yourself!",
        ],
        why: [
          "We do this to better understand our challenge and the people involved. We want to know what we need to remember when inventing our solution.",
        ],
        steps: [
          {
            title: "Join the Meeting",
            duration: "1",
            instructions: [
              "If you booked an online meeting, first let's join the right interview meeting. We have 2 meetings. Meeting 1 is with experts. Meeting 2 is with users. Click the right link below to join the meeting.",
              "Note: only join with 1 laptop per session to make the meeting not so crowded."
            ],
            annex: [
              {
                label: "Expert and User meeting",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-expertmeeting.png?alt=media&token=305dab26-02c5-4b17-a6b2-fc24c22de40e",
                url: "https://us06web.zoom.us/j/82238591210?pwd=4V1SR1lK01Bj4UqpmQGFRILhZigPY2.1",
                type: "url",
              },
            ],
          },
          {
            title: "Interview",
            duration: "30",
            instructions: [
              "Don't forget to bring your preparations with you to the interview. Join an interview with a minimum of two persons, one does the talking, the other person can take notes.",
              "When conducting your interview or doing your research another way, write down every important detail. You might remember a lot, but you will not remember everything. So write it down!",
            ],
            annex: [],
          },
          {
            title: "Collect",
            duration: "14",
            instructions: [
              "When you are done with your interviews, take a moment to gather all of your findings on a large piece of paper.",
              "When you have everything ready, talk about your outcomes and your insights. What did you learn? Was there anything you didn’t know yet? What was the most important thing you found out?",
            ],
            annex: [],
          },
        ],
      },
      {
        id: "define-activity",
        day: 1,
        title: "Define Activity",
        phase: "define",
        color: "#3b3355",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "13.45",
        end: "15.15",
        what: [
          "It’s time to put together everything we have learned, and start looking at the problem from a different angle. We need to get a clear idea of our challenge and everything that we learned today.",
        ],
        why: [
          "Only when we really understand what’s going on and what problems there are, we can invent a better solution. We will remember all this information when we start to work on our solutions",
        ],
        steps: [
          {
            title: "View Tutorial",
            duration: "10",
            instructions: [
              "Please review the tutorial on how to unpack your learnings."],
            annex: [
              {
                label: "Define Activity",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-researchwall.jpeg?alt=media&token=03608058-0f2e-4872-bd10-6eb1e0301b64",
                url: "https://www.loom.com/share/f84c15b19f81455bb4495930e34c531f?sid=71009565-5501-4734-925d-cf09a9794bd7",
                type: "video",
              },
            ]
          },
          {
            title: "Collect",
            duration: "10",
            instructions: [
              "First, you take a look at all the things you have learned so far and work individually. Use post-its and the canvas or use your online workspace.",
              "Write down who you spoke to. Write down what you think is the most important or exciting, use the colums to structure your thoughts.  It could be something that made you think really hard or something that was totally unexpected. Write only one idea or insights per post-it",
              "Once you have written down all your learnings, now score them according to importance (e.g. +++ or super high).",
            ],
            annex: []
          },
          {
            title: "Define",
            duration: "10",
            instructions: [
              "With all your findings up on the wall, it's time to find the most interesting ones.",
              "Give each team member a few minutes to share their favorite ideas and insights with the group, one by one. The other team members can listen carefully",
              "Next, everyone picks one finding they think is really important or super interesting. This could be something surprising, different, or something that made you think to try to solve the problem in another way.",
              "Share with the team why you picked it, but don't think too hard – just go with your gut feeling!",
            ],
            annex: []
          },
        ],
      },
      {
        id: "share-how-might-we-questions",
        day: 1,
        title: "Share How Might We Questions",
        phase: "define",
        color: "#3b3355",
        tools: [
          {
            label: "google forms",
            color: "",
            icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fgoogleforms-white.svg?alt=media&token=c2e11f38-a379-46af-aa9c-44208b48f961",
          },
        ],
        label: { label: "check-in", color: "#3b3355" },
        btns: [{ icon: "", label: "", url: "", bgColor: "", textColor: "" }],
        start: "15.15",
        end: "15.40",
        what: [
          "We're going to summarize what we've learned by writing our key insights and learned lessons down in a question format.",
        ],
        why: [
          "This is to help us remember what we learned today and what we need to do on the second day of the #edufoodhack.",
        ],
        steps: [
          {
            title: "Watch the video'",
            duration: "5",
            instructions: [
              "Watch the video below to discover how to write down 'how might we' questions.",
            ],
            annex: [],
          },
          {
            title: "Write down your HMW questions",
            duration: "10",
            instructions: [
              "Go back and look at your one finding you picked as the most interesting or important of the day. ",
              "Take a post it and state HMW (how might we) and start completing the question, reframing your key finding.",
              "Give it a few tries. If ready, check if the question is not too broad, too narrow or already hold a solution inside the question.",
              "When ready, feel free to reframe other findings into a HMW question.",
            ],
            annex: [],
          },
          {
            title: "Share and select the best HMW questions",
            duration: "10",
            instructions: [
              "Read your framed HMW questions out loud to the team, do this one by one and listen to your teammeates.",
              "Now pick a top three from all of the shared questions that your team absolutely wants to move forward with.",
            ],
            annex: [],
          },
          {
            title: "Fill in the HMW Form",
            duration: "5",
            instructions: [
              "Share your top three HMW questions in the google form. These will be the questions that we use for the brainstorm on Thursday.",
            ],
            annex: [
              {
                label:"'How might we' Form",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-researchselection.jpg?alt=media&token=0ceadedb-db42-4b13-88b7-7ff92e3a5aca",
                url: "https://forms.gle/xTg8V7sn7eP3mPAT9",

              }
            ],
          },
          {
            title: "Share feedback",
            duration: "5",
            instructions: ["You did it, congrats! How was your first hackathon day? Please share feedback using the form below. Thank you for letting each team member fill in the form."],
            annex: [
              {
                label: "Feedback Form",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-researchselection.jpg?alt=media&token=0ceadedb-db42-4b13-88b7-7ff92e3a5aca",
                url: "https://forms.gle/vSG14FhJe2Xm2KyJ7"
              }
            ]
          }
        ],
      },
      {
        id: "wrap-up-day-1",
        day: 1,
        title: "Wrap-up Day 1",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Meeting",
            url: "https://www.google.com/url?q=https://us06web.zoom.us/j/89132899515?pwd%3DXZMxT2VETaJBAbfTLFcDtQEACeQcyy.1&sa=D&source=calendar&ust=1702497294134063&usg=AOvVaw3JnbBQr4TDMjMiR6ssH82w",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "15.40",
        end: "16.00",
        what: [
          "A short talk to close day 1 of the hackathon and look forward to day two.",
        ],
        why: [
          "It's a great way to see how much we've achieved in just one day!",
        ],
        steps: [
          {
            title: "Join the wrap-up meeting",
            duration: "10",
            instructions: ["Follow the link below to join the wrap up meeting"],
            annex: [
              {
                label: "Join wrap-up meeting",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-zoom.png?alt=media&token=1429d211-89d7-4aaa-85fa-f18f5e1e94f1",
                url: "https://www.google.com/url?q=https://us06web.zoom.us/j/89132899515?pwd%3DXZMxT2VETaJBAbfTLFcDtQEACeQcyy.1&sa=D&source=calendar&ust=1702497294134063&usg=AOvVaw3JnbBQr4TDMjMiR6ssH82w",
                type: "url",
              },
              {
                label: "Wrap-up Presentation",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-doublediamond.jpg?alt=media&token=fc84b81e-13bc-485e-b629-a8711f42ae3e",
                url: "https://docs.google.com/presentation/d/1lfeClRv4PAHe3sNu46cmJVjWvnp1Zwky-e45gVu-txg/edit?usp=sharing",
                type: "file"
              }
            ],
          },
        ],
      },
      {
        id: "welcome-meeting",
        day: 2,
        title: "Welcome Meeting",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-zoom.png?alt=media&token=1429d211-89d7-4aaa-85fa-f18f5e1e94f1",
            label: "Join Meeting",
            url: "https://us06web.zoom.us/j/81077140513?pwd=daThjpsioMf6Dx8rbhqpDMCcAWHaqa.1",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "09.00",
        end: "09.15",
        what: [
          "Kick-off day two of the hackathon, which is all about creativity and making.",
        ],
        why: [
          "Create alignment, increase the stakes & start in an inspiring way.",
        ],
        steps: [
          {
            title: "Welcome Word",
            duration: "5",
            instructions: ["Stories from yesterday"],
            annex: [
              {
                label: "Join meeting",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-zoom.png?alt=media&token=1429d211-89d7-4aaa-85fa-f18f5e1e94f1",
                url: "https://us06web.zoom.us/j/81077140513?pwd=daThjpsioMf6Dx8rbhqpDMCcAWHaqa.1",
                type: "url",
              },
            ],
          },
          {
            title: "Program Rundown",
            duration: "10",
            instructions: ["Share schedule and updates of day 2"],
            annex: [],
          },
        ],
      },
      {
        id: "brainstorm",
        day: 2,
        title: "Brainstorm",
        phase: "ideate",
        color: "#FFB01F",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
          { label: "miro", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fmiro-white.svg?alt=media&token=0a3d35ef-6c26-4ee1-b5a8-e377082459bf" },
        ],
        label: { label: "online", color: "" },
        btns: [
          {
            icon: "",
            label: "Join Workspace",
            url: "",
            bgColor: "",
            textColor: "",
          },
          {
            icon: "",
            label: "Join Meeting",
            url: "https://us06web.zoom.us/j/85616224067?pwd=bXCbu5A1PZDoHcoOsOeyEtl9sExvFB.1",
            bgColor: "",
            textColor: "",
          },
        ],
        start: "09.15",
        end: "10.00",
        what: [
          "We use different exercises that help us think of many, many ideas and look at all possible angles that we can use to approach the problem and the solution.",
        ],
        why: [
          "This helps us be more creative and inspire each other, so we can come up with more diverse ideas!",
        ],
        steps: [
          {
            title: "Join the workspace and meeting",
            duration: "5",
            instructions: [
              "Start by joinging the digital workspace and the online meeting.",
              "Appoint one team member to be the dedicated person working on the computer for your team throughout this exercise.",
            ],
            annex: [
              {
                label: "zoom meeting",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-zoom.png?alt=media&token=1429d211-89d7-4aaa-85fa-f18f5e1e94f1",
                url: "https://us06web.zoom.us/j/85616224067?pwd=bXCbu5A1PZDoHcoOsOeyEtl9sExvFB.1",
                type: "url",
              },
              {
                label: "workspace",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-miro.png?alt=media&token=562da724-687d-454c-98e8-4a6adfb1ff28",
                url: "",
                type: "url",
              },
            ],
          },
          {
            title: "Follow the facilitator",
            duration: "40",
            instructions: [
              "First, you'll need to onboard in miro, finding your way to your working canvas.",
              "Next, you'll start brainstorming offline.",
              "Finally, you'll get inspired by reading the online ideas of other an be put in break out rooms to continue the brainstorming.",
            ],
            annex: [],
          },
        ],
      },
      {
        id: "idea-selection",
        day: 2,
        title: "Idea Selection",
        phase: "ideate",
        color: "#FFB01F",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "10.00",
        end: "10.15",
        what: [
          "We'll choose idea(s) we want to develop further. Let's pick a favorite idea or combine a few for an even better solution. Below are two methods to help us decide.",
        ],
        why: [
          "We do this to make sure that the whole team is happy with the idea that we picked, and to make sure it is actually the best solution!",
        ],
        steps: [
          {
            title: "Talking phase",
            duration: "5",
            instructions: [
              "To start, we quickly go over each idea and talk to each other about what is good and what could be better about the ideas that you all wrote down together. If you can think of nice combinations, now is a good time to tell the rest. ",
            ],
            annex: [],
          },
          {
            title: "COCD-Box (option 1)",
            duration: "10",
            instructions: [
              "Use the COCD box to help you understand which ideas might be more interesting to you or others. Check out the canvas below, draw the canvas on a piece of paper and place your ideas in the boxes according to the description.",
            ],
            annex: [
              {
                label: "Cocd box template",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-cocd.jpg?alt=media&token=220206d3-4680-472f-9d37-c3e2ffc913be",
                url: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-cocd.jpg?alt=media&token=220206d3-4680-472f-9d37-c3e2ffc913be",
                type: "file",
              }
            ],
          },
          {
            title: "Dot-voting (option 2)",
            duration: "10",
            instructions: [
              "If you're unsure about which solution to choose, try dot-voting. Everyone gets 3 dots (stickers or drawn) to vote on their favorite ideas. You can put all your dots on one idea or spread them across different ones. Then, see which idea gets the most dots to decide which one to work on.",
            ],
            annex: [],
          },
        ],
      },
      {
        id: "prototyping",
        day: 2,
        title: "Prototyping",
        phase: "make",
        color: "#00B8F3",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "10.15",
        end: "12.00",
        what: [
          "Prototyping is about thinking with our hands, making our ideas tangible.",
        ],
        why: [
          "This helps us to test our ideas, encourages feedback from users or experts and leads to better solutions faster.",
        ],
        steps: [
          {
            title: "Work Agile",
            duration: "5",
            instructions: [
              "Use your team, this phase is all about splitting up the work and using each others strenghts.",
              "Split up in groups of two and keep each other posted on your progress.",
              "Use a kanban canvas to organize tasks. Write tasks on post-its and place them under to do, doing, or done.",
              "First, discover and decide what and how you want to prototpe by reading the following steps.",
              "Next, decide on tasks and who does what. Start with the most important ones, and check in with your team regularly.",
            ],
            annex: [],
          },
          {
            title: "Discover our Prototype Workshops",
            duration: "10",
            instructions: [
              "We prepared some workshops for you, that can help your team on your way to prototype. Please see the options below.", "First, watch the introduction video to understand what prototyping and user testing is all about.",
            ],
            annex: [
              {
                label: "Intro Prototyping and user testing",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-prototyping.jpeg?alt=media&token=67aab765-3fba-4737-9015-60db48e1c43a",
                url: "https://www.loom.com/share/2e9d68cab8084223bb65f082c06e818f?sid=1ea7f8c1-32dc-4785-9df2-06a102af5fed",
                type: "video",
              }
            ],
          },
          {
            title: "Option A: Design a logo with figma",
            duration: "?",
            instructions: [
              "What: we use Figma to design graphic elements, from a logo to a poster, banner, etc. With figma you can make professional looking graphics in no time.",
              "Why: if you want to visualise your idea quickly, this is the tool you need.",
            ],
            annex: [
              {
                label: "Design a logo with Figma",
                img: "https://miro.medium.com/v2/resize:fit:1400/1*hewxl4LWLeRY5d5_CvJKlw.png",
                url: "https://www.loom.com/share/dc6ec44a8c5c4f7796114993a70821c8?sid=799c6d51-339f-4219-80a8-6c2d48566766",
                type: "video"
              }
            ],
          },
          {
            title: "Option B: Design a website or app with figma",
            duration: "?",
            instructions: [
              "What: besides designing a logo, you can use figma for designing your app or website and even let it look and feel like a real website.",
              "Why: to be able to visualise an app or website quickly can help you to test your solution an improve it fast.",
            ],
            annex: [
              {
                label:"Design app or website with Figma video",
                img: "https://miro.medium.com/v2/resize:fit:1400/1*hewxl4LWLeRY5d5_CvJKlw.png",
                url: "https://www.loom.com/share/9088b5e097b94af2a32b9c867f2ccc23?sid=8c1ddc63-7508-422b-8141-ffd6410b8d51 ",
                type: ""
              }
            ],
          },
          {
            title: "Option C: Use AI tools to generate text and images",
            duration: "?",
            instructions: [
              "What: AI-tools are great to generate both high quality text and images in a very short amount of time, you only need to know how to use the tools",
              "Why: using AI can help you generate images for products or solutions that even not yet exists in the real world and can generate text or images to make your solution look very professional.",
            ],
            annex: [
              {
                label:"Use AI for prototyping video",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIi2nGPCptHyhCci4AlrjeiD1bOhfkTcfqw&usqp=CAU",
                url: "https://www.loom.com/share/ea582fdc9b374dcb9932f12a83aea205?sid=225efaee-db15-409e-a0e5-3e6882c7fc89 ",
                type: "video"
              }
            ],
          },
          {
            title: "Option D: Make a business model",
            duration: "?",
            instructions: [
              "What: we use the lean innovation canvas to summarize all 11 key aspects of every business, including: costs, profits, channels, problem, solutions, clients, competition, etc.",
              "Why: it summarizes your whole business model on one page and forces you to think through every operational aspect of your idea, so it's ready to launch into the real world.",
            ],
            annex: [
              {
                label: "Video ean business model canvas",
                img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fleanfoundry.com%2Ftools%2Flean-canvas&psig=AOvVaw29Gk51MYQN18iyQvcO2u9c&ust=1702302956468000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjkxuuChYMDFQAAAAAdAAAAABAD",
                url: "https://www.youtube.com/watch?v=pvIN9STpzCQ",
                type: "video"
              },
              {
                label: "Doc lean business model canvas",
                img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fleanfoundry.com%2Ftools%2Flean-canvas&psig=AOvVaw29Gk51MYQN18iyQvcO2u9c&ust=1702302956468000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjkxuuChYMDFQAAAAAdAAAAABAD",
                url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fleanfoundry.com%2Ftools%2Flean-canvas&psig=AOvVaw29Gk51MYQN18iyQvcO2u9c&ust=1702302956468000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjkxuuChYMDFQAAAAAdAAAAABAD",
                type: "file"
              }
            ],
          },
        ],
      },
      {
        id: "lunch-break-day-2",
        day: 2,
        title: "Lunch Break",
        phase: "lunch",
        color: "#3b3355",
        tools: [""],
        label: {},
        btns: [],
        start: "12.00",
        end: "13.00",
        what: [],
        why: [],
        steps: [
          {
            title: "",
            duration: "",
            instructions: ["", "", ""],
            annex: [],
          },
        ],
      },
      {
        id: "prototyping",
        day: 2,
        title: "Prototyping",
        phase: "make",
        color: "#00B8F3",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "13.00",
        end: "13.30",
        what: [
          "Prototyping is about thinking with our hands, making our ideas tangible.",
        ],
        why: [
          "This helps us to test our ideas, encourages feedback from users or experts and leads to better solutions faster.",
        ],
        steps: [
          {
            title: "Continue the work",
            duration: "5",
            instructions: [
              "Continue your prototyping work, don't forget to keep an eye on the deadline",
            ],
            annex: [],
          },
        ],
      },
      {
        id: "prototyping-p2",
        day: 2,
        title: "Prototyping",
        phase: "make",
        color: "#00B8F3",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "13.00",
        end: "13.30",
        what: [
          "Prototyping is about thinking with our hands, making our ideas tangible.",
        ],
        why: [
          "This helps us to test our ideas, encourages feedback from users or experts and leads to better solutions faster.",
        ],
        steps: [
          {
            title: "Continue the work",
            duration: "5",
            instructions: [
              "Continue your prototyping work, don't forget to keep an eye on the deadline",
            ],
            annex: [],
          },
        ],
      },
      {
        id: "pitch-prep",
        day: 2,
        title: "Prepare Pitch",
        phase: "make",
        color: "#00B8F3",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "13.30",
        end: "14.30",
        what: [
          "We are going to prepare a short, clear and convincing story about our challenge and our solution.",
        ],
        why: [
          "If we want to have success with our solution and our prototype, we have to make people care about the problem and our solution.",
        ],
        steps: [
          {
            title: "What is a Pitch?",
            duration: "5",
            instructions: [
              "Your solution can be great, but if people don't understand it, you might not be able to put it out in the world. A good pitch, or short story of 2 min can help you tell the story of your challenge and solution.",
              "In your pitch you want to take them on a small journey from problem to solution and show them why both the problem you're working on and the solution your team created are important. ",
              "To help you craft a clear story, we'll use a five step process. Download it below.",
            ],
            annex: [
              {
                label: "pitch video",
                img: "../assets/steps/efh-pitch.png",
                url: "",
                type: "video",
              },
              {
                label: "pitch template",
                img: "../assets/steps/efh-pitch.png",
                url: "",
                type: "file",
              },
            ],
          },
          {
            title: "Draft Your Pitch",
            duration: "30",
            instructions: [
              "Follow along with the template and starting drafting your pitch, ask advice to facilitators and give it a few tries.",
              "Make sure to write down your pitch, as you need to upload it for submission.",
              "Think about bringing in powerfull images, videos or other stuff you made from the prototyping phase.",
            ],
            annex: [],
          },
          {
            title: "Practice and Refine Your Pitch",
            duration: "25",
            instructions: [
              "A good pitch comes from testing it a dozen times. Practice within your team, ask a fellow student or teachers to listen",
              "Listen to their feedback and refine your pitch to make it better and more interesting and exciting for the audience",
            ],
            annex: [],
          },
        ],
      },
      {
        id: "submit-pitch",
        day: 2,
        title: "Submit Pitch",
        phase: "make",
        color: "#00B8F3",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "14.30",
        end: "14.45",
        what: ["Submit your pitch so that others can discover your work."],
        why: ["To give a stage for your curiosity."],
        steps: [
          {
            title: "Submit pitch",
            duration: "",
            instructions: [
              "Make sure you have your pitch written in text with you and at least one image, a powerpoint or another file to visualise your prototype.",
              "Upload it according to the last minute instructions (link and additional information will be added here).",
            ],
            annex: [],
          },
        ],
      },
      {
        id: "pitch-ceremony",
        day: 2,
        title: "Pitch Ceremony",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Ceremony",
            url: "https://us06web.zoom.us/j/89393259137?pwd=M9gLTd2vCk2nXZqGb7p8qZecaLj4Xl.1",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "12.00",
        end: "13.00",
        what: [
          "Listen to the live pitches of each team, presenting their work and results.",
        ],
        why: ["To allow other people to see your solution (and vote on it)."],
        steps: [
          {
            title: "Congrats, you made it!",
            duration: "60",
            instructions: [
              "Well done, you can be proud on the work you did the past days.",
              "Now is the time to shine, share your best pitch ever with the online audience and enjoy the ceremony.",
            ],
            annex: [
              {
                label: "Link to the Ceremony",
                img: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/efh-zoom.png?alt=media&token=1429d211-89d7-4aaa-85fa-f18f5e1e94f1",
                url: "https://us06web.zoom.us/j/89393259137?pwd=M9gLTd2vCk2nXZqGb7p8qZecaLj4Xl.1",
                type: "url",
              },
            ],
          },
        ],
      },
    ],
    overviewSpain: [
      {
        id: "kick-off-meeting",
        day: 1,
        title: "Kick-off Meeting",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Meeting",
            url: "https://www.google.com/url?q=https://us06web.zoom.us/j/87181181183?pwd%3DgkmQgFW8uTwMyRIvwaPZDq6KAhVbMy.1&sa=D&source=calendar&ust=1702497294134063&usg=AOvVaw1texXIGy16bHprj3B3G86V",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "09:00",
        end: "10:40",
        active: false,
      },
      {
        id: "challenge-selection",
        day: 1,
        title: "Challenge Selection",
        phase: "understand",
        color: "#17BC61",
        label: { label: "", color: "" },
        btns: [],
        start: "9.40",
        end: "10.00",
        active: false,
      },
      {
        id: "discover-activity",
        day: 1,
        title: "Discover Activity",
        phase: "understand",
        color: "#17BC61",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "10.00",
        end: "10.45",
        active: false,
      },
      {
        id: "research-preparation-activity",
        day: 1,
        title: "Research Preparation Activity",
        phase: "understand",
        color: "#17BC61",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "10.45",
        end: "11.45",
        active: false,
      },
      {
        id: "communicate-research-action",
        day: 1,
        title: "Communicate Research Action",
        phase: "understand",
        color: "#17BC61",
        tools: [
          {
            label: "google form",
            color: "",
            icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fgoogleforms-white.svg?alt=media&token=c2e11f38-a379-46af-aa9c-44208b48f961",
          },
        ],
        label: { label: "check-in", color: "#3B3355" },
        btns: [
          {
            icon: "",
            label: "Fill in Form",
            url: "https://forms.gle/qFMZzKcdk3vVNQGQA",
            bgColor: "",
            textColor: "",
          },
        ],
        start: "11.45",
        end: "12.00",
        active: false,
      },
      {
        id: "research-preparation-activity-p2",
        day: 1,
        title: "Research Prep and Execution",
        phase: "understand",
        color: "#17BC61",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "12.00",
        end: "13.00",
        active: false,
      },
      {
        id: "research-activity",
        day: 1,
        title: "Research Activity",
        phase: "understand",
        color: "#17BC61",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Expert and User Meeting",
            url: "https://www.google.com/url?q=https://us06web.zoom.us/j/82238591210?pwd%3D4V1SR1lK01Bj4UqpmQGFRILhZigPY2.1&sa=D&source=calendar&ust=1702497294134063&usg=AOvVaw3RXkeMC0q9DLOmyKBIl0Ue",
            bgColor: "",
            textColor: "",
          },
        ],
        start: "13.00",
        end: "13.45",
        active: false,
      },
      {
        id: "lunch-break-day-1",
        day: 1,
        title: "Lunch Break",
        phase: "lunch",
        color: "#3b3355",
        tools: [""],
        label: { label: "", color: "" },
        btns: [],
        start: "13.45",
        end: "14.45",
        active: false,
      },
      {
        id: "define-activity",
        day: 1,
        title: "Define Activity",
        phase: "define",
        color: "#FF6C11",
        tools: [],
        label: { label: "", color: "" },
        btns: [],
        start: "14.45",
        end: "15.15",
        active: false,
      },
      {
        id: "share-how-might-we-questions",
        day: 1,
        title: "Share How Might We Questions",
        phase: "define",
        color: "#FF6C11",
        tools: [
          {
            label: "google forms",
            color: "",
            icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fgoogleforms-white.svg?alt=media&token=c2e11f38-a379-46af-aa9c-44208b48f961",
          },
        ],
        label: { label: "check-in", color: "#3b3355" },
        btns: [{ icon: "", label: "Fill in Form", url: "https://forms.gle/xTg8V7sn7eP3mPAT9", bgColor: "", textColor: "" }, {icon: "", label:"Feedback Form", url: "https://forms.gle/vSG14FhJe2Xm2KyJ7", bgColor:"", textColor:""}],
        start: "15.15",
        end: "15.40",
        active: false,
      },
      {
        id: "wrap-up-day-1",
        day: 1,
        title: "Wrap-up Day 1",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Meeting",
            url: "https://us06web.zoom.us/j/89132899515?pwd=XZMxT2VETaJBAbfTLFcDtQEACeQcyy.1",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "15.40",
        end: "16.00",
        active: false,
      },
      {
        id: "welcome-meeting",
        day: 2,
        title: "Welcome Meeting",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Meeting",
            url: "https://us06web.zoom.us/j/81077140513?pwd=daThjpsioMf6Dx8rbhqpDMCcAWHaqa.1",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "09.00",
        end: "09.15",
        active: false,
      },
      {
        id: "brainstorm",
        day: 2,
        title: "Brainstorm",
        phase: "ideate",
        color: "#FFB01F",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
          { label: "miro", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fmiro-white.svg?alt=media&token=0a3d35ef-6c26-4ee1-b5a8-e377082459bf" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Workspace",
            url: "",
            bgColor: "",
            textColor: "",
          },
          {
            icon: "",
            label: "Join Meeting",
            url: "https://us06web.zoom.us/j/85616224067?pwd=bXCbu5A1PZDoHcoOsOeyEtl9sExvFB.1",
            bgColor: "",
            textColor: "",
          },
        ],
        start: "09.15",
        end: "10.00",
        active: false,
      },
      {
        id: "idea-selection",
        day: 2,
        title: "Idea Selection",
        phase: "ideate",
        color: "#FFB01F",
        tools: [],
        label: { label: "", color: "" },
        btns: [],
        start: "10.00",
        end: "10.15",
        active: false,
      },
      {
        id: "prototyping",
        day: 2,
        title: "Prototyping",
        phase: "make",
        color: "#00B8F3",
        tools: [],
        label: { label: "", color: "" },
        btns: [],
        start: "10.15",
        end: "13.00",
        active: false,
      },
      {
        id: "pitch-prep",
        day: 2,
        title: "Prepare Pitch",
        phase: "make",
        color: "#00B8F3",
        tools: [],
        label: { label: "", color: "" },
        btns: [],
        start: "13.00",
        end: "13.45",
        active: false,
      },
      {
        id: "lunch-break-day-2",
        day: 2,
        title: "Lunch Break",
        phase: "lunch",
        color: "#3b3355",
        tools: [],
        label: {},
        btns: [],
        start: "13.45",
        end: "14.30",
        active: false,
      },
      {
        id: "submit-pitch",
        day: 2,
        title: "Submit Pitch",
        phase: "make",
        color: "#00B8F3",
        tools: [],
        label: { label: "check-in", color: "#3B3355" },
        btns: [{ icon: "", label: "Submit Pitch", url: "", bgColor: "", textColor: "" }],
        start: "14.30",
        end: "14.45",
        active: false,
      },
      {
        id: "pitch-ceremony",
        day: 2,
        title: "Pitch Ceremony",
        phase: "touchpoint",
        color: "#9510AC",
        tools: [
          { label: "zoom", color: "", icon: "https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/icons%2Fzoom-white.svg?alt=media&token=a3350573-2526-4f7b-8b6f-d4d3556d3ead" },
        ],
        label: { label: "online", color: "#FFFFFF" },
        btns: [
          {
            icon: "",
            label: "Join Ceremony",
            url: "https://us06web.zoom.us/j/89393259137?pwd=M9gLTd2vCk2nXZqGb7p8qZecaLj4Xl.1",
            bgColor: "#98FF98",
            textColor: "#9510AC",
          },
        ],
        start: "14.45",
        end: "16.00",
        active: false,
      },
    ],
  }),
  getters: {
    getSteps(state){
      return state.steps;
    },
    getStepById: (state => {
      return (stepId) => state.steps.find((step) => step.id === stepId)
    })
  },
  actions: {
  },
});
