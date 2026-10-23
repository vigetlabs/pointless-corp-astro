import type { ISbStoryData } from '@storyblok/astro';
import type { StoryblokRichTextDoc } from '@storyblok/richtext';

// Shapes of the content returned by the Storyblok delivery API. These are
// declared as type aliases (not interfaces) so they stay assignable to the
// SDK's index-signature SbBlokData type that StoryblokComponent expects.

type Blok<Component extends string> = {
  _uid: string;
  component: Component;
  _editable?: string;
};

export type RichText = StoryblokRichTextDoc;

export type Asset = {
  id: number | null;
  filename: string;
  alt?: string | null;
  title?: string | null;
};

export type Color = {
  color: string;
};

export type ProjectType = 'tools' | 'experiments' | 'stunts';

// Nested bloks

export type FaqBlok = Blok<'faq'> & {
  question: string;
  answer: RichText;
};

export type RelatedContentBlok = Blok<'relatedContent'> & {
  url: string;
  title: string;
  sourceName: string;
};

export type ImageBlok = Blok<'image'> & {
  image: Asset;
};

export type TextBlok = Blok<'text'> & {
  text: RichText;
};

export type VideoBlok = Blok<'video'> & {
  videoUrl: string;
  caption: string;
};

export type EmbeddedContentBlok = Blok<'embeddedContent'> & {
  embed: string;
  caption: string;
};

export type ExampleBlok = ImageBlok | TextBlok | VideoBlok | EmbeddedContentBlok;

// Content types

export type HomepageContent = Blok<'homepage'> & {
  heroText: string;
  aboutText: RichText;
  processText: RichText;
  contactUs: RichText;
  hireViget: RichText;
  joinViget: RichText;
  featureImages: Asset[];
  culturePhotos: Asset[];
  processPhotos: Asset[];
  generalPhotos: Asset[];
  faq: FaqBlok[];
};

export type ProjectContent = Blok<'project'> & {
  type: ProjectType;
  tagline: string;
  description: RichText;
  icon: Asset;
  logo: Asset;
  url: string;
  xHandle: string;
  launchDate: string;
  retiredDate: string;
  backgroundColor?: Color;
  accentColor?: Color;
  textColor?: Color;
  linkColor?: Color;
  examples: ExampleBlok[];
  process: Asset[];
  relatedContent: RelatedContentBlok[];
};

export type HomepageStory = ISbStoryData<HomepageContent>;
export type ProjectStory = ISbStoryData<ProjectContent>;
