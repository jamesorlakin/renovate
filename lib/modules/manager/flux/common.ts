export const systemManifestFileRegex =
  '(^|/)flux-system/(?:.+/)?gotk-components\\.ya?ml$';

export const systemManifestHeaderRegex = '#\\s*Flux\\s+Version:\\s*(\\S+)(?:\\s*#\\s*Components:\\s*([A-Za-z,-]+))?'