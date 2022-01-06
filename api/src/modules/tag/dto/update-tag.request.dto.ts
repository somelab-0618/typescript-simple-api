import { ApiProperty } from "@nestjs/swagger";

export class updateTagRequestDto {
    @ApiProperty()
    name: string;
}