export interface Thirukkural {
  chapter: string;
  kural: string[];
  number: number;
  section: string;
  meaning: {
    en?: string;
    en_modern?: string;
    ta_mu_va?: string;
    ta_salamon?: string;
  };
}
