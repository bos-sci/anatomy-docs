export interface IdLookupProperties {
  id: string;
  name: string;
  group: string | null;
  groupName: string | null;
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

export interface CarbonEntry {
  date: string;
  url: string;
  carbon: number;
  percent: number;
  error?: {
    status: string;
    statusText: string;
  };
}

export interface CarbonRecord extends CarbonEntry {
  _id: string;
}
