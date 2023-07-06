import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class MessageService {

    constructor(private prisma: PrismaService){}

    getMessage(){
        return {msg:'amikkk'}
    }


    sendMessage(){
        return {msg:'hantar'}
    }

}