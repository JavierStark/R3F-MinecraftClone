import {NearestFilter, RepeatWrapping, TextureLoader} from "three";

import { dirtImg,glassImg,woodImg,logImg,grassImg } from './images';

const dirtTexture = new TextureLoader().load(dirtImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;

grassTexture.wrapS = RepeatWrapping;
grassTexture.wrapT = RepeatWrapping;

export {
  dirtTexture,
  glassTexture,
  woodTexture,
  logTexture,
  grassTexture
}