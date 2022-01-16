import { getAllCharacterNames, getCharacterData } from '../../lib/characters'
import Link from 'next/link'
import Title from '../../components/Title'

export default function AllCharactersPage({ characters }) {
    return (
        <div>
            <Title title="Characters" description="Character selection page" />
            <main className="w-full h-full overflow-y-auto pb-16">
                <div className="w-full">
                    {characters.map((character) => (
                        <div key={character}>
                            <Link
                                href={`/characters/${character.toLowerCase()}`}
                            >
                                <a className="text-3xl font-title">
                                    {character.replace('_', ' ')}
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const characters = getAllCharacterNames()
    return {
        props: {
            characters,
        },
    }
}
