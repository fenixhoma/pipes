import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'CustomUpper'
})
export class MayusculasPipe implements PipeTransform{

    transform(input: string, extra: boolean = false): string {
        return ( extra ) ? `${input} and extra` : input ;
    }

}