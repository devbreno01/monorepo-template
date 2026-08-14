export const JwtConstants = {
    get secret() {
        return process.env.JWT_SECRET;
    },
};
