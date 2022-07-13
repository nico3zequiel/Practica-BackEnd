import { Color, ColorDB, ColorInput } from "@interfaces/Colors.ts";

export const colorDB: ColorDB = [
  { name: "blue", color: "#0000ff" },
  { name: "red", color: "#ff0000" },
  { name: "yellow", color: "#ffff00" },
  { name: "green", color: "#008000" }
]

const colors: ColorDB = []

export const getColors = (): Promise<Color[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(colors);
    }, 300);
  })
}
export const postColor = (color: ColorInput): Promise<Color> => {
  return new Promise(resolve => {
    const newColor: Color = color
    colors.push(newColor);
    setTimeout(() => {
      resolve(newColor);
    }, 300);
  })
}