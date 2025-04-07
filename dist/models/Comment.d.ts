import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    content: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    content: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}> & {
    content: string;
    created_at: NativeDate;
    updated_at: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    content: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    content: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}>> & mongoose.FlatRecord<{
    content: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
