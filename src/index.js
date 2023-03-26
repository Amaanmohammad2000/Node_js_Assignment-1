const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName,fileContent)
	console.log("file created");
}

const myFileReader = async (fileName) => {
	let text = fs.readFile(fileName,'utf8');
	text.then(data=>console.log(data));
}


const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFile(fileName,fileContent)
	console.log("file has been updated")
}

const myFileDeleter = async (fileName) => {
	fs.unlink(fileName);
	console.log("file deleted");
}

myFileWriter("file.txt","Hello");
myFileReader("file.txt")
myFileUpdater("file.txt"," World");
myFileDeleter("file.txt");
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

// const fs = require('fs/promises')

// const myFileWriter = async (fileName, fileContent) => {
// 	fs.writeFile(fileName, fileContent);
// 	console.log("File Created");
// }

// const myFileReader = async (fileName) => {
// 	let text = fs.readFile(fileName, "utf8");
// 	text.then((data) => {
// 		console.log(data);
// 	})
// }


// const myFileUpdater = async (fileName, fileContent) => {
// 	fs.appendFile(fileName, fileContent);
// 	console.log("File has been updated");
// }

// const myFileDeleter = async (fileName) => {
// 	fs.unlink(fileName);
// 	console.log("File deleted");
// }

// myFileWriter("file.txt","Hello");
// myFileReader("file.txt")
// myFileUpdater("file.txt"," World");
// myFileDeleter("file.txt");
// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }


