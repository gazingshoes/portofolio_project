// three.d.ts

import { BufferGeometryProps, MaterialProps } from '@react-three/fiber';
import { MeshLineMaterialParameters } from '@types/meshline';

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: BufferGeometryProps;
    meshLineMaterial: MaterialProps & MeshLineMaterialParameters;
  }
}