import { Column } from "../../../../src/decorator/columns/Column"
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn"
import { Entity } from "../../../../src/decorator/entity/Entity"
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne"

import { Company } from "./Company"

@Entity()
export class User {
    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => Company, { deferrable: "INITIALLY DEFERRED" })
    company: Company
}
