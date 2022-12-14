import {useBox} from '@react-three/cannon'
import * as textures from '../images/textures'
import {useStore} from "../hooks/useStore";

export const Cube = ({position, texture}) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position

  }));

  const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube]);

  const activeTexture = textures[texture+'Texture'];

  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const {x,y,z} = ref.current.position;
        if(e.altKey){
          removeCube(x,y,z);
          return;
        }
        switch (clickedFace){
          case 0:
            addCube(x+1,y,z);
            break;
          case 1:
            addCube(x-1,y,z);
            break;
          case 2:
            addCube(x,y+1,z);
            break;
          case 3:
            addCube(x,y-1,z);
            break;
          case 4:
            addCube(x,y,z+1);
            break;
          case 5:
            addCube(x,y,z-1);
            break;
          default: {
            console.log(clickedFace);
            break;
          }
        }
      }}
      ref={ref}>
      <boxBufferGeometry attach={'geometry'}/>
      <meshStandardMaterial map={activeTexture} attach={'material'}/>
    </mesh>
  )
};

