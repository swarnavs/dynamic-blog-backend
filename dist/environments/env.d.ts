export interface Environment {
    db_url: string;
    jwt_secret: string;
    base_url: string;
}
export declare function getEnvironmentVariables(): Environment;
