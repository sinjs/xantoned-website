interface Release {
  name: string;
  cover: string;
  text?: string;
  links: {
    spotify?: string;
    youtube?: string;
    apple?: string;
    deezer?: string;
    amazon?: string;
  };
}
