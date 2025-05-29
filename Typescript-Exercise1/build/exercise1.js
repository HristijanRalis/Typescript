"use strict";
// TYPESCRIPT 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FETCHING DATA
function throwError(e) {
    throw new Error("Error!");
}
const albumsContainer = document.getElementById("albums");
const commentsContainer = document.getElementById("comments");
try {
    const fetchAlbums = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/albums");
        const data = yield response.json();
        return data;
    });
    const fetchComments = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/albums/${id}/comments");
        const data = yield response.json();
        return data;
    });
    // FUNCTION FOR DISPLAY COMMENTS
    const displayComments = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const comments = yield fetchComments(id);
        albumsContainer === null || albumsContainer === void 0 ? void 0 : albumsContainer.classList.add("hide");
        albumsContainer === null || albumsContainer === void 0 ? void 0 : albumsContainer.classList.remove("show");
        commentsContainer === null || commentsContainer === void 0 ? void 0 : commentsContainer.classList.remove("hide");
        commentsContainer === null || commentsContainer === void 0 ? void 0 : commentsContainer.classList.add("show");
        comments.forEach((comment) => {
            const commentItem = document.createElement("div");
            commentItem.classList.add("comment-item");
            commentItem.innerHTML = `<p>${comment.body}</p>`;
            commentsContainer === null || commentsContainer === void 0 ? void 0 : commentsContainer.appendChild(commentItem);
        });
    });
    // FUNCTION FOR DISPLAY ALBUM-ITEM
    const displayAlbums = () => __awaiter(void 0, void 0, void 0, function* () {
        const albums = yield fetchAlbums();
        albums.forEach((album) => {
            const albumItem = document.createElement("div");
            albumItem.classList.add("album-item");
            albumItem.innerHTML = `<p>${album.title}</p>`;
            albumsContainer === null || albumsContainer === void 0 ? void 0 : albumsContainer.appendChild(albumItem);
            // Add eventListener on albumItem
            albumItem.addEventListener('click', (e) => {
                displayComments(album.id);
            });
        });
    });
    displayAlbums();
}
catch (e) {
    throwError(e);
}
