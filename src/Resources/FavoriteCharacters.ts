import { Character } from "./../entities/Character";
import { IRegisterFavoriteCharacterRequestDTO } from "./../useCases/RegisterFavoriteCharacter/RegisterFavoriteCharacterDTO";

export function getFavoriteCharactersResource(
  characters: Character[]
): IRegisterFavoriteCharacterRequestDTO[] {
  return characters.map((character: Character) => {
    // Get Origin
    const originArray = character.origin ? character.origin.split(" - ") : "";
    const origin = {
      name: originArray[0],
      url: originArray[1],
    };

    // Get Location
    const locationArray = character.location
      ? character.location.split(" - ")
      : "";
    const location = {
      name: originArray[0],
      url: locationArray[1],
    };

    const favoriteCharactersResource: IRegisterFavoriteCharacterRequestDTO = {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: origin,
      location: location,
      image: character.image,
      episode: JSON.parse(character.episode),
      url: character.url,
      created: character.created,
      user_id: character.user_id,
    };

    return favoriteCharactersResource;
  });
}
