interface IdLookupEntry {
  [key: string]: {
    id: string;
    name: string;
  }
}

export interface IdLookup {
  contentGuidelines: IdLookupEntry;
  codeStandards: IdLookupEntry;
  components: IdLookupEntry;
}