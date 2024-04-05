/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type UserDocument=User & Document

@Schema()
export class User{

    @Prop()
    username:string;

    @Prop()
    description:string;

    @Prop({default:Date.now})
    date_added:Date;
}

export const UserSchema=SchemaFactory.createForClass(User);