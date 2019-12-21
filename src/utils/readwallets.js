const fs = require('fs')
// Read the contents of the directory /usr/local/bin asynchronously.
// The callback will be invoked once the operation has either completed
// or failed.
export default const readwalletnames =  function(dirname){
    fs.readdir(dirname, (err, files) => {
        // On error, show it and return
        if(err) return err
      
        // files is an array containing the names of all entries
        // in the directory, excluding '.' (the directory itself)
        // and '..' (the parent directory).
        return files
    });
}
