#! /usr/bin/env node
import process from 'process';
import fs from 'fs';

const args=Object.assign([],process.argv);
const cli={
    path:process.argv[1].replace(/\\/g,'/')
        .replace('bin/nozaki.js','')
};

const dir='./components/';
const exdir='./example/';

{
    if(args.length<4 || (args.length%2)){
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

if(cli.new){
    (cli.dir)? null:cli.dir=dir;
    
    const classNameParts=cli.new.split('-');
    let className='';

    for(let i=0;i<classNameParts.length; i++){

        className+=classNameParts[i][0].toUpperCase()+
            classNameParts[i].slice(1);
    }

    if (!fs.existsSync(cli.dir)){
        fs.mkdirSync(cli.dir);
    }
    
    let boilerplate=fs.readFileSync(`${cli.path}/boilerplate.js`, 'utf8')
        .replace(/nozaki-x/g,cli.new)
        .replace(/NozakiX/g,className);
    
    fs.writeFileSync(`${cli.dir}${cli.new}.js`,boilerplate,'utf8');

    console.log(`created component ${cli.dir}${cli.new}.js`);
}

if(cli.example){
    (cli.exdir)? null:cli.exdir=exdir;
    
    const classNameParts=cli.example.split('-');
    let className='';

    for(let i=0;i<classNameParts.length; i++){

        className+=classNameParts[i][0].toUpperCase()+
            classNameParts[i].slice(1);
    }

    if (!fs.existsSync(cli.exdir)){
        fs.mkdirSync(cli.exdir);
    }
    
    let boilerplate=fs.readFileSync(`${cli.path}boilerplate-example.html`, 'utf8')
        .replace(/nozaki-x/g,cli.example)
        .replace(/NozakiX/g,className);
    
    fs.writeFileSync(`${cli.exdir}${cli.example}.html`,boilerplate,'utf8');

    console.log(`created example ${cli.exdir}${cli.example}.html`);
}

function showHelp(){
    console.log('\nEither help requested or there was an error in your command.\n\n');
    const helpMap={
        new:`accepts a String like "custom-component" and creates a new boilerplate component
            based on the custom-component String in the designated or default (components) 
            directory for components.`,

        '-dir':`accepts a String like "./my-components-dir" and places the new component 
            in that directory.`,

        '-h|-help':'Shows this menu. it must be the only arg passed.'
    }
    
    for(let key in helpMap){
        console.log(`
${key}:     ${helpMap[key]}
        
        `);
    }
}