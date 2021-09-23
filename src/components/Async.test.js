import { render, screen } from "@testing-library/react";
import Async from "./Async ";

describe("Async testing", () => {

    test("Renders post if request is successful", async () => {
        render(<Async/>);

        const listItemElements = await screen.findAllByRole("listitem", {}, {timeout: 3000});
        expect(listItemElements).not.toHaveLength(0);
    })
})