/**
 * Tiny class-name joiner — no external dependency required.
 *
 * cx("px-4", isLarge && "px-6", undefined) -> "px-4 px-6"
 */
export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
