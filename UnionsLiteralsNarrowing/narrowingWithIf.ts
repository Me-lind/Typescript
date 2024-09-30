function validateUsername(username: string | null): boolean {
    // return username.length > 5
    // Rewrite this function to make the error go away
    //   by introducting conditional
    if (username) {
        return username.length > 5
    }

    return false

}