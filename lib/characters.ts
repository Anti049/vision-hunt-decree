import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import genshindb from 'genshin-db'

var characterData = {}

export function getCharacterData(character) {
    if (!characterData[character]) {
        let data = genshindb.characters(character.replace('_', ' '))
        characterData[character] = {
            name: data.name,
            images: data.images,
        }
        console.log(characterData[character])
    }
    return {
        character,
        ...characterData[character],
    }
}

export function getAllCharacterNames(lowercase = false) {
    let data = genshindb.characters('names', { matchCategories: true })
    for (let index = 0; index < data.length; index++) {
        data[index] = data[index].replace(' ', '_')
        if (lowercase) data[index] = data[index].toLowerCase()
    }
    return data
}

export function getAllCharacters() {
    const data = getAllCharacterNames(true)
    return data.map((character) => {
        return {
            params: {
                character: character,
            },
        }
    })
}
