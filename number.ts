import { filter, from , map} from "rxjs";

const num = [1,2,3,4,5,6,7,8,9,10];

let numStream = from(num) 

numStream.pipe(
    filter((item: any) => {
        return item % 2 !== 0
    }),
    map((x) =>  x* 2
    )
).subscribe({
    next:(value) => {
        console.log(value)
    }
})
