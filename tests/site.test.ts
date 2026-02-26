import { describe, expect, it } from "vitest";
import { CLAIMED, LOCAL_BENCH, SITE_URL, deployButtonUrl } from "../lib/site";

describe("site constants", () => {
  it("builds a deploy.workers.cloudflare.com URL", () => {
    const url = deployButtonUrl("https://github.com/acme/example");
    expect(url).toBe(
      "https://deploy.workers.cloudflare.com/?url=https%3A%2F%2Fgithub.com%2Facme%2Fexample",
    );
  });

  it("uses vinext.h1n054ur.dev as the site URL", () => {
    expect(SITE_URL).toBe("https://vinext.h1n054ur.dev");
  });

  it("has claimed benchmark numbers from the CF blog", () => {
    expect(CLAIMED.vinextBuildMs).toBeLessThan(CLAIMED.nextBuildMs);
    expect(CLAIMED.vinextBundleKb).toBeLessThan(CLAIMED.nextBundleKb);
  });

  it("has local benchmark results", () => {
    expect(LOCAL_BENCH.runs).toBeGreaterThanOrEqual(1);
    expect(LOCAL_BENCH.vinextBundleKb).toBeLessThan(LOCAL_BENCH.nextBundleKb);
    expect(LOCAL_BENCH.bundleReductionPct).toBeGreaterThan(0);
  });
});
