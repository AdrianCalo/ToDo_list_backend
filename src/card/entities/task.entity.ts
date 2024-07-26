import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    cardId:number;

    @Column({nullable:true,unique:true})
    title:string;

    @Column({nullable:true})
    description:string;

    //agregar status
    //agregar createdAt
}

//la entidad se debe llamar task

//crear otra tabla para guardar las terminadas envesde borrarlas