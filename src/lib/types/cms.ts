export type PageStatus = "draft" | "published" | "archived";
export type PageVisibility = "public" | "private";
export type PageTemplate = "default" | "full-width" | "landing";

export interface SectionBlock {
  id: string;
  type: string; // e.g., 'hero', 'feature-grid', 'cta'
  content: Record<string, any>;
  order: number;
}

export interface PageSection {
  id: string;
  type: string; // e.g., 'main-content', 'sidebar'
  blocks: SectionBlock[];
  order: number;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  template: PageTemplate;
  status: PageStatus;
  visibility: PageVisibility;
  lastUpdated: string;
  seo: {
    title: string;
    metaDescription: string;
  };
  sections: PageSection[];
}

export type ContentStatus = "published" | "draft" | "archived";

export interface Project {
  id: string;
  title: string;
  category: string;
  status: ContentStatus;
  lastUpdated: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: "image" | "video";
  status: ContentStatus;
  lastUpdated: string;
}

export interface Workshop {
  id: string;
  title: string;
  date: string;
  instructor: string;
  status: ContentStatus;
  lastUpdated: string;
}

export interface Internship {
  id: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time";
  status: ContentStatus;
  lastUpdated: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  status: "active" | "inactive";
  lastUpdated: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  date: string;
  status: "new" | "read" | "archived";
}

export interface FAQ {
  id: string;
  question: string;
  category: string;
  status: ContentStatus;
  lastUpdated: string;
}

export interface Announcement {
  id: string;
  title: string;
  type: "info" | "warning" | "alert";
  status: ContentStatus;
  lastUpdated: string;
}