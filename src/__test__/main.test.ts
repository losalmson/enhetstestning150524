
import { sendMessage } from "../ts/main"

//Asign 
describe("Testing send message", () => {
    test("should be what goes in", () => {
        let result= "";
//Act
        result = sendMessage("Hello World");
//Assert
        expect(result).toBe("Hello World");
    });
});
