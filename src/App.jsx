import AboutComponent from "./components/About/AboutComponent";
import AcademicComponent from "./components/AcademicComponent/AcademicComponent";
import Contact from "./components/Contact/ContactComponent";
import ExperienceComponent from "./components/Experience/ExperienceComponent";
import HobbiesComponent from "./components/Hobbies/HobbiesComponent";
import LanguagesComponent from "./components/Languages/LanguagesComponent";
import PictureComponent from "./components/Picture/PictureComponent";
import SkillsComponent from "./components/Skills/skillsComponent";
import "./App.css";
function App() {
  const academicData = [
    {
      degree: "Bachelor's Degree in Psychology",
      institute: "Higher Institute of Human Sciences of Tunis",
      year: "2024",
    },
    {
      degree:
        "Professional Master's in Telecommunications Networks and Systems",
      institute: "Faculty of Sciences of Tunis",
      year: "2015",
    },
    {
      degree:
        "Applied Bachelor's in Information and Communication Sciences and Technologies",
      institute: "Faculty of Sciences of Tunis",
      year: "2012",
    },
  ];
  ////
  const professionalExperiences = [
    {
      role: "WordPress Developer",
      company: "Psynapse",
      period: "2023 - Present",
      description: "Website development using WordPress CMS.",
    },
    {
      role: "Webmaster",
      company: "Léni Tunisia",
      period: "2019 - 2020",
      description:
        "Website development in the event industry. The CMS used was developed by the Léni team.",
    },
    {
      role: "Quality Operator",
      company: "IMR Tunisia",
      period: "2016 - 2017",
      description:
        "Responsible for verifying websites archived by web crawling engineers.",
    },
  ];
  //Skills list
  const skillsData = [
    { name: "HTML", icon: "html.png" },
    { name: "CSS", icon: "css.png" },
    { name: "JavaScript", icon: "javascript.png" },
    { name: "Bootstrap", icon: "bootstrap.png" },
    { name: "WordPress", icon: "wordpress.png" },
    { name: "react", icon: "react.png" },

    { name: "Git", icon: "git.png" },
    { name: "Prompt Engineering", icon: "prompt.png" },
  ];
  //contact list

  const contactData = [
    { label: "Location", value: "Tunis" },
    { label: "Phone", value: "+216 29270576" },
    { label: "Email", value: "maryambouchami@gmail.com" },
    { label: "GitHub", value: "github.com/Maryam-Bouchami" },
    { label: "LinkedIn", value: "linkedin.com/in/maryam-bouchami-19566bb3" },
  ];
  return (
    <div className="globalContent">
      <div className="first-Line">
        <PictureComponent />
        <AboutComponent />
        <Contact contactData={contactData} />
      </div>
      <div className="second-Line">
        <AcademicComponent academicData={academicData} />

        <ExperienceComponent
          professionalExperiences={professionalExperiences}
        />
      </div>

      <div className="third-Line">
        <LanguagesComponent />
        <HobbiesComponent />
        <SkillsComponent skillsData={skillsData} />
      </div>
    </div>
  );
}

export default App;
