import {ApiProperty} from "@nestjs/swagger"


export class CreateUserDto {
@ApiProperty({name:"namee",required:true})
name:{
    required:true,
    type:String
}

}
