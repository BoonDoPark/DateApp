import { ReadUserDTO } from "../dto/read.dto";

export class DateTime {

    async createDate() {
        const now: Date = new Date();
        return await now;
    }

//     async updateNumber(dateNum: ReadUserDTO) {
//         const nowNum: number = (await this.createDate()).getTime();
//         // const day: number = nowNum - dateNum.d_day.getTime();
//         return day
//     }
}