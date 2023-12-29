import { toCapital } from "../util/Utils";

function DexResult (result) {
  const pokemon = result.result;
  console.log('POKEMON ', pokemon);
  const types = pokemon.types.map((type) => (type));
  const typesItems = types.map((type) => <li id={type.slot}>{type.type.name}</li>)
  return (
    <div>
      <div>
        <table className="ResultTable">
          <tbody>
            <tr>
              <td colSpan={2}>
                <h2>{toCapital(pokemon.name)}</h2>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <img
                  className="ResultImage" alt={pokemon.name}
                  src={pokemon.sprites.other['official-artwork'].front_default}/>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td align="left">Número</td>
              <td align="left">{pokemon.order}</td>
            </tr>
            <tr>
              <td align="left">Habilidad</td>
              <td align="left">{pokemon.abilities[0].ability.name}</td>
            </tr>
            <tr>
              <td align="left">Peso</td>
              <td align="left">{pokemon.weight} lbs.</td>
            </tr>
            <tr>
              <td align="left">Tipo</td>
              <td align="left"><ul>{typesItems}</ul></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <a href="/" class="text-decoration-none " color="blue">
        <button>Volver!</button>
      </a>
    </div>
  )
}

export default DexResult;
