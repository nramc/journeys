export interface TimelineData {
  heading?: string,
  title: string,
  images: TimelineImage[]
}

export interface TimelineImage {
  src: string,
  caption?: string,
  args?: any
}

