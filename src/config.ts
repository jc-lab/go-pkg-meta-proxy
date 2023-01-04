function getContextPath() {
  const input = process.env.CONTEXT_PATH || '/';
  if (input.endsWith('/')) {
    return input;
  }
  return input + '/';
}

export const CONTEXT_PATH = getContextPath();
export const PORT = parseInt(process.env.PORT || '8080');
export const PKG_VCS = process.env.PKG_VCS || 'git';
export const PKG_IMPORT_PATTERN = process.env.PKG_IMPORT_PATTERN as string;
export const PKG_SOURCE_PATTERN = process.env.PKG_SOURCE_PATTERN as string;
