// diff Destino.jsx
+ function Destino({ nome, descricao, distancia }) {
    return (
        <div className="destino">
            <h2>{nome}</h2>
            <p>{descricao}</p>
            +     <p>Distância: {distancia} km</p>
        </div>
    );
}