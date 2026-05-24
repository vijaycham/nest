import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  Ip,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id{/:name}')
  public getUsers(
    @Param('id') id: string,
    @Param('name') name?: string,
    // @Param('name') name?: string,
    @Query() query?: string,
  ): string {
    console.log(id, name);
    console.log(query);
    return `you sent a get req to users endpoint`;
  }

  @Post()
  public createUser(
    @Body() body: any,
    @Headers() headers: any,
    @Ip() ip: string,
  ): string {
    console.log(body);
    console.log(headers);
    console.log(ip);
    return 'you sent a post req to users endpoint';
  }
}
