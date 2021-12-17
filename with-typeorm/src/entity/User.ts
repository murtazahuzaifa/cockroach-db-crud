import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Check, Index } from "typeorm";

@Entity({ name: "user" })
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    // @Column({ type: "timestamptz", default: Date.now(),insert:true, })
    @CreateDateColumn()
    createAt: Date;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column({ type: "varchar", length: 50, unique: true, nullable: true })
    email: string;

    @Column({ type: "varchar", length: 20, unique: true, nullable: true })
    phoneNo: string;

}


/**
 * array, bool, boolean, bytes, bytea, blob, date, numeric, decimal,
 *  dec, float, float4, float8, double precision, real, inet, int, integer, 
 * int2, int8, int64, smallint, bigint, interval, string, character varying, 
 * character, char, char varying, varchar, text, time, time without 
 * time zone, timestamp, timestamptz, timestamp without time zone, 
 * timestamp with time zone, json, jsonb, uuid
 */


/** 
 * new Date("2021-12-15T14:29:53.538Z").toLocaleString()
  >> '12/15/2021, 7:29:53 PM'
*/