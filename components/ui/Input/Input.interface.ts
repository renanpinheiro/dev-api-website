export interface IInputProps<Multiline = false> {
  label?: string
  name: string
  multiline?: Multiline
  mask?: {
    regex: RegExp
    replace: string
  }
}
