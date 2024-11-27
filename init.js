async function __main() {
    //fs
    const fs = await import('fs');
    //rl
    const rl = await import('readline');

    //建立config資料夾
    if(!fs.existsSync("./config"))
        fs.mkdirSync("./config", { recursive: true });

    //建立_prompt資料夾
    fs.mkdir("./_prompt", () => {
        //建立所有需求用的提示詞資料夾
        const promptFolder = JSON.parse(fs.readFileSync("./setting.json")).promptFolder;
        for(let i in promptFolder){
            //建立對話資料夾
            fs.mkdir(`./_prompt/${promptFolder[i]}`, () => {
                //建立範例系統與對話資料夾
                const promptType = JSON.parse(fs.readFileSync("./setting.json")).promptType;
                for(let j in promptType){
                    fs.writeFileSync(`./_prompt/${promptFolder[i]}/${promptType[j]}.txt`, "prompt here");
                }
            })
        }
    });

    //建立API資料夾
    if(!fs.existsSync("./_API"))
        fs.mkdirSync("./_API");

    //建立模組資料夾
    if(!fs.existsSync("./_module"))
        fs.mkdirSync("./_module");

    //建立資料資料夾
    if(!fs.existsSync("./data"))
        fs.mkdirSync("./data");
}

__main();