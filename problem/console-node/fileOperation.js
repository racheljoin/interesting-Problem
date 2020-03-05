const { readFile, writeFile } = require("fs");

function myReadFile(path) {
    return new Promise((res, rej) => {
        readFile(path, function(content, error) {
            if(error) {
                rej();
            } else {
                res(content);
            }
        })
    })
}

function writeFile(path, content, encode) {
    return new Promise((res, rej) => {
        readFile(path, content, encode, function(content, error) {
            if(error) {
                rej();
            } else {
                res(content);
            }
        })
    })
}