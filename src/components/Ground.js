import { usePlane } from '@react-three/cannon';
import {grassTexture} from '../images/textures';
import {useStore} from '../hooks/useStore'


export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI/2, 0, 0], position: [0, -0.5, 0]
  }));

  const [addCube] = useStore((state) => [state.addCube]);

  grassTexture.repeat.set(100,100);

  return (
    <mesh
      onClick={(e) =>{
        e.stopPropagation()
        const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val));
        addCube(x-0.5, y, z-0.5)

      }}
      ref={ref}>
      <planeBufferGeometry attach={'geometry'} args={[100,100]}/>
      <meshStandardMaterial attach={'material'} map={grassTexture}/>
    </mesh>
  );
};

export default Ground;
