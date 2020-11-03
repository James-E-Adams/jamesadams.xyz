// @flow

export type Item = {
  name: string,
  description: string,
  time: string,
  image?: string,
  title: string,
  source?: string,
  ingredients?: Array<string>,
  instructions?: Array<string>,
}
