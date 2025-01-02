import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('contact_form_entity')
export class ContactFormEntity {
    @PrimaryGeneratedColumn()
    id: number = 0; // Default value

    @Column({ type: 'varchar', default: "" })
    firstName: string = ""; // Default empty string

    @Column({ type: 'varchar', default: "" })
    lastName: string = ""; // Default empty string

    @Column({ type: 'varchar', default: "" })
    company: string = ""; // Default empty string

    @Column({ type: 'varchar', default: "" })
    email: string = ""; // Default empty string

    @Column({ type: 'varchar', default: "" })
    phoneNumber: string = ""; // Default empty string

    @Column({ type: 'varchar', default: "" })
    countryCode: string = ""; // Default empty string

    @Column({ type: 'varchar', default: "" })
    communicationMedium: string = ""; // Default empty string

    @Column({ type: 'varchar', default: "" })
    reason: string = ""; // Default empty string

    @Column({ type: 'boolean', default: false })
    agreeToPolicies: boolean = false; // Default false

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    timestamp: Date = new Date(); // Default current timestamp
}
