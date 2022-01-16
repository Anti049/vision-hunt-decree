/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { getAllCharacters, getCharacterData } from '../../lib/characters'
import Title from '../../components/Title'

const CharacterPage = ({ character }) => {
    const [characterData, setCharacterData] = useState(null)

    useEffect(() => {
        setCharacterData(character)
    }, [character])

    return (
        <div>
            {characterData && (
                <div>
                    <Title title={characterData.name} />
                    <main className="flex">
                        <div className="flex flex-col items-start max-w-screen-xl bg-item rounded-2xl">
                            <img
                                className="character-image object-cover self-center xl:self-auto rounded-2xl -mb-6"
                                src={characterData.images.cover2}
                                alt="cover2"
                            />
                        </div>
                    </main>
                </div>
            )}
            {!characterData && (
                <div>
                    <Title title="Loading" />
                </div>
            )}
        </div>
    )
}

export function getStaticPaths() {
    const paths = getAllCharacters()
    return {
        paths,
        fallback: false,
    }
}

export function getStaticProps({ params }) {
    const character = getCharacterData(params.character)
    return {
        props: {
            character,
        },
    }
}

export default CharacterPage
