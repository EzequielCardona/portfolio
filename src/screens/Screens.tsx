import AboutMeScreen from './aboutMeScreen';
import { ContactScreen } from './contactScreen/ContactScreen';
import ExperienceScreen from './experienceScreen';
import LandingScreen from './landingScreen';
import { ProjectsScreen } from './projectsScreen/ProjectsScreen';

export function Screens() {
  return (
    <>
      <LandingScreen />
      <AboutMeScreen />
      <ExperienceScreen />
      <ProjectsScreen />
      <ContactScreen />
    </>
  );
}
