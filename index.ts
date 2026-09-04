import * as process from "node:process";
import {getPage} from "./fetch-page.js";

async function  main() {
    const url = process.argv[2]

    if (!url) {
        throw new Error("Missing parameter url")
    }

    const $ = await getPage(url)
    if ($ == null) {
        throw new Error("failed to get page")
    }
    console.log($("title").text().trim())
}

main().catch((err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
});