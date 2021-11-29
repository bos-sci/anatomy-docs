interface IdLookupEntry {
  [key: string]: {
    id: string;
    name: string;
  }
}

export interface IdLookup {
  foundations: IdLookupEntry;
  contentGuidelines: IdLookupEntry;
  codeStandards: IdLookupEntry;
  components: IdLookupEntry;
  resources: IdLookupEntry;
}