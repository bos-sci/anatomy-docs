export interface IdLookupProperties {
  id: string;
  name: string;
  group: string | null;
  leadParagraph?: string;
}

export interface IdLookupEntry {
  [key: string]: IdLookupProperties;
}

export interface IdLookup {
  foundations: IdLookupEntry;
  contentGuidelines: IdLookupEntry;
  codeStandards: IdLookupEntry;
  components: IdLookupEntry;
  resources: IdLookupEntry;
}

export interface CarbonResult {
  url: string;
  carbon: number;
  percent: number;
  error?: {
    status: string;
    statusText: string;
  };
}

export interface CarbonData {
  date: string;
  results: CarbonResult[];
}

export interface CarbonRecord extends CarbonData {
  _id: string;
}
