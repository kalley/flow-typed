declare module 'd3-color' {
  declare type ColorValue = number | string
  declare type PlainColorObject =
    | {|
        r: number,
        g: number,
        b: number,
        opacity?: number
      |}
    | {|
        h: number,
        s: number,
        l: number,
        opacity?: number
      |}
    | {|
        l: number,
        a: number,
        b: number,
        opacity?: number
      |}
    | {|
        h: number,
        c: number,
        l: number,
        opacity?: number
      |}

  declare class Color {
    displayable(): boolean,
    toString(): string
  }

  declare class Rgb extends Color {
    r: number,
    g: number,
    b: number,
    a: number,
    constructor(
      r: ColorValue,
      g: ColorValue,
      b: ColorValue,
      opacity: ColorValue
    ): void,
    brighter(k?: number): Rgb,
    darker(k?: number): Rgb,
    rgb(): Rgb
  }

  declare class Hsl extends Color {
    h: number,
    s: number,
    l: number,
    opacity: number,
    constructor(
      h: ColorValue,
      s: ColorValue,
      l: ColorValue,
      opacity: ColorValue
    ): void,
    brighter(k?: number): Hsl,
    darker(k?: number): Hsl,
    rgb(): Rgb
  }

  declare class Lab extends Color {
    l: number,
    a: number,
    b: number,
    opacity: number,
    constructor(
      l: ColorValue,
      a: ColorValue,
      b: ColorValue,
      opacity: ColorValue
    ): void,
    brighter(k?: number): Lab,
    darker(k?: number): Lab,
    rgb(): Rgb
  }

  declare class Hcl extends Color {
    h: number,
    c: number,
    l: number,
    opacity: number,
    constructor(
      h: ColorValue,
      c: ColorValue,
      l: ColorValue,
      opacity: ColorValue
    ): void,
    brighter(k?: number): Hcl,
    darker(k?: number): Hcl,
    rgb(): Hcl
  }

  declare class Cubehelix extends Color {
    h: number,
    s: number,
    l: number,
    opacity: number,
    constructor(
      h: ColorValue,
      s: ColorValue,
      l: ColorValue,
      opacity: ColorValue
    ): void,
    brighter(k?: number): Cubehelix,
    darker(k?: number): Cubehelix,
    rgb(): Rgb
  }

  declare module.exports: {
    color: (format: ColorValue | Color | PlainColorObject) => Color,
    rgb: (
      r: ColorValue | Color | PlainColorObject,
      g?: ColorValue,
      b?: ColorValue,
      opacity?: ColorValue
    ) => Rgb,
    hsl: (
      h: ColorValue | Color | PlainColorObject,
      s?: ColorValue,
      l?: ColorValue,
      opacity?: ColorValue
    ) => Hsl,
    lab: (
      l: ColorValue | Color | PlainColorObject,
      a?: ColorValue,
      b?: ColorValue,
      opacity?: ColorValue
    ) => Lab,
    hcl: (
      h: ColorValue | Color | PlainColorObject,
      c?: ColorValue,
      l?: ColorValue,
      opacity?: ColorValue
    ) => Hcl,
    cubehelix: (
      h: ColorValue | Color | PlainColorObject,
      s?: ColorValue,
      l?: ColorValue,
      opacity?: ColorValue
    ) => Cubehelix
  }
}
