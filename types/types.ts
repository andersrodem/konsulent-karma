
// Konsulenthustype
// {
//     "arbeidsgiver": "Netlight",
//     "dato_for_oppsigelse": "2024-06-12",
//     "type": {
//       "internship": "ja",
//       "fast stilling": "ja"
//     },
//     "links": {
//         "Netlight": "https://www.netlight.com/"
//         }
//   },
export type konsulenthusType = {
    arbeidsgiver: string;
    dato_for_oppsigelse: string;
    type: {
        internship: string;
        fast_stilling: string;
    };
    links: {
        [key: string]: string;
    };
};