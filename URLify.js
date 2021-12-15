
function urlify(title){
    let noPunc = title.replace(/[^\w\s]/g, "");
    let noSpaces = noPunc.replace(/ /g, "-");
   let newTitle = noSpaces.toLowerCase()
   return console.log(newTitle)
}

urlify(`I.t~s. ?s[t{i+l*l! n@Ot^ w&orking`)

// jk got it working.