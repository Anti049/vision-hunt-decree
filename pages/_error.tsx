import Title from '../components/Title'
import { useRouter } from 'next/router'

function CustomErrorPage({ statusCode }) {
    const router = useRouter()

    const errorMessages = {
        404: {
            message: `Page "${router.asPath}"  Not Found`,
            subtitle: 'Please verify the URL',
        },
        500: {
            message: 'Internal Server Error',
            subtitle: 'Please try again later',
        },
        default: {
            message: 'Unknown Error Occurred',
            subtitle: "We're not sure what happened",
        },
    }

    function getErrorMessage(errorCode: number): Object {
        if (errorMessages[errorCode]) {
            return errorMessages[errorCode]
        }
        return errorMessages['default']
    }

    const errorMessage = getErrorMessage(statusCode)
    return (
        <div className="w-full my-auto">
            <Title
                title={`Error ${statusCode}`}
                description={`${statusCode} error`}
            />
            <main className="my-auto">
                <p className="text-9xl text-center text-primary mb-10">
                    {statusCode}
                </p>
                <p className="text-6xl text-center">
                    {errorMessage['message']}
                </p>
                <p className="text-3xl text-center mt-10">
                    {errorMessage['subtitle']}
                </p>
            </main>
        </div>
    )
}

CustomErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default CustomErrorPage
