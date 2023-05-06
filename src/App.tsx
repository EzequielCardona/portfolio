import Footer from './features/footer';
import NavMenu from './features/navMenu';
import { useCheckUserControlPrefs } from './hooks';
import Screens from './screens';

function App() {
  useCheckUserControlPrefs();

  return (
    <>
      <NavMenu />
      <Screens />
      <Footer />
    </>
  );
}

export default App;
