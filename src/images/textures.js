import {TextureLoader} from "three";

import { dirtImg,glassImg,woodImg,logImg,grassImg } from './images';

const dirtTexture = new TextureLoader().load(dirtImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);

export {
  dirtTexture,
  glassTexture,
  woodTexture,
  logTexture,
  grassTexture
}