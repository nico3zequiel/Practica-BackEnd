export interface ColorInput {
  color: string
}
export interface Color {
  name: string
  color: string
}
export interface ColorDB {
  [key: string]: Color
}