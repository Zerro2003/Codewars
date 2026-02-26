export function solve(s: string): string {
  let sp = s.split("").filter((a) => a === a.toUpperCase());
  let spi = s.split("").filter((a) => a === a.toLowerCase());
  if (sp.length === spi.length || sp.length < spi.length)
    return s.toLowerCase();
  else {
    return s.toUpperCase();
  }
}
