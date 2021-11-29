export type Page = {
  contents: {
    id: string;
    name: string;
    entry_number: number;
    gender: string;
    top_image: {
      url: string;
      width: string;
      height: string;
    };
  }[];
};

export type Content = {
  id: string;
  name: string;
  entry_number: number;
  gender: string;
  top_image: {
    url: string;
    width: string;
    height: string;
  };
};
