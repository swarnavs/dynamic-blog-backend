import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    username: string;
    email: string;
    password: string;
    verified: boolean;
    verification_token: number;
    verification_token_time: NativeDate;
    created_at: NativeDate;
    updated_at: NativeDate;
    profile_pic_url?: string;
    reset_password_token_time?: NativeDate;
    reset_password_token?: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    password: string;
    verified: boolean;
    verification_token: number;
    verification_token_time: NativeDate;
    created_at: NativeDate;
    updated_at: NativeDate;
    profile_pic_url?: string;
    reset_password_token_time?: NativeDate;
    reset_password_token?: number;
}> & {
    username: string;
    email: string;
    password: string;
    verified: boolean;
    verification_token: number;
    verification_token_time: NativeDate;
    created_at: NativeDate;
    updated_at: NativeDate;
    profile_pic_url?: string;
    reset_password_token_time?: NativeDate;
    reset_password_token?: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    email: string;
    password: string;
    verified: boolean;
    verification_token: number;
    verification_token_time: NativeDate;
    created_at: NativeDate;
    updated_at: NativeDate;
    profile_pic_url?: string;
    reset_password_token_time?: NativeDate;
    reset_password_token?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username: string;
    email: string;
    password: string;
    verified: boolean;
    verification_token: number;
    verification_token_time: NativeDate;
    created_at: NativeDate;
    updated_at: NativeDate;
    profile_pic_url?: string;
    reset_password_token_time?: NativeDate;
    reset_password_token?: number;
}>> & mongoose.FlatRecord<{
    username: string;
    email: string;
    password: string;
    verified: boolean;
    verification_token: number;
    verification_token_time: NativeDate;
    created_at: NativeDate;
    updated_at: NativeDate;
    profile_pic_url?: string;
    reset_password_token_time?: NativeDate;
    reset_password_token?: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
