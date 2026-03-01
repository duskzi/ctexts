/*
CONFIG
*/
const CTEXT_DEFAULT_COLOR = "black";
const CTEXT_DEBUG_MODE = 1;

/*
CODE
*/
// Getting all elements with ctext class
const texts = document.getElementsByClassName("ctext");

// Parser
for (let text of texts) {
    let tokens = text.textContent.split(" ");
    let result = "";

    // Example:

    // The @c:red red @c: pirate

    // @c:red -> token
    // c      -> key
    // red    -> value

    for (let token of tokens) {
        if(token.startsWith("@")) {

            let subToken = token.slice(1).split(":");

            let key = subToken[0];
            let value = subToken[1];

            if(CTEXT_DEBUG_MODE == true) {
                console.log(token);
                console.log(key);
                console.log(value);
            }

            switch(key)
            {
                case "c":
                    if(value === "") {
                        value = CTEXT_DEFAULT_COLOR;
                    }

                    token = `<span style="color:${value}">`;
                    break;
                
                // TODO: add more key types, such as a (animated)

                default:
                    console.log("@ key couldn't be identified");
            }
        }
        
        result += token + " ";
    }

    text.innerHTML = result.trim();
}