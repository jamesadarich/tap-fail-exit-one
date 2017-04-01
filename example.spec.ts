import { TestFixture, TestCase, Test, Expect } from "alsatian";

@TestFixture("example tests")
export class ExampleTests {

    @TestCase(1)
    @TestCase(2)
    @Test("example test")
    public exampleTests(something: number) {
        Expect(something).toBe(1);
    }
}