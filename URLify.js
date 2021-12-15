// Let's create a function that takes in a blog post title and returns the URL-ified version. To create a URL friendly version of a blog post title, all punctuation must be removed, all letters must be lowercase, and all spaces must be joined by hyphens. You should use a combination of regular expressions and string prototype functions to complete this challenge.

function urlify(title){
    let newTitle = title.replace(/[^\w\s]/g, "")
    .replace(/ /g, "-")
    .toLowerCase()
//     let noPunc = title.replace(/[^\w\s]/g, "");
//     let noSpaces = noPunc.replace(/ /g, "-");
//    let newTitle = noSpaces.toLowerCase()
   return console.log(newTitle)
}

urlify(`I.t~s. ?s[t{i+l*l! n@Ot^ w&orking`)

// jk got it working.