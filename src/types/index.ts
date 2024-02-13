export type opt = {
  value: string;
  label: string;
};

export function strToOpt(s: string): opt {
  return { value: s, label: s };
}
