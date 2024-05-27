export interface TimelineData {
  title: string,
  images: TimelineImage[]
}

export interface TimelineImage {
  src: string,
  caption?: string,
  args?: any
}

