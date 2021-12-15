const friendList = document.getElementById("friends");

async function getFriends() {
    await fetch("https://randomuser.me/api/?results=5")
    .then(response => {
        return response.json()
    })
    .then(data => {
        let friends = data.results;
        friends.map(friend => {
            let pic = document.createElement("img")
            pic.src = friend.picture.large
            friendList.appendChild(pic)
        })
    })
}
getFriends();