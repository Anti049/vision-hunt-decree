import Head from 'next/head'

function Title({ title = '', description = '' }) {
    return (
        <Head>
            <title>
                {title ? `${title} | Vision Hunt Decree` : 'Vision Hunt Decree'}
            </title>
            <meta
                name="description"
                content={`Vision Hunt Decree: ${description}`}
            />
        </Head>
    )
}

export default Title
