interface IdLookupEntry {
  [key: string]: {
    id: string;
    name: string;
  }
}

export interface IdLookup {
  components: IdLookupEntry;
  codeStandards: IdLookupEntry;
}