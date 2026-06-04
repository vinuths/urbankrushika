import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import PlantGifting from "../components/home/PlantGifting";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessSection from "../components/home/ProcessSection";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";
import PageWrapper from "../components/common/PageWrapper";
const Home = () => {
  return (
    <PageWrapper>
    <MainLayout>
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <PlantGifting />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <ContactCTA />
    </MainLayout>
    </PageWrapper>
  );
};

export default Home;