export const CardPatch = `
    input CardPatch {
        # title is required
        title       : String
        description : String
        done        : Boolean
    }
`;