import Head from "next/head";
import PersonalLayout from "../components/personal/Layout";
import Hero from "../components/personal/Hero";
import Story from "../components/personal/Story";
import About from "../components/personal/About";
import Experience from "../components/personal/Experience";
import Projects from "../components/personal/Projects";
import SkillsEducation from "../components/personal/SkillsEducation";
import Contact from "../components/personal/Contact";

function Index() {
  return (
    <>
      <Head>
        <title>Alan Hu - Software Engineer & AI/ML Enthusiast</title>
        <meta
          name="description"
          content="Alan Hu - CS @ UPenn | Incoming Software Engineer Intern @ Meta. Passionate about AI/ML, software engineering, and low latency systems."
          key="description"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PersonalLayout>
        <Hero />
        <Story />
        <About />
        <Experience />
        <Projects />
        <SkillsEducation />
        <Contact />
      </PersonalLayout>
    </>
  );
}

export default Index;

