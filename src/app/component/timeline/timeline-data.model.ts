export interface TimelineData {
  heading?: string,
  title?: string,
  images: TimelineImage[]
}

export interface TimelineImage {
  title?: string,
  src: string,
  caption?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args?: any
}

