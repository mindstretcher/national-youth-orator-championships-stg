
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import WhyTakePart from '@/components/WhyTakePart';
import WhoCanJoin from '@/components/WhoCanJoin';
import HowToJoin from '@/components/HowToJoin';
import Divisions from '@/components/Divisions';
import ExplainerVideo from '@/components/ExplainerVideo';
import OurJudges from '@/components/OurJudges';
import Timeline from '@/components/Timeline';
import FAQ from '@/components/FAQ';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="National Youth Orator Championships 2025 - SG60 Edition" 
        description="A national platform empowering Singapore's youth to become confident communicators. Join the SG60 Edition: My Singapore. Finals: 13 September 2025."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['speaking competition', 'Singapore youth', 'SG60', 'oratory', 'public speaking', 'national competition', 'Mind Stretcher', 'Master Speakers']}
      />
      <Hero />
      <div id="why-take-part">
        <WhyTakePart />
      </div>
      <div id="who-can-join">
        <WhoCanJoin />
      </div>
      <HowToJoin />
      <Divisions />
      <ExplainerVideo />
      <OurJudges />
      <Timeline />
      <div id="faq">
        <FAQ />
      </div>
    </PageLayout>
  );
};

export default Index;
