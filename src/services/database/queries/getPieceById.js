import getPieceList from "./getPieceList";

const getPieceById = (id) => {
    const list = getPieceList();
    return list.find((piece) => piece.id === id);
};

export default getPieceById;