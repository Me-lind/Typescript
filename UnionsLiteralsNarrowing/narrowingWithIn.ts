type APIResponse =
    | {
        data: {
            id: string
        }
    }
    | {
        error: string
    }

const handleResponse = (response: APIResponse) => {
    // How do we check if 'data' is in the response?

    if (!Element) {
        throw new Error('Could not find app element')
    }
}