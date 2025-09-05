import util from "util";

const name = "ubay";
console.info(util.format("Nama %s", name));

const person = {
    firstName: "M Syafiq",
    lastName: "Ubaidillah"
};
console.info(`Person : ${JSON.stringify(person)}}`);
console.info(util.format("Person : %j", person));