export interface UnknownObj {
  [key: string]: string | number | any;
}

export interface StringObj {
  [key: string]: string;
}

export interface RGBAColor {
  R: number;
  G: number;
  B: number;
  A?: number;
}

export interface AvatarFeatures {
  shapes: StringObj;
  eyes: StringObj;
  brows: StringObj;
  mouths: StringObj;
  ears: StringObj;
  noses: StringObj;
  necks: StringObj;
  hairs: StringObj;
  staches: StringObj;
  lines: StringObj;
  props: StringObj;
  props2: StringObj;
  [key: string]: StringObj;
}
