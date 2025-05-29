// TYPESCRIPT 

// CREATING INTERFACES

interface Album{
    userID: number;
    id: number;
    title: string;
}

interface Comment{
    postID: number;
    id: number;
    name: string;
    body: string;
}


// FETCHING DATA

function throwError(e: unknown): never{
    throw new Error("Error!");
}

const albumsContainer = document.getElementById("albums");
const commentsContainer = document.getElementById("comments");

try{
    const fetchAlbums = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const data: Album[] = await response.json();
        return data;

    }

     const fetchComments = async (id: number) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/${id}/comments");
        const data: Comment[] = await response.json();
        return data;

    }

    // FUNCTION FOR DISPLAY COMMENTS
    const displayComments = async (id: number) =>{

        const comments = await fetchComments(id);
      albumsContainer?.classList.add("hide");     
      albumsContainer?.classList.remove("show");  

        commentsContainer?.classList.remove("hide"); 
        commentsContainer?.classList.add("show"); 
      

          comments.forEach((comment) => {
            const commentItem = document.createElement("div");
            commentItem.classList.add("comment-item")
            commentItem.innerHTML = `<p>${comment.body}</p>`;
            commentsContainer?.appendChild(commentItem);

          
        })
        
    }

    // FUNCTION FOR DISPLAY ALBUM-ITEM
    const displayAlbums = async () =>{
        const albums = await fetchAlbums();
        albums.forEach((album) => {
            const albumItem = document.createElement("div");
            albumItem.classList.add("album-item")
            albumItem.innerHTML = `<p>${album.title}</p>`;
            albumsContainer?.appendChild(albumItem);

            // Add eventListener on albumItem
            albumItem.addEventListener('click',(e)=>{
                displayComments(album.id)
            })
        })
    }
    displayAlbums()

}catch(e){
    throwError(e);
}