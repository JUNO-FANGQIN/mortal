#!/usr/bin/env node
const yargs = require('yargs')
const inquirer = require('inquirer')
console.log('mortal start: ')
console.log('args: ', yargs.argv)

function createBuilder(yargs) {
    return yargs.option('name', {
        alias: 'n',
        demand: true,
        describe: '模板名称',
        type: 'string'
    })
}

function createHandler(args) {
    console.log('createHandler args', args)
}

function initBuilder(yargs) {
    return yargs.option('type', {
        alias: 't',
        demand: true,
        describe: '项目类型',
        type: 'string'
    })
}

function initHandler(args) {
    inquirer.prompt([{
        type: 'input',
        name: 'value'
    }]).then(answers => {
        console.log('answers is', answers)
    })
}

yargs.command(['create', 'c'], '创建模版', createBuilder, createHandler).argv
yargs.command(['init', 'i'], '初始化项目', initBuilder, initHandler).argv

