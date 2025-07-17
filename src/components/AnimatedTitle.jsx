import { useEffect, useState } from 'react';

const name = 'vishal_sundaram';
const spinnerFrames = ['|', '/', '-', '\\'];

export default function AnimatedTitle() {
  const [display, setDisplay] = useState('_');

  useEffect(() => {
    let frameIndex = 0;
    let cycles = 0;
    let nameIndex = 0;
    let dots = '';
    let thing = 0;
    let phase = 'spinner';

    const interval = setInterval(() => {
      if (phase === 'spinner') {
        setDisplay(spinnerFrames[frameIndex]);
        frameIndex = (frameIndex + 1) % spinnerFrames.length;
        if (frameIndex === 0) cycles++;
        if (cycles === 3) phase = 'typing';
      } else if (phase === 'typing') {
        if (nameIndex <= name.length) {
        setDisplay( name.slice(0, nameIndex) + '_');
          nameIndex++;
        } else {
          phase = 'dots';
        }
      }else if(phase == 'dots')setDisplay(name);

    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <h1 className="arialBold">{display}</h1>;
}