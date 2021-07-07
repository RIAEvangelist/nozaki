#! /usr/bin/env node
import process from 'process';

const args=Object.assign([],process.argv);
const cli={};

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
        lastKey=args[i].toLowerCase();
    }else{
        cli[lastKey]=args[i];
    }
}

console.log(cli);

function showHelp(){
    const helpMap={
        new:`accepts a String like "custom-component" and creates a new boilerplate component
            based on the custom-component String in the designated or default (components) 
            directory for components.`,

        '-dir':`accepts a String like "./my-components-dir" and places the new component in that directory.`
    }
    
    for(let key in helpMap){
        console.log(`
${key}:     ${helpMap[key]}
        
        `);
    }
}