export interface Post {
  pageTitle: string;
    metaTitle: string;
    overview: string;
    metaDescription:string;
    description:string;
    content: any;
    _id: string;
    slug: {
      current: string;
    };
    _createdAt: string;
  }