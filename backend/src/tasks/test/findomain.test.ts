import findomain from "../findomain";
jest.mock("../helpers/getDomains");
jest.mock("../helpers/saveDomainsToDb");

describe("findomain", () => {
  test("basic test", async () => {
    await findomain({
      organizationId: "organizationId",
      organizationName: "organizationName",
      scanId: "scanId",
      scanName: "scanName"
    })
  })
})