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
