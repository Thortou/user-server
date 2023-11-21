import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'users'})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    tel: string;
    @Column()
    password: string;

    @CreateDateColumn()
    create_at!: Date;
    @UpdateDateColumn()
    upate_at!: Date;
    @DeleteDateColumn()
    delete_at?: Date;
}