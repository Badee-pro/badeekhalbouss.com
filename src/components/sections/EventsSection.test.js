import { expect, test } from "bun:test";
import { newestEventsFirst } from "./EventsSection";

test("events appear newest first", () => {
  const events = [{ year: "2025" }, { year: "2026" }, { year: "2024" }];
  expect(newestEventsFirst(events).map((event) => event.year)).toEqual([
    "2026", "2025", "2024",
  ]);
});