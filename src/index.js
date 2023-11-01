const readline = require("readline");
const fancyprinter = require("fancy-printer");
const { getProfileInfo } = require("./query");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Github bilgileri gösterilicek kullanıcı adı girin: " , async (username) => {
    const data = await getProfileInfo(username);

    fancyprinter.log(`Kullanıcı Adı: ${data.login}`);
    fancyprinter.log(`ID: ${data.id}`);
    fancyprinter.log(`Ad : ${data.name}`);
    fancyprinter.log(`Biyografi : ${data.bio}`);
    fancyprinter.log(`Açık Repolar : ${data.public_repos}`);
    fancyprinter.log(`Takipçi Sayısı : ${data.followers}`);

    rl.close();
});