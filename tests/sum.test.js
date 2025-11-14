import {describe, expect, test} from "vitest";

import { sum } from "../src/sum";

describe("Sum", ()=> {
    test("Sum of two number", ()=> {
        expect(sum(1,2)).toBe(3);
    })
})