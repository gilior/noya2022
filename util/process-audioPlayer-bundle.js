const fs = require("fs");
const path = require("path");

const audioPlayerOutputPath = path.join(process.cwd(), "audioPlayer-dir");
const publicAudioPlayerPath = path.join(process.cwd(), "public", "audioPlayer");

const files = fs.readdirSync(audioPlayerOutputPath);

const audioPlayerBundleFile = files.find((name) => /^audioPlayer-bundle/.test(name));

fs.rmSync(publicAudioPlayerPath, { force: true, recursive: true });

fs.mkdirSync(publicAudioPlayerPath, { recursive: true });
fs.renameSync(path.join(audioPlayerOutputPath, audioPlayerBundleFile), path.join(publicAudioPlayerPath, audioPlayerBundleFile));
fs.rmSync(audioPlayerOutputPath, { force: true, recursive: true });

fs.writeFileSync(path.join(process.cwd(), "util", "audioPlayer-bundle-info.js"), `export const audioPlayerPath = "/audioPlayer/${audioPlayerBundleFile}";`);