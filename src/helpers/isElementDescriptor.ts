export function isElementSingleObject(value: any): boolean {
  return (
    value != null &&
    !Array.isArray(value) &&
    typeof value === 'object' &&
    typeof value.component === 'string'
  );
}

export function isElementString(value: any): boolean {
  return value != null && !Array.isArray(value) && typeof value === 'string';
}
