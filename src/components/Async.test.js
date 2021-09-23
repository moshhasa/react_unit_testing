import { render, screen } from "@testing-library/react";
import Async from "./Async ";

describe("Async testing", () => {
  test("Renders post if request is successful without mock (do not do this... it is bad)", async () => {
    render(<Async />);

    const listItemElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 3000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });

  test("Renders post if request is successful using mock", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
