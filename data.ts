import { ContactInfo, Education, Experience, Publication, TimelineItem, Highlight, Book } from './types';

export const contactInfo: ContactInfo = {
  name: "Kshitij Dahal",
  title: "PhD Candidate & Researcher in Data-Driven Hydrology",
  address: "RM 410, 777 E University Dr, Tempe, AZ, USA",
  phone: "+1 (480) 919 6738",
  emails: ["kdahal3@asu.edu", "geokshitij@gmail.com"],
  links: [
    { name: 'Website', url: 'https://geokshitij.github.io/', icon: 'globe' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=jOtnPBIAAAAJ&hl=en&oi=ao', icon: 'scholar' },
    { name: 'ORCID', url: 'https://orcid.org/0000-0002-5563-7629', icon: 'orcid' },
    { name: 'CV', url: 'https://docs.google.com/document/d/1Mndv6ZTSUXTpm0GEMDLeL1c7mdpGmSMvqs4Vk6foDeA/edit?usp=sharing', icon: 'cv' },
    { name: 'GitHub', url: 'https://github.com/geokshitij', icon: 'github'},
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/geokshitij/', icon: 'linkedin'},
    { name: 'Facebook', url: 'https://www.facebook.com/geokshitij', icon: 'facebook' },
    { name: 'Twitter', url: 'https://twitter.com/geokshitij', icon: 'twitter' },
  ],
};

export const aboutMeText = `Hello नमस्ते 🙏, I'm a [WaterDMD](https://waterdmd.info/) PhD student at [Arizona State University](https://search.asu.edu/profile/4585448) (ASU). I am originally from very beautiful Nepal, the land of Himalayas. My research are focused on **data-driven hydrology**, decision support systems in geosciences, and the innovative use of earth observation and machine learning techniques. Recently, I'm more into the self-supervised learning, *explainable* machine learning and seeking to make *AI in earth sciences* more interpretable and accessible.

Feel free to reach out or check my [CV](https://docs.google.com/document/d/1Mndv6ZTSUXTpm0GEMDLeL1c7mdpGmSMvqs4Vk6foDeA/edit?usp=sharing) and [Publications](https://scholar.google.com/citations?user=jOtnPBIAAAAJ&hl=en&oi=ao) for more information.`;


export const education: Education[] = [
  { degree: "PhD, Civil, Environmental and Sustainable Engineering", university: "Arizona State University", location: "Arizona, USA", dates: "Aug 2026 (Expected)" },
  { degree: "MS, Civil, Environmental and Sustainable Engineering", university: "Arizona State University", location: "Arizona, USA", dates: "Aug 2025 (Expected)" },
  { degree: "BE, Civil Engineering", university: "Tribhuvan University", location: "Nepal", dates: "2015 – 2019" },
];

export const employment: Experience[] = [
  { title: "Graduate Research Associate", organization: "Arizona State University", location: "Arizona, USA", dates: "Dec 2022 – Present", description: [
      "Developing and implementing deep learning models for hydrological forecasting.",
      "Utilizing explainable AI (XAI) to analyze groundwater potential in mountainous regions.",
      "Collaborating on projects involving remote sensing and big data analytics for water resource management."
  ]},
  { title: "Graduate Teaching Assistant", organization: "Arizona State University", location: "Arizona, USA", dates: "Aug 2023 – May 2024", description: [
      "Assisted in teaching undergraduate and graduate courses including Fluid Mechanics and Numerical Methods.",
      "Mentored students, graded assignments, and led lab sessions to enhance learning outcomes."
  ]},
  { title: "Researcher (Natural Hazards Section)", organization: "Himalayan Risk Research Institute", location: "Bhaktapur, Nepal", dates: "Mar 2019 – Dec 2022", description: [
      "Conducted research on multi-hazard risk assessment and landslide susceptibility mapping.",
      "Contributed to technical reports and publications for organizations like UNDRR.",
      "Applied GIS and remote sensing techniques to analyze disaster risk."
  ]},
  { title: "Asst. Lecturer, Civil Engineering", organization: "Khwopa College of Engineering, Tribhuvan University", location: "Nepal", dates: "Nov 2019 – Oct 2021", description: [
      "Taught courses in Engineering Hydrology, Surveying, and GIS.",
      "Developed course materials and supervised student projects."
  ]},
];

export const timelineItems: TimelineItem[] = [
    ...education.map(e => ({...e, type: 'education' as const})),
    ...employment.map(e => ({...e, type: 'experience' as const}))
].sort((a,b) => parseInt(b.dates.slice(-4)) - parseInt(a.dates.slice(-4)));


export const publications: Publication[] = [
    {
        authors: "Dahal, K., Gupta, A., Bokati, L. & Kumar, S.*",
        year: "Under Review",
        title: "Improving Hydrological Forecasting with Bayesian Model Averaging Over Multiple Loss Functions",
        journal: "Applied Soft Computing",
        status: "Under Review"
    },
    {
        authors: "Dahal, K.*, Talchabhadel, R., Pradhan, P., et al.",
        year: 2025,
        title: "Nepal's carbon stock and biodiversity are under threat from climate exacerbated forest fires",
        journal: "Information Geography",
        link: "https://doi.org/10.1016/j.infgeo.2025.100003",
        featured: true,
    },
    {
        authors: "Pradhan, P., Joshi, S., Dahal, K., Hu, Y., et al.",
        year: 2025,
        title: "Policy Relevance of IPCC Reports for the SDGs and Beyond",
        journal: "Resources, Environment and Sustainability (Invited Editorial)",
        link: "https://doi.org/10.1016/j.resenv.2025.100192"
    },
    {
        authors: "Pradhan, P., Subedi, D. R., Dahal, K., Hu, Y., et al.",
        year: 2024,
        title: "Urban agriculture matters for sustainable development",
        journal: "Cell Reports Sustainability",
        link: "https://doi.org/10.1016/j.crsus.2024.100217"
    },
    {
        authors: "Dahal, K.*, Sharma, S., Shakya, A., et al.",
        year: 2023,
        title: "Identification of groundwater potential zones in data-scarce mountainous region using explainable machine learning",
        journal: "Journal of Hydrology",
        link: "https://doi.org/10.1016/j.jhydrol.2023.130417",
        featured: true,
    },
    {
        authors: "Dahal, K.*, & Gnyawali, K.R.",
        year: 2023,
        title: "Mapping landslide susceptibility and critical infrastructure for spatial decision-making",
        journal: "Sustainable and Resilient Infrastructure",
        link: "https://www.tandfonline.com/doi/full/10.1080/23789689.2023.2181552",
        featured: true,
    },
    {
        authors: "Talchabhadel, R., Maskey, S., Gouli, M. R., Dahal, K.*, et al.",
        year: 2023,
        title: "Multimodal multiscale characterization of cascading hazard on mountain terrain",
        journal: "Geomatics, Natural Hazards and Risk",
        link: "https://doi.org/10.1080/19475705.2022.2162443"
    },
    {
        authors: "Gnyawali, K., Dahal, K., Talchabhadel, R., & Nirandjan, S.",
        year: 2023,
        title: "Framework for rainfall-triggered landslide-prone critical infrastructure zonation",
        journal: "Science of the Total Environment",
        link: "https://doi.org/10.1016/j.scitotenv.2023.162242"
    },
    {
        authors: "Teck, V., Poortinga, A., Riano, C., Dahal, K., et al.",
        year: 2023,
        title: "Land use and land cover change implications on agriculture and natural resource management of Koah Nheaek, Mondulkiri province, Cambodia",
        journal: "Remote Sensing Applications: Society and Environment",
        link: "https://doi.org/10.1016/j.rsase.2022.100895"
    },
    {
        authors: "Bera, S., Gnyawali, K., Dahal, K., Melo, R., et al.",
        year: 2023,
        title: "Assessment of shelter location-allocation for multi-hazard emergency evacuation",
        journal: "International Journal of Disaster Risk Reduction",
        link: "https://doi.org/10.1016/j.ijdrr.2022.103435"
    },
    {
        authors: "Pradhan, P., Callaghan, M., Hu, Y., Dahal, K., et al.",
        year: 2023,
        title: "A systematic review highlights that there are multiple benefits of urban agriculture besides food",
        journal: "Global Food Security",
        link: "https://doi.org/10.1016/j.gfs.2023.100700"
    },
    {
        authors: "Pandey, H. P., Gnyawali, K., Dahal, K., & Pokhrel, N. P.",
        year: 2022,
        title: "Vegetation loss and recovery analysis from the 2015 Gorkha earthquake (7.8 Mw) triggered landslides",
        journal: "Land Use Policy",
        link: "https://www.sciencedirect.com/science/article/pii/S0264837722002125"
    },
    {
        authors: "Sharma, S., Dahal, K., Nava, L., et al.",
        year: 2022,
        title: "Natural Hazards Perspectives on Integrated, Coordinated, Open, Networked (ICON) Science",
        journal: "Earth and Space Science",
        link: "https://doi.org/10.1029/2021EA002114"
    },
    {
        authors: "Talchabhadel, R., Panthi, J., Sharma, S., et al.",
        year: 2021,
        title: "Insights on the Impacts of Hydroclimatic Extremes and Anthropogenic Activities on Sediment Yield of a River Basin",
        journal: "Earth",
        link: "https://doi.org/10.3390/earth2010003"
    }
];

export const highlights: Highlight[] = [
    { date: "Mar/2025", description: "**New paper!!**: **Dahal, K.,** et al. (2025). Nepal's carbon stock and biodiversity are under threat from climate exacerbated forest fires. *Information Geography*. [Link](https://doi.org/10.1016/j.infgeo.2025.100003)" },
    { date: "Mar/2025", description: "News coverage on our forest fire paper in [The Himalayan Times](https://thehimalayantimes.com/nepal/wildfire-season-has-begun-but-the-worst-is-yet-to-come), [The Kathmandu Post](https://kathmandupost.com/money/2025/03/17/wildfires-put-500m-tonnes-of-carbon-and-tourism-at-risk), [Himal Khabar](https://www.himalkhabar.com/news/144165), and more." },
    { date: "Feb/2025", description: "**New paper!!**: Pradhan, P., et al. (2025). Policy relevance of IPCC reports for the sustainable development goals and beyond. *Resources, Environment and Sustainability*. [Link](https://www.sciencedirect.com/science/article/pii/S2666916125000040)" },
    { date: "Jan/2025", description: "Snow School: Where Science Meets Adventure!!! [Read Here](https://www.linkedin.com/pulse/snow-school-where-science-meets-adventure-kshitij-dahal-zwjrc/?trackingId=hUwnmJ4QSUSR%2BIuVvLJZFA%3D%3D)" },
    { date: "Oct/2024", description: "Awarded outstanding poster for “A Framework to Improve Hydrological Forecasting with Deep Learning”, ASU Flow 2024. [Link](https://azhydrosoc.org/asu-flow-2024-wrap-up/)" },
    { date: "Oct/2024", description: "Presented \"Operational Streamflow Forecasting Tool for Arizona Streams\" at CMWR 2024. [Slide](https://docs.google.com/presentation/d/1LjwKrJD8s7qcY5HcRNODqggBh8aOAT3zeEddm0nhh08/edit?usp=sharing)" },
    { date: "Sep/2024", description: "**New paper!!**: Pradhan, P., et al. (2024). Urban agriculture matters for sustainable development. *Cell Reports Sustainability*. [Link](https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(24)00349-5)" },
    { date: "Aug/2024", description: "Check out my bungee jump! [Watch here](https://youtu.be/_k8ajc2czOg?si=5__kRAOSrbCU3AfI&t=51)" },
    { date: "May/2024", description: "Selected as a Community Science Fellow by the American Geophysical Union Thriving Earth Exchange. [Link](https://thrivingearthexchange.org/blog/meet-the-may-2024-cohort-of-community-science-fellows/)" },
    { date: "Feb/2024", description: "Awarded Travel Grant for Remote Sensing of the Water Cycle Chapman, HI, USA." },
    { date: "Jan/2024", description: "Joined the Editorial Advisory Board of the [*Regional Environmental Change*](https://link.springer.com/journal/10113) journal." },
    { date: "Dec/2023", description: "Water Quality Tiny Grant (HaikuYourResearch), American Geophysical Union, AGU Fall Meeting." },
    { date: "Dec/2023", description: "**New paper!!**: **Dahal, K.*,** et al. (2023). Identification of groundwater potential zones in data-scarce mountainous region using explainable artificial intelligence. *Journal of Hydrology*. [Link](https://doi.org/10.1016/j.jhydrol.2023.130417)" },
    { date: "June/2023", description: "Winner of the 2023 graphical abstract competition organized by the AGU Catchment Hydrology Technical Committee." },
    { date: "May/2023", description: "Presented at the 2023 World Environmental & Water Resources Congress on groundwater potential mapping in Nepal." },
    { date: "March/2023", description: "Hackathon Winner (1st place) at the SpaceHack for Sustainability, Arizona State University. [Link](https://www.spacehack4sustainability.com/s4s2023)" },
    { date: "Dec/2022", description: "Started a PhD journey in Civil, Environmental, and Sustainable Engineering at Arizona State University. [Link](https://search.asu.edu/profile/4585448)" },
    { date: "July/2021", description: "Awarded a CDRI research grant of $10,000 for landslide susceptibility mapping in Nepal. [Link](https://cdri.world/fellowship/cohort/2021-22/project/framework-for-landslide-prone-critical-infrastructure-zoning)" },
];

export const wisdom: string[] = [
    "Ignorance is not bliss.",
    "Plans should be measured in decades, execution should be measured in weeks.",
    "Working with great people is the greatest experience of life.",
    "If you study the subject you like for 1 hour/day, you will become a national expert within 5 years.",
    "10x goals are easier than 2x goals.",
    "You learn more by teaching something than by studying it as a student.",
    "If you can imagine it, you can already do it.",
    "Hate the crime, but love the criminal.",
    "The concepts of good and bad are not inherent in reality; they are human constructs shaped by perspectives, experiences, and cultural contexts.",
    "Most people are helpful if you simply ask."
];

export const books: Book[] = [
    { title: "The Power of Now", author: "Eckhart Tolle" },
    { title: "How to Win Friends and Influence People", author: "Dale Carnegie" },
    { title: "Atomic Habits", author: "James Clear" },
    { title: "Seasons of Life", author: "Jim Rohn" },
    { title: "The Five Major Pieces to the Life Puzzle", author: "Jim Rohn" },
    { title: "The Richest Man in Babylon", author: "George Samuel Clason" }
];

export const dataScienceEssay = `In a traditional approach, we lean on centuries of scientific thought, painstakingly piecing together processes—like runoff, infiltration, groundwater flow, and sediment transport—into large, complex models. Now, with an explosion of data and machine learning methods, there’s a push to let the data itself guide our understanding. Instead of relying solely on a stack of equations, we stitch together relationships through patterns found in the data. It feels like a new kind of science, one where we feed in enough observations and let flexible algorithms fill in the gaps.

But as exciting as this is, I also worry about what happens when we step into completely uncharted territory. Data-driven models might predict well within the range of what we’ve seen before enough, but how do they hold up in never-before-seen conditions? That’s where these methods might struggle. We might need more than just neural networks connecting the dots, we might need models that learn underlying mechanisms, not just correlations. The dream is some hybrid approach that understands processes at a very fundamental level while still leveraging the power of massive datasets?

At the same time, there’s never been a better moment to dig deeper into data. With decades’ worth of satellite imagery, sensor networks, and massive archives of measurements, we’re definitely equipped to get creative. We need to look beyond just predicting tomorrow’s river flow and start asking bigger questions about our water resources—how they change, what they carry, and where they’re heading. If we can figure out how to generalize these methods, to make them robust against uncertainty and new scenarios, the payoff could be huge. It might take quantum computing or entirely new algorithms to get there, but the vision is clear: blending data-driven insights with fundamental processes could open up horizons in hydrology we’re only just starting to imagine.`;

export const vipassanaEssay = `I first became curious about Vipassana after reading The Power of Now by Eckhart Tolle. Although I don’t remember every detail of that book, it really made me think about the mind’s constant chatter and how we might quiet it. Nepal is a place proud to be the birthplace of Gautam Buddha, and while I can’t say I understand his teachings, I knew he was closely associated with Vipassana. I learned that S.N. Goenka, an Indian teacher, helped bring this ancient meditation technique to modern students worldwide. People spoke of it as an authentic teaching of Buddha passed down through generations, preserved in places like Myanmar, and then reintroduced to India and beyond.

When I signed up for a 10-day Vipassana course, I had no idea what to expect. The rules were strict: no phones, no books, and no talking. The schedule felt intense—waking up at 4:30 AM to meditate all day until about 9:30 PM. Surprisingly, I didn’t find it too difficult to adapt. Sure, I overslept few times and got a gentle reminder from the course helpers, but overall, I managed. The first three days focused entirely on Anapana, the observation of the breath. It seemed simple at first—just watch your breath, right? But quickly I realized how many random thoughts flood into my mind at every moment. The whole exercise became a lesson in noticing the non-stop mental chatter and learning not to engage with it. Over time, I realized that the mind, left unchecked, can run wild, and that learning to switch it off (or at least down) was possible, if challenging. One of the way I learned from Eckhart Tolle was to ask your mind: whats your next thought? This actually helped my brain slow down.

After three days, we moved on to Vipassana itself: scanning the body and observing sensations without judgment. The idea wasn’t just to see what’s there, but to understand that everything arises and passes away. Pain, itchiness, discomfort—these felt so immediate and personal at first, yet with practice, I saw them come and go. Nothing belonged to me permanently. This had echoes of Tolle’s ideas about staying in the present moment. When you pay close attention, the mind’s constant story-making halts. You become aware that your brain is just another organ, not the sum of who you are. By the end of the retreat, I understood that what I considered “me” was really just a shifting collection of sensations and thoughts that never stayed the same for long.

I’ve heard people say that if you meditate deeply for long stretches, you’ll need less sleep because your mind isn’t working overtime all day. I have heard people not sleeping and still ok for 2 months. While that might be an extreme claim, I did notice a certain mental lightness, as if I had more control over my thoughts instead of them controlling me. The course didn’t answer all my big questions about life, the brain, or the universe, but it gave me a new perspective on how I relate to my own mind and body. I realized that if I could step back from my thoughts and sensations, I could also step back from my cravings, fears, and distractions. Suddenly, it felt possible to break bad habits or addictions just by not feeding them with constant mental energy.

It’s been a few years since I took that course, and I don’t practice Vipassana regularly now. But the lessons stuck with me. I no longer feel so powerless against my wandering mind. I know that I can watch it, notice it drifting, and gently bring it back. I learned something interesting: I could create a sort of duality within myself, almost like splitting into two versions of me. One part would experience my thoughts, sensations, and reactions, while the other would watch this unfolding as if from the outside. It was like observing myself as I might observe another person, seeing my habits, judgments, and struggles with a kinder, more detached perspective. This small mental trick turned out to be a powerful way to approach difficult emotions and challenges.

I recommend Vipassana to anyone curious about quieting the noise inside their head, even if it’s just once. My experience in Nepal showed me that true stillness might be closer than we think—waiting behind each breath.`;

export const lawOfAveragesEssay = `Sometimes, we really want to stand out—become extraordinary or an outlier in whatever we do. But then reality hits, and we can’t even achieve what’s considered “average.” It can feel pretty brutal when you don’t get admitted to the school you wanted, or you apply to a hundred jobs and nobody ever replies. You email tons of professors and still end up with no response. It’s frustrating, I know.

This is where the Law of Averages can help us out. The idea is simple: if you keep trying enough times, something will eventually work out. It’s like if you send out a hundred job applications, there’s a higher chance that at least one will give you a shot. If you submit your paper to multiple journals, one of them might accept it. No matter how “bad” you think you are, if you keep pushing, your odds improve. You basically increase the probability of success by sheer persistence.

This reminds me of that saying: if you want something bad enough, the world somehow aligns to help you get it. It’s also kind of what the Bhagavad Gita teaches us: don’t worry so much about the end result, just focus on doing your work. Keep trying, keep pushing, and don’t overthink it. Eventually, something’s got to give. It’s a pretty good reminder!!`;

export const timeManagementEssay = `Time management really starts with having a clear goal. If you don’t even know what you want, there’s no point in managing your time—just wing it, right? But once you’ve got a goal, that’s when it makes sense to organize yourself.

A good approach is to list out everything you need to do. Just write it all down, no matter how big or small. Then, rank these tasks based on the consequences of doing or not doing them. For example, if not doing something will lead to terrible outcomes, that’s clearly high priority. If doing something leads to really good results, that’s also super important. But if a task doesn’t move the needle in any direction, it’s probably not that important. Once you’ve sorted them, start doing the tasks from the top of the list. Even if you miss out on lower-ranked tasks, who cares? The big stuff will still get done.

Jim Rohn suggests planning your day before it begins, your week before it starts, and so on. Setting goals for the month before it begins, or just sitting down in the morning to decide what needs doing. You can do this on a Google Doc or any note-taking app. Keep a running list, mark things off as you finish them, and that’s it. It’s not about forcing yourself into a rigid schedule; it’s just about knowing what matters and making sure you do that first. That’s probably good enough to stay on track.`;
