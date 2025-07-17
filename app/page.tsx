import Calculator from '../components/Calculator';
import ShinyText from '../components/ShinyText';
import SplashCursor from '../components/SplashCursor';
import Particles from '../components/Particles';

export default function Home() {
  return (
    <main className="bg-black h-screen flex justify-center items-center">
      <Particles
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={200}
        moveParticlesOnHover={false}
        alphaParticles={true}
      />
      <SplashCursor />
      <div className='absolute h-215 w-400 flex justify-center items-center flex-col'>
        <ShinyText text="The most overly-designed calculator" disabled={false} speed={3} className='select-none font-bold text-7xl my-10' />
        <Calculator />
      </div >
    </main >
  );
}
