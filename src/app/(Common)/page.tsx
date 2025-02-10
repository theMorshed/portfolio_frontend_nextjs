import Banner from "./_components/Banner";
import ContactSection from "./_components/Contact";
import ExperienceEducationSection from "./_components/ExperienceEducation";
import Footer from "./_components/Footer";
import RecentProjects from "./_components/RecentProjects";
import SkillsSection from "./_components/Skills";
import StatsSection from "./_components/Stats";

export default function Home() {
    return (
        <div>
            <Banner />
            <SkillsSection />
            <StatsSection />
            <ExperienceEducationSection />
            <RecentProjects />
            <ContactSection />
            <Footer />
        </div>
    );
}
