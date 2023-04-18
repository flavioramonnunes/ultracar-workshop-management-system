import pieceList from "../tables/piece.json";

const getPieceList = () => {
    return pieceList.map((piece) => ({
        "id": piece.id,
        "name": `${ piece.name } R$ ${ piece.price }`,
    }));
};

export default getPieceList;