export type konsulenthusType = {
  arbeidsgiver: string;
  dato_for_oppsigelse: string;
  type: string[];
  links: {
    text: string;
    url: string;
  }[];
  detaljer: string;
};

export type formSubmissionType = {
  email: string;
  message: string;
};
