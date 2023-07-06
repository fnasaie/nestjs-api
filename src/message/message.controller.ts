import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { MessageService } from "./message.service";

@Controller('message')
export class MessageController {
    constructor(private messageService: MessageService) {
    }
    
    @Post('sendMessage')
    sendMessage(@Body() dto: any) {
        console.log(dto);
        return this.messageService.sendMessage()

    }

    @Get('getMessage')
    getMessage() {
        return this.messageService.getMessage()
    }

}