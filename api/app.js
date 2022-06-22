import express from "express";
const app = express();
import inquirer from "inquirer"
import pressAnyKey from 'press-any-key';
import cors from "cors";


const PORT = process.env.PORT || 8080;
let result;
app.use(cors());



// //output
inquirer
    .prompt([{ type: "confirm", name: "comment", message: "if you will entered wrong number use the up-arrow-button to clear the input, press enter to continue" },
    {
        type: "number", name: "altitude", message: "what is your altitude? (between 0 - 3000) ", validate: (answer) => {
            if (answer > 3000 || answer < 0) return '';
            return true;
        }
    },
    {
        type: "number", name: "hsi", message: "what is your hsi? (between 0 - 360)", validate: (answer) => {
            if (answer > 360 || answer < 0) return "";
            return true;
        }
    },
    {
        type: "number", name: "adi", message: "what is your adi? (between -100 to 100)", validate: (answer) => {
            if (answer > 100 || answer < -100) return "";
            return true;
        }
    },
    ])
    .then((answers) => {

        //any key button
        pressAnyKey("Press any key to continue, or CTRL+C to reject", {
            ctrlC: "reject"
        }).then(() => {

            result = answers;
            delete result.comment;
            console.log(answers)
        })
            .catch(() => {
                console.log('You pressed CTRL+C')
            });
    })


app.listen(PORT, () => {
    // console.log(`Server listening on ${PORT}`);
})


app.use(express.json());

//sending data to the server
app.get("/", (req, res) => {
    res.json(
        result,
    );
})
