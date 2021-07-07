#! /usr/bin/env node
import process from 'process';
import fs from 'fs';

const args=Object.assign([],process.argv);
const cli={
    path:process.argv[1].replace(/\\/g,'/')
        .replace('bin/nozaki.js','')
};
let dir='./components';

{
    if(args.length<4){
        showHelp();

        process.exit(0);
    }
    //ditch the defaults.
    args.splice(0,2);
}

//if only 1 arg detected something is wrong,
//display help

//build cli with args
let lastKey='';
for(let i = 0; i < args.length; ++i) {
    if(!(i%2)){
        lastKey=args[i].toLowerCase().replace('-','');
    }else{
        cli[lastKey]=args[i];
    }
}

{
    (cli.dir)? null:cli.dir=dir;

    if (!fs.existsSync(cli.dir)){
        fs.mkdirSync(cli.dir);
    }
    
    console.log(cli);

    fs.copyFileSync(`${cli.path}/boilerplate.js`, `${cli.dir}/${cli.new}.js`);
}

function showHelp(){
    const helpMap={
        new:`accepts a String like "custom-component" and creates a new boilerplate component
            based on the custom-component String in the designated or default (components) 
            directory for components.`,

        '-dir':`accepts a String like "./my-components-dir" and places the new component in that directory.`,

        '-h|-help':'Shows this menu. it must be the only arg passed.'
    }
    
    for(let key in helpMap){
        console.log(`
${key}:     ${helpMap[key]}
        
        `);
    }
}