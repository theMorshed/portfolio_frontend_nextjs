import Banner from "./_components/Banner";
import ContactSection from "./_components/Contact";
import { EducationSection } from "./_components/EducationSection";
// import ExperienceEducationSection from "./_components/ExperienceEducation";
import { ExperienceSection } from "./_components/Experiences";
import LatestBlogs from "./_components/LatestBlogs";
import RecentProjects from "./_components/RecentProjects";
import SkillsSection from "./_components/SkillsSection";
// import SkillsSection from "./_components/Skills";
// import StatsSection from "./_components/Stats";

export default function Home() {
    return (
        <div>
            <Banner />
            {/* <SkillsSection /> */}
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            {/* <StatsSection /> */}
            {/* <ExperienceEducationSection /> */}
            <LatestBlogs />
            <RecentProjects />
            <ContactSection />            
        </div>
    );
}
