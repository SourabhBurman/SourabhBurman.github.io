export function workTitleConverter(title: string): string {
  return title.toLowerCase().split(" ").join("-");
}

export function workTitleReverter(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
