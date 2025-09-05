function samplePromise(){
    return Promise.resolve("Ubaibaik");
}

const name = await samplePromise();
console.info(name);
